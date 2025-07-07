import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { deleteCourse } from "../../../services/superAdmin/apiCourses"

const useDeleteCourse = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (courseId) => deleteCourse(token, courseId)
    })
    return { mutate, isPending }
}

export default useDeleteCourse