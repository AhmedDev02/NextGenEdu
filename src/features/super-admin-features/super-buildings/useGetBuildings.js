import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getBuildings } from "../../../services/superAdmin/apiBuilding"

const useGetBuildings = () => {
    const { token } = useUser()
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['buildings'],
        queryFn: () => getBuildings(token)
    })
    return { data, isPending, error, refetch }
}

export default useGetBuildings