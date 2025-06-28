import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import { getOneQuestion } from "../../../services/student/apiDiscussion";

export function useReadOneQuestion(questionID) {
  const {
    token,
    user: { name },
  } = useUser();
  const {
    data: question,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["question", questionID],
    queryFn: () => getOneQuestion(token, questionID),
  });
  console.log(question);
  return { question, isLoading, error, name };
}
