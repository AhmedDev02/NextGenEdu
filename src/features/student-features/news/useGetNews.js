import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getNews } from "../../../services/student/ApiNews"

const useGetNews = () => {
    const { token } = useUser()
    const { data, isLoading, error } = useQuery({
        queryKey: ['News', token],
        queryFn: () => getNews(token),
        enabled: !!token,
    })
    return { data, isLoading, error }
}

export default useGetNews