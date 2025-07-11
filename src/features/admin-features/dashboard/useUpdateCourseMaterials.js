import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCourseMaterial } from "../../../services/admin/apiCourses"; // Import the API function
import { useUser } from "../../../hooks/useUser"; // Import the API function

import toast from "react-hot-toast";

export function useUpdatedCourseMaterial() {
  const { token } = useUser();

  const queryClient = useQueryClient(); // Get the queryClient instance

  const mutation = useMutation({
    mutationFn: async ({ courseId, updatedData }) => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return updateCourseMaterial(courseId, updatedData, token);
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم تعديل المحتوى بنجاح");
      queryClient.invalidateQueries(["coursesMaterial"]);
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء تحديق المحتوى:");
    },
  });

  return mutation;
}
