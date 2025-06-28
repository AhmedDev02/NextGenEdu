import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUser } from "../../../hooks/useUser";
import { addAnswer } from "../../../services/student/apiDiscussion";

export function useAddAnswer() {
  const { token } = useUser();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ questionID, text }) => {
      return addAnswer(questionID, token, text);
    },
    onSuccess: () => {
      toast.success("تم إرسال الإجابة بنجاح");
      queryClient.invalidateQueries(["question"]);
    },
    onError: () => {
      toast.error("حدث خطأ أثناء إرسال الإجابة");
    },
  });

  return mutation;
}
