import { useQuery } from "@tanstack/react-query";
import { startQuiz } from "../../../services/student/apiExams";
import { useUser } from "../../../hooks/useUser";

export function useStartQuiz(examId) {
  const { token } = useUser();
  const {
    data: exam,
    isPending,
    error,
  } = useQuery({
    queryKey: ["StartQuiz", token],
    queryFn: () => startQuiz(token, examId),
  });
  console.log(exam);

  return { exam, isPending, error };
}
