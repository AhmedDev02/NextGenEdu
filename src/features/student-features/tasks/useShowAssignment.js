import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { apiShowAssignment } from "../../../services/student/apiTasks"

const useShowAssignment = (assignmentId) => {
    const { token } = useUser()
    const { data, error, isLoading } = useQuery({
        queryKey: ["assignment Answer", assignmentId, token],
        queryFn: () => apiShowAssignment(assignmentId, token),
    })
    return {
        data,
        error,
        isLoading,
    }
}

export default useShowAssignment