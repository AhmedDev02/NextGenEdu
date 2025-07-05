import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../../hooks/useUser"
import { getAllQuizzes } from "../../../../services/admin/apiQuiz"

const useGetLastQuizzes = (status) => {
    const { token } = useUser()
    const { data, isPending, error, refetch } = useQuery({
        queryKey: [`${status} quizzes`],
        queryFn: () => getAllQuizzes(token, status)
    })
    return { data, isPending, error, refetch }
}

export default useGetLastQuizzes