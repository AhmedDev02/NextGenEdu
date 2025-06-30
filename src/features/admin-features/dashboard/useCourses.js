import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../../services/admin/apiCourses";
import { useSelector } from "react-redux";

export function useCourses() {
  const user = useSelector((state) => state.auth.user);

  const token = user ? user.token : null;

  const {
    data: courses,
    isPending,
    error,
    refetch
  } = useQuery({
    queryKey: ["courses", token],
    queryFn: () => getCourses(token),
    enabled: !!token
  });

  return { courses, isPending, error, refetch };
}
