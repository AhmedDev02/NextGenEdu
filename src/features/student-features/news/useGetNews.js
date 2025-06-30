import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getNews } from "../../../services/student/ApiNews"

const useGetNews = () => {
    const { token } = useUser()
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['News', token],
        queryFn: () => getNews(token),
        enabled: !!token,
    })
    return { data, isPending, error, refetch }
}

export default useGetNews