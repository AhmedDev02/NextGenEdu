import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import { getQuestions } from "../../../services/student/apiDiscussion";

export function useReadQuestions() {
  const { token, user } = useUser();
  const { id } = user || {};
  const {
    data: questions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["questions", token],
    queryFn: () => getQuestions(token),
    enabled: !!token, // Ensure the query only runs if the token exists
  });
  console.log(id);
  return { questions, isLoading, error, id };
}
