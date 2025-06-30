import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getTeacherProfile } from "../../../services/admin/apiTeacherProfile"

const useGetProfile = () => {
    const { token } = useUser()
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['TeacherProfile', token],
        queryFn: () => getTeacherProfile(token),
        enabled: !!token
    })
    return { data, isPending, error, refetch }
}

export default useGetProfile