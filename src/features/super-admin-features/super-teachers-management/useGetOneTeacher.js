import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getOneTeacher } from "../../../services/superAdmin/apiTeachers"

const useGetOneTeacher = (teacherId) => {
    const { token } = useUser()
    const { data: teacher, isPending, error, refetch } = useQuery({
        queryKey: ['teacher', teacherId],
        queryFn: () => getOneTeacher(token, teacherId)
    })
    return { teacher, isPending, error, refetch }
}

export default useGetOneTeacher