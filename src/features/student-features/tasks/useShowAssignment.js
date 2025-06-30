import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { apiShowAssignment } from "../../../services/student/apiTasks"

const useShowAssignment = (assignmentId) => {
    const { token } = useUser()
    const { data, error, isPending, refetch } = useQuery({
        queryKey: ["assignment Answer", assignmentId, token],
        queryFn: () => apiShowAssignment(assignmentId, token),
        enabled: !!token
    })
    return {
        data,
        error,
        isPending,
        refetch
    }
}

export default useShowAssignment