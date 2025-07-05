import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../../hooks/useUser"
import { updateQuiz } from "../../../../services/admin/apiQuiz"

const useEditQuiz = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: ({quizId, updatedData}) => updateQuiz(quizId, updatedData, token)
    })
    return { mutate, isPending }
}

export default useEditQuiz