import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { getAllAssignments } from "../../../services/admin/apiAssignments";

export function useReadAssignments() {
  const user = useSelector((state) => state.auth.user);

  const token = user ? user.token : null;

  const {
    data: courses = [], // Default to an empty array if no courses are fetched
    isLoading,
    error,
  } = useQuery({
    queryKey: ["assignments", token], // The query key should depend on the token to refetch when it changes
    queryFn: () => getAllAssignments(token), // Fetch courses only if token is available
  });

  return { courses, isLoading, error };
}
