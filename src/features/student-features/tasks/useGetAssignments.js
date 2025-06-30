import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../../services/student/apiTasks";
import { useUser } from "../../../hooks/useUser";

export function useGetCourses() {
  const { token } = useUser()
  const {
    data: assignmentsData,
    isPending ,
    error,
    refetch
  } = useQuery({
    queryKey: ["tasks", token],
    queryFn: () => getCourses(token),
    enabled: !!token
  });
  return { assignmentsData, isPending , error,refetch };
}
