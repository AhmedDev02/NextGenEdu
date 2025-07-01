import { useQuery } from "@tanstack/react-query";
import { getQuizzes } from "../../../services/student/apiExams";
import { useUser } from "../../../hooks/useUser";

export function useReadQuizzes() {
  const { token } = useUser();
  const {
    data: exams,
    isPending,
    error,
  } = useQuery({
    queryKey: ["News", token],
    queryFn: () => getQuizzes(token),
  });
  return { exams, isPending, error };
}
