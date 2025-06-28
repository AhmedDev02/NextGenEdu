import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function
import toast from "react-hot-toast";
import { addLikeAnswer } from "../../../services/student/apiDiscussion";

export function useLikeAnswer() {
  const { token } = useUser();

  const queryClient = useQueryClient(); // Get the queryClient instance

  const mutation = useMutation({
    mutationFn: async ({ answerID }) => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return addLikeAnswer(answerID, token);
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم اضافة المحتوى بنجاح");
      queryClient.invalidateQueries(["question"]);
      queryClient.invalidateQueries(["questions"]);
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء اضافة المحتوى:");
    },
  });

  return mutation;
}
