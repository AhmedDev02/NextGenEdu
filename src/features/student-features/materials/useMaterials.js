import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import { getCourses } from "../../../services/student/apiTasks";

export function useMaterials() {
  const { token } = useUser()
  const {
    data: materials,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["materials", token],
    queryFn: () => getCourses(token),
  });
  return { materials, isLoading, error };
}
