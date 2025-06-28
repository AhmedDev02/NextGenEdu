import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUser } from "../../../hooks/useUser";
import { addQuestion } from "../../../services/student/apiDiscussion";

export function useAddQuestion() {
  const { token } = useUser();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ body }) => {
      return addQuestion(token, body);
    },
    onSuccess: () => {
      toast.success("تم إرسال السؤال بنجاح");
      queryClient.invalidateQueries(["questions"]);
    },
    onError: () => {
      toast.error("حدث خطأ أثناء إرسال السؤال");
    },
  });

  return mutation;
}
