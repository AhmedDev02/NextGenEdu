import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function

import toast from "react-hot-toast";
import { deleteAnnouncement } from "../../../services/admin/apiNews";

export function useDeleteAnnouncement() {
  const { token } = useUser();

  const queryClient = useQueryClient(); // Get the queryClient instance

  const { mutate, isPending } = useMutation({
    mutationFn: async (id) => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return deleteAnnouncement(id, token);
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم حذف المحتوى بنجاح");
      queryClient.invalidateQueries(["announcements"]);
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء حذف المحتوى:");
    },
  });

  return { mutate, isPending };
}
