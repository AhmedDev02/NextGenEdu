import { useMutation } from "@tanstack/react-query"
import { createQuiz } from "../../../../services/admin/apiQuiz"
import { useUser } from "../../../../hooks/useUser"
import toast from "react-hot-toast"

const useCreateQuiz = () => {
    const { token } = useUser()
    const { mutate, isPending: isCreating } = useMutation({
        mutationFn: (data) => createQuiz(data, token),
        onSuccess: () => {
            toast.success("تم انشاء الاختبار بنجاح")
        },
        onError: (err) => {
            toast.error(err.message || "حدث خطأ اثناء انشاء الاختبار حاول مجددا")
        }
    })
    return { mutate, isCreating }
}

export default useCreateQuiz