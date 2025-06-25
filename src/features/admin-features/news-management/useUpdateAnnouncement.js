import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import toast from "react-hot-toast";
import { updateAnnouncement } from "../../../services/admin/apiNews";

export function useUpdateAnnouncement() {
  const { token } = useUser();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ announcementId, updatedData }) => updateAnnouncement(announcementId, updatedData, token),
    onSuccess: () => {
      queryClient.invalidateQueries(["announcements"]);
      toast.success("تم تعديل الخبر بنجاح");
    },
    onError: () => {
      toast.error("حدث خطأ اثناء تحديث الخبر:");
    },
  });

  return { mutate, isPending };
}
