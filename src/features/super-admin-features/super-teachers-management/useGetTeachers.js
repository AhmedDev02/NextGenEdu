import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getTeachers } from "../../../services/superAdmin/apiTeachers"

const useGetTeachers = (department) => {
    const { token } = useUser()
    const { data: teachers, isPending, error, refetch } = useQuery({
        queryKey: ['students', department],
        queryFn: () => getTeachers(token, department)
    })
    return { teachers, isPending, error, refetch }
}

export default useGetTeachers