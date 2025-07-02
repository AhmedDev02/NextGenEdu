import { useQuery } from "@tanstack/react-query";
import { startQuiz } from "../../../services/student/apiExams";
import { useUser } from "../../../hooks/useUser";

export function useStartQuiz(quizID) {
  const { token } = useUser();
  console.log();
  const {
    data: exam,
    isPending,
    error,
  } = useQuery({
    queryKey: ["startQuiz", token],
    queryFn: () => startQuiz(token, quizID),
  });
  return { exam, isPending, error };
}
