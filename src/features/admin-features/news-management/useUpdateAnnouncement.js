import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function
import toast from "react-hot-toast";
import { updateAnnouncement } from "../../../services/admin/apiNews";

export function useUpdateAnnouncement() {
  const { token } = useUser();

  const queryClient = useQueryClient(); // Get the queryClient instance

  const mutation = useMutation({
    mutationFn: async ({ announcementId, updatedData }) => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      try {
        // Call the updateAnnouncement function from apiNews.js
        const response = await updateAnnouncement(
          announcementId,
          updatedData,
          token
        );
        return response;
      } catch (error) {
        // If there's an error, it will be caught here
        throw new Error("Failed to update announcement");
      }
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم تعديل الخبر بنجاح");
      queryClient.invalidateQueries(["announcements"]);
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء تحديث الخبر:");
    },
  });

  return mutation;
}
