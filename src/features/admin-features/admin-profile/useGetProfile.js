import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getTeacherProfile } from "../../../services/admin/apiTeacherProfile"

const useGetProfile = () => {
    const { token } = useUser()
    const { data, isPending, error } = useQuery({
        queryKey: ['TeacherProfile', token],
        queryFn: () => getTeacherProfile(token)
    })
    return { data, isPending, error }
}

export default useGetProfile