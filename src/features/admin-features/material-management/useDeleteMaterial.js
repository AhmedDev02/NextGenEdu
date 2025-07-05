import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { deleteCourseMaterial } from "../../../services/admin/apiCourses"

const useDeleteMaterial = (courseId) => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (id) => deleteCourseMaterial(id, token),
    })
    return { mutate, isPending }
}

export default useDeleteMaterial