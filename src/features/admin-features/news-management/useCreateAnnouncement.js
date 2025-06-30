import { useMutation } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function
import { createAnnouncement } from "../../../services/admin/apiNews";

export function useCreateAnnouncement() {
  const { token } = useUser();


  const { mutate, isPending } = useMutation({
    mutationFn: (data) => createAnnouncement(data, token),
  });
  return { mutate, isPending }
}
