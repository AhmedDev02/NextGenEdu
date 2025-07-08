import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getTeachers } from "../../../services/superAdmin/apiTeachers"

const useGetTeachers = (department, page) => {
    const { token } = useUser()
    const { data: teachers, isPending, error, refetch } = useQuery({
        queryKey: ['teachers', department, page],
        queryFn: () => getTeachers(token, department, page)
    })
    return { teachers, isPending, error, refetch }
}

export default useGetTeachers