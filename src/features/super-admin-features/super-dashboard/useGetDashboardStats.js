import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getSuperAdminStats } from "../../../services/superAdmin/apiSuperStats"

const useGetDashboardStats = () => {
    const { token } = useUser()
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['dashboard stats'],
        queryFn: () => getSuperAdminStats(token)
    })
    return { data, isPending, error, refetch }
}

export default useGetDashboardStats