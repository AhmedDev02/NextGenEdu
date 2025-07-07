import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getDepartments } from "../../../services/superAdmin/apiSuperDepartment"

const useGetDepartments = () => {
    const { token } = useUser()
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['departments'],
        queryFn: () => getDepartments(token)
    })
    return { data, isPending, error, refetch }
}

export default useGetDepartments