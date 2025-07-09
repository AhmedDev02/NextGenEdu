import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { addCourseMaterial } from "../../../services/admin/apiCourses"

const useAddMaterial = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: ({ courseId, data }) => addCourseMaterial(courseId, data, token),
    })
    return { mutate, isPending }
}

export default useAddMaterial