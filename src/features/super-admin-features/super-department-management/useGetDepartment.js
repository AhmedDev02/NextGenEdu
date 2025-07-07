import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getDepartment } from "../../../services/superAdmin/apiSuperDepartment"

const useGetDepartment = (departmentId) => {
    const { token } = useUser()
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['department', departmentId],
        queryFn: () => getDepartment(token, departmentId)
    })
    return { data, isPending, error, refetch }
}

export default useGetDepartment