// hooks/useSignOut.js (or useAuth.js for auth-related hooks)
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"; // Assuming you use React Router for navigation
import { toast } from "react-hot-toast"; // For showing notifications (optional, but good UX)
import { signOut as signOutApi } from "../../services/auth/apiAuth"; // Import your signOut function
import { useUser } from "../../../hooks/useUser"; // Assuming useUser gives you token and user info

export function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { clearUser } = useUser(); // Assuming useUser also provides a function to clear local user state

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (token) => signOutApi(token), // The function that performs the sign-out API call
    onSuccess: () => {
      // 1. Invalidate and remove ALL queries from the cache
      // This is crucial for logout to clear any sensitive data
      queryClient.clear(); // Clears all data from React Query cache

      // 2. Clear user state from your global state/local storage
      clearUser(); // Call the function from useUser to clear user data (e.g., token, user details)
      // This is hypothetical; you need to implement `clearUser` in your `useUser` hook.

      // 3. Navigate to the login page or home page
      navigate("/login", { replace: true }); // Use replace to prevent going back to protected pages
      toast.success("تم تسجيل الخروج بنجاح!"); // Show success toast
    },
    onError: (err) => {
      // Handle errors during sign-out (e.g., network issues, server errors)
      console.error("Error signing out:", err);
      toast.error(err.message || "فشل تسجيل الخروج، يرجى المحاولة مرة أخرى."); // Show error toast
    },
  });

  return { signOut: mutate, isLoading }; // Renamed 'mutate' to 'signOut' for clarity
}
