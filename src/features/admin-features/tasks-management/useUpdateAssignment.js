import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function

import toast from "react-hot-toast";
import { updateAssignment } from "../../../services/admin/apiAssignments";

export function useUpdateAssignment() {
  const { token } = useUser();

  const queryClient = useQueryClient(); // Get the queryClient instance

  const mutation = useMutation({
    mutationFn: async ({ courseId, updatedData }) => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return updateAssignment(courseId, updatedData, token);
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم تعديل المحتوى بنجاح");
      queryClient.invalidateQueries(["assignments"]);
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء تحديق المحتوى:");
    },
  });

  return mutation;
}
