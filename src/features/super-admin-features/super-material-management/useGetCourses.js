import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getCourses } from "../../../services/superAdmin/apiCourses"

const useGetCourses = (department, semester) => {
    const { token } = useUser()
    const { data: courses, isPending, error, refetch } = useQuery({
        queryKey: ['courses', department, semester],
        queryFn: () => getCourses(token, department, semester)
    })
    return { courses, isPending, error, refetch }
}

export default useGetCourses