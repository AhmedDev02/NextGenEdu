import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import toast from "react-hot-toast";
import { deleteQuestion } from "../../../services/student/apiDiscussion"; // make sure this exists

const useDeleteQuestion = () => {
  const queryClient = useQueryClient();
  const { token } = useUser();

  const { mutate, isPending } = useMutation({
    mutationFn: (questionID) => deleteQuestion(questionID, token),
    onSuccess: () => {
      queryClient.invalidateQueries(["question"]);
      toast.success("تم حذف السؤال بنجاح");
    },
    onError: () => {
      toast.error("حدث خطأ أثناء حذف السؤال يرجى المحاولة مرة أخرى");
    },
  });

  return { mutate, isPending };
};

export default useDeleteQuestion;
