import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getOneBuildings } from "../../../services/superAdmin/apiBuilding"

const useGetOneBuilding = (buildingId) => {
    const { token } = useUser()
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['building', buildingId],
        queryFn: () => getOneBuildings(token, buildingId)
    })
    return { data, isPending, error, refetch }
}

export default useGetOneBuilding