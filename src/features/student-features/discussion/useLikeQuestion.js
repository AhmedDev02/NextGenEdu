import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser"; // Import the API function
import toast from "react-hot-toast";
import { addLikeQuestion } from "../../../services/student/apiDiscussion";

export function useLikeQuestion() {
  const { token } = useUser();

  const queryClient = useQueryClient(); // Get the queryClient instance

  const mutation = useMutation({
    mutationFn: async ({ questionID }) => {
      // Call the updateCourseMaterial function from apiUpdateCourse.js
      return addLikeQuestion(questionID, token);
    },
    onSuccess: () => {
      // Handle success (e.g., show a success toast, update local state)
      toast.success("تم اضافة المحتوى بنجاح");
      queryClient.invalidateQueries(["questions"]);
    },
    onError: () => {
      // Handle error (e.g., show an error toast)
      toast.error("حدث خطأ اثناء اضافة المحتوى:");
    },
  });

  return mutation;
}
