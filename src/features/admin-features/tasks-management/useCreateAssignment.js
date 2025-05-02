import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function
import toast from "react-hot-toast";
import { createAssignment } from "../../../services/admin/apiAssignments";

export function useCreateAnnouncement() {
  const { token } = useUser();
  const queryClient = useQueryClient(); // Get the queryClient instance

  const mutation = useMutation({
    mutationFn: async ({ courseId, data }) => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return createAssignment(courseId, data, token);
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم اضافة المحتوى بنجاح");
      queryClient.invalidateQueries(["coursesMaterial"]);
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء اضافة المحتوى:");
    },
  });

  return mutation;
}
