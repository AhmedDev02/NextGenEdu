import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { updateCourse } from "../../../services/superAdmin/apiCourses"

const useUpdateCourse = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: ({ courseId, updatedData }) => updateCourse(token, courseId, updatedData)
    })
    return { mutate, isPending }
}

export default useUpdateCourse