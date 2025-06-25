import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getMaterials } from "../../../services/admin/apiCourses"

const useGetMaterials = (courseId) => {
    const { token } = useUser()
    const { data: material, isLoading, error } = useQuery({
        queryKey: ['materials', courseId],
        queryFn: () => getMaterials({ courseId, token })
    })

    return { material, isLoading, error }
}

export default useGetMaterials