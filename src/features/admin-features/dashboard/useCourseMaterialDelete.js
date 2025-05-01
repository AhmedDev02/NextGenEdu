import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourseMaterial } from "../../../services/admin/apiCourses"; // Import the API function
import { useUser } from "../../../hooks/useUser"; // Import the API function

import toast from "react-hot-toast";

export function useCourseMaterialDelete(id) {
  const { token } = useUser();
  console.log(token);
  console.log(id);

  const queryClient = useQueryClient(); // Get the queryClient instance

  const mutation = useMutation({
    mutationFn: async () => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return deleteCourseMaterial(id, token);
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
