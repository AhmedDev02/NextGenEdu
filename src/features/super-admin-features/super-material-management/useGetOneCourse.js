import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getOneCourse } from "../../../services/superAdmin/apiCourses"

const useGetOneCourse = (courseId) => {
    const { token } = useUser()
    const { data: course, isPending, error, refetch } = useQuery({
        queryKey: ['course', courseId],
        queryFn: () => getOneCourse(token, courseId)

    })
    return { course, isPending, error, refetch }
}

export default useGetOneCourse