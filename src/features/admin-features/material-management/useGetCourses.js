import { useQuery } from "@tanstack/react-query"
import { getCourses } from "../../../services/admin/apiCourses"
import { useUser } from "../../../hooks/useUser";

const useGetCourses = () => {
    const { token } = useUser()
    const { data, isPending, error,refetch } = useQuery({
        queryKey: ['Teacher-courses'],
        queryFn: () => getCourses(token),
        enabled: !!token
    })
    return { courses: data, isPending, error,refetch }
}

export default useGetCourses