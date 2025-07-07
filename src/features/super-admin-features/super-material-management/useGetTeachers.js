import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getTeachers } from "../../../services/superAdmin/apiTeachers"

const useGetTeachers = () => {
    const { token } = useUser()
    const { data: teachers, isPending, error, refetch } = useQuery({
        queryKey: ['teachers'],
        queryFn: () => getTeachers(token)
    })
    return { teachers, isPending, error, refetch }
}

export default useGetTeachers