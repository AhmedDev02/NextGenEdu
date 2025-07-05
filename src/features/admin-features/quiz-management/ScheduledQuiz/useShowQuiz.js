import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../../hooks/useUser"
import { getOneQuiz } from "../../../../services/admin/apiQuiz"

const useShowQuiz = (quizId) => {
    const { token } = useUser()
    const { data: quiz, isPending, error, refetch } = useQuery({
        queryKey: ['quiz', quizId],
        queryFn: () => getOneQuiz(token, quizId)
    })
    return { quiz, isPending, error, refetch }
}

export default useShowQuiz