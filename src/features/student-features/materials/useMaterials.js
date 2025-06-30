import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import { getCourses } from "../../../services/student/apiTasks";

export function useMaterials() {
  const { token } = useUser()
  const {
    data: materials,
    isPending,
    error,
    refetch
  } = useQuery({
    queryKey: ["materials", token],
    queryFn: () => getCourses(token),
    enabled: !!token
  });
  return { materials, isPending, error, refetch };
}
