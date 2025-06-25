import { useMutation } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function
import { createAssignment } from "../../../services/admin/apiAssignments";

export function useCreateAssignment() {
  const { token } = useUser();
  const mutation = useMutation({
    mutationFn: (data) => createAssignment(data, token),
  });

  return mutation;
}
