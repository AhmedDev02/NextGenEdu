import { useQuery } from "@tanstack/react-query";
import { getAssignment } from "../../../services/student/apiTasks";
import { useUser } from "../../../hooks/useUser";

export function useGetAssignment(courseId) {
    const { token } = useUser()
    const {
        data: assignmentData,
        isPending,
        error,
        refetch
    } = useQuery({
        queryKey: ["task", token, courseId],
        queryFn: () => getAssignment(token, courseId),
        staleTime: 0,
        enabled: !!token && !!courseId,
    });
    return { assignmentData, isPending, error,refetch };
}
