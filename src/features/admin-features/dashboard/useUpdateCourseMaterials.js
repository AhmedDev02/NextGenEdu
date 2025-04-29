import { useMutation } from "@tanstack/react-query";
import { updateCourseMaterial } from "../../../services/admin/apiUpdateCourse"; // Import the API function
import toast from "react-hot-toast";

export function useUpdatedCourseMaterial() {
  const mutation = useMutation({
    mutationFn: async ({ courseId, updatedData, token }) => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return updateCourseMaterial(courseId, updatedData, token);
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم تعديل المحتوى بنجاح");
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء تحديق المحتوى:");
    },
  });

  return mutation;
}
