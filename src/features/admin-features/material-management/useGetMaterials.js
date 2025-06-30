import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getMaterials } from "../../../services/admin/apiCourses"

const useGetMaterials = (courseId) => {
    const { token } = useUser()
    const { data: material, isPending, error, refetch } = useQuery({
        queryKey: ['materials', courseId],
        queryFn: () => getMaterials({ courseId, token }),
        enabled: !!token
    })

    return { material, isPending, error, refetch }
}

export default useGetMaterials