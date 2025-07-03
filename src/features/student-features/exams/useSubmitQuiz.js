import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitAnswers } from "../../../services/student/apiExams";
import { useUser } from "../../../hooks/useUser";
import toast from "react-hot-toast";

export function useSubmitQuiz() {
  const { token } = useUser();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ answers, quizId }) => {
      return submitAnswers({ answers, quizId, token });
    },
    onSuccess: () => {
      toast.success("تم إرسال الإجابات بنجاح");
      queryClient.invalidateQueries(["exams"]); // invalidate exams cache if needed
    },
    onError: () => {
      toast.error("حدث خطأ أثناء إرسال الإجابات");
    },
  });
}
