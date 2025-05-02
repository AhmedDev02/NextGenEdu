import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function
import toast from "react-hot-toast";
import { createAnnouncement } from "../../../services/admin/apiNews";

export function useCreateAnnouncement() {
  const { token } = useUser();
  const queryClient = useQueryClient(); // Get the queryClient instance

  const mutation = useMutation({
    mutationFn: async ({ data }) => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return createAnnouncement(data, token);
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم اضافة الخبر بنجاح");
      queryClient.invalidateQueries(["announcements"]);
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء اضافة الخبر:");
    },
  });

  return mutation;
}
