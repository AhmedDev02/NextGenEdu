import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../../../services/student/apiTasks";

export function useTasks() {
  const {
    data: tasks,
    isPending,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
  return { tasks, isPending, error };
}
