import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getOneHall } from "../../../services/superAdmin/apiHalls"

const useGetOneHall = (hallId) => {
    const { token } = useUser()
    const { data: hall, isPending, error, refetch } = useQuery({
        queryKey: ['hall', hallId],
        queryFn: () => getOneHall(token, hallId)
    })
    return { hall, isPending, error, refetch }
}

export default useGetOneHall