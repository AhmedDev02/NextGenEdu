import { useQuery } from "@tanstack/react-query"
import { getResults } from "../../../../services/admin/apiQuiz"
import { useUser } from "../../../../hooks/useUser"

const useGetResults = (quizId) => {
    const { token } = useUser()
    const { data: results, isPending, error, refetch } = useQuery({
        queryKey: ['all-answers', quizId],
        queryFn: () => getResults(token, quizId)
    })
    return { results, isPending, error, refetch }
}

export default useGetResults