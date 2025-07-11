import { useMutation } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import { addQuestion } from "../../../services/student/apiDiscussion";

export function useAddQuestion() {
  const { token } = useUser();
console.log(token)
  const { mutate, isPending } = useMutation({
    mutationFn: ({ body }) => addQuestion(token, body)
  })
  return { mutate, isPending };
}
