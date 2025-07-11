// hooks/useSignOut.js (or useAuth.js for auth-related hooks)
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast"; // For showing notifications (optional, but good UX)
import { useUser } from "../../hooks/useUser";
import { signOut as signOutApi } from "../../services/student/apiSignOut";
import { useNavigate } from "react-router-dom";

export function useSignOut() {
  //   const navigate = useNavigate();
  const { token, user } = useUser();
  const navigate = useNavigate();

  const role = user?.role;
  let url;
  // Assuming useUser also provides a function to clear local user state

  switch (role) {
    case "Student":
      url = "/students/login";
      break;
    default:
      url = "/teachers/login";

      break;
  }
  const isTeacher = role === "Teacher";
  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: () => signOutApi(token, role), // The function that performs the sign-out API call
    onSuccess: () => {
      toast.success("تم تسجيل الخروج بنجاح!"); // Show success toast
      navigate(url);
    },
    onError: (err) => {
      console.error("Error signing out:", err);
      toast.error(err.message || "فشل تسجيل الخروج، يرجى المحاولة مرة أخرى."); // Show error toast
    },
  });

  return { mutate, isLoading }; // Renamed 'mutate' to 'signOut' for clarity
}
