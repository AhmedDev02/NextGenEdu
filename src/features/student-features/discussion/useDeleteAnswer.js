import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import toast from "react-hot-toast";
import { deleteAnswer } from "../../../services/student/apiDiscussion"; // make sure this exists

const useDeleteAnswer = () => {
  const queryClient = useQueryClient();
  const { token } = useUser();

  const { mutate, isPending } = useMutation({
    mutationFn: (answerID) => deleteAnswer(answerID, token),
    onSuccess: () => {
      queryClient.invalidateQueries(["question"]);
      toast.success("تم حذف الإجابة بنجاح");
    },
    onError: () => {
      toast.error("حدث خطأ أثناء حذف الإجابة، يرجى المحاولة مرة أخرى");
    },
  });

  return { mutate, isPending };
};

export default useDeleteAnswer;
