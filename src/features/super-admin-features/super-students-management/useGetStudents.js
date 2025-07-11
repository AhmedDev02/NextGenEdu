import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getStudents } from "../../../services/superAdmin/apiStudents"

const useGetStudents = (department, semester) => {
    const { token } = useUser()
    const { data: students, isPending, error, refetch } = useQuery({
        queryKey: ['students', department, semester],
        queryFn: () => getStudents(token, department, semester)
    })
    return { students, isPending, error, refetch }
}

export default useGetStudents