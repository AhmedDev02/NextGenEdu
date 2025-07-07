import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getSemesters } from "../../../services/superAdmin/apiSemester"

const useGetSemesters = () => {
    const { token } = useUser()
    const { data: semesters, isPending, error, refetch } = useQuery({
        queryKey: ['semester'],
        queryFn: () => getSemesters(token)
    })
    return { semesters, isPending, error, refetch }
}

export default useGetSemesters