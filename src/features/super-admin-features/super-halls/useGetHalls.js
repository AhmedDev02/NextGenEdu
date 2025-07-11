import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getHalls } from "../../../services/superAdmin/apiHalls"

const useGetHalls = (buildingId) => {
    const { token } = useUser()
    const { data: halls, isPending: isLoadingHalls, error: errorFetchingHall, refetch: refetchHalls } = useQuery({
        queryKey: ['halls', buildingId],
        queryFn: () => getHalls(token, buildingId),
        enabled: !!buildingId,
    })
    return { halls, isLoadingHalls, errorFetchingHall, refetchHalls }
}

export default useGetHalls