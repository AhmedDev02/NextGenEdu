import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { deleteCourseMaterial } from "../../../services/admin/apiCourses"
import toast from "react-hot-toast"

const useDeleteMaterial = (courseId) => {
    const queryClient = useQueryClient()
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (id) => deleteCourseMaterial(id, token),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['materials', courseId] })
            toast.success("تم حذف المادة بنجاح")
        },
        onError: () => {
            toast.error("حدث خطأ أثناء حذف المادة، يرجى المحاولة مرة أخرى")
        }
    })
    return { mutate, isPending }
}

export default useDeleteMaterial