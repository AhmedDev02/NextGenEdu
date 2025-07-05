import { useMutation } from "@tanstack/react-query"
import { deleteQuiz } from "../../../../services/admin/apiQuiz"
import { useUser } from "../../../../hooks/useUser"

const useDeleteQuiz = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (quizId) => deleteQuiz(token, quizId)
    })
    return { mutate, isPending }
}

export default useDeleteQuiz