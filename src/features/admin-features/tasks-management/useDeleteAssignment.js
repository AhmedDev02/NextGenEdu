import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function

import toast from "react-hot-toast";
import { deleteAssignment } from "../../../services/admin/apiAssignments";

export function useDeleteAssignment(id) {
  const { token } = useUser();

  const queryClient = useQueryClient(); // Get the queryClient instance

  const mutation = useMutation({
    mutationFn: async () => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return deleteAssignment(id, token);
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم حذف المحتوى بنجاح");
      queryClient.invalidateQueries(["coursesMaterial"]);
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء حذف المحتوى:");
    },
  });

  return mutation;
}
