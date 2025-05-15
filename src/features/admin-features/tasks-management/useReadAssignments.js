import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { getAllAssignments } from "../../../services/admin/apiAssignments";

export function useReadAssignments() {
  const user = useSelector((state) => state.auth.user);

  const token = user ? user.token : null;

  const {
    data: assignments = [], // Default to an empty array if no assignments are fetched
    isLoading,
    error,
  } = useQuery({
    queryKey: ["assignments", token], // The query key should depend on the token to refetch when it changes
    queryFn: () => getAllAssignments(token), // Fetch assignments only if token is available
  });

  return { assignments, isLoading, error };
}
