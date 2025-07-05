import { useQuery } from "@tanstack/react-query"
import { getStudentAnswers } from "../../../../services/admin/apiQuiz"
import { useUser } from "../../../../hooks/useUser"

const useGetStudentAnswers = (quizId, studentId) => {
    const { token } = useUser()
    const { data, isPending, error, refetch } = useQuery({
        queryKey: [`Student ${studentId} Answers`],
        queryFn: () => getStudentAnswers(token, quizId, studentId)
    })
    return { data, isPending, error, refetch }
}

export default useGetStudentAnswers