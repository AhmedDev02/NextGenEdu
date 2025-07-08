import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getOneStudent } from "../../../services/superAdmin/apiStudents"

const useGetOneStudent = (studentId) => {
    const { token } = useUser()
    const { data: student, isPending, error, refetch } = useQuery({
        queryKey: ['student', studentId],
        queryFn: () => getOneStudent(token, studentId)
    })
    return { student, isPending, error, refetch }
}

export default useGetOneStudent