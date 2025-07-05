import { useMutation } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import { updateAnnouncement } from "../../../services/admin/apiNews";

export function useUpdateAnnouncement() {
  const { token } = useUser();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ announcementId, updatedData }) => updateAnnouncement(announcementId, updatedData, token),

  });

  return { mutate, isPending };
}
