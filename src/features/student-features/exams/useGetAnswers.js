import { useQuery } from "@tanstack/react-query";
import { getAnswers } from "../../../services/student/apiExams";
import { useUser } from "../../../hooks/useUser";

export function useGetAnswers(id) {
  const { token } = useUser();
  const {
    data: answers,
    isPending,
    error,
  } = useQuery({
    queryKey: ["answers", token, id],
    queryFn: () => getAnswers(token, id),
  });
  return { answers, isPending, error };
}
