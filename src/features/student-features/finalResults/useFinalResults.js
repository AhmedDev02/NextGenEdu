import { useQuery } from "@tanstack/react-query";
import { fetchFinalResults } from "../../../services/student/apiFinalResults";

export function useFinalResults() {
  const { data, isPending, error } = useQuery({
    queryKey: ["finalResults"],
    queryFn: () => fetchFinalResults(),
  });
  return { data, isPending, error };
}
