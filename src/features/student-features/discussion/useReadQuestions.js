import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import { getQuestions } from "../../../services/student/apiDiscussion";

export function useReadQuestions() {
  console.log("hi");
  const { token } = useUser();
  const {
    data: questions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["questions", token],
    queryFn: () => getQuestions(token),
  });
  return { questions, isLoading, error };
}
