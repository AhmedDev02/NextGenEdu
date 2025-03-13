import { useQuery } from "@tanstack/react-query";
import { fetchStudentProgress } from "../../../services/student/apiGrades";

const id = 0;
export function useStudentProgress() {
  const { data, isPending, error } = useQuery({
    queryKey: ["studentProgress"],
    queryFn: () => fetchStudentProgress(id),
  });
  console.log(data);
  return { data, isPending, error };
}
