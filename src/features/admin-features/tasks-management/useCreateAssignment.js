import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function
import toast from "react-hot-toast";
import { createAssignment } from "../../../services/admin/apiAssignments";

export function useCreateAssignment() {
  const { token } = useUser();
  const queryClient = useQueryClient(); // Get the queryClient instance

  const mutation = useMutation({
    mutationFn: async ({ createdData }) => {
      console.log(createdData);
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return createAssignment(createdData, token);
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم اضافة المحتوى بنجاح");
      queryClient.invalidateQueries(["assignments"]);
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء اضافة المحتوى:");
    },
  });

  return mutation;
}
