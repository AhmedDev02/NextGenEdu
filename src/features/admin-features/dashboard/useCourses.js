import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../../services/admin/apiCourses";
import { useSelector } from "react-redux";

export function useCourses() {
  const user = useSelector((state) => state.auth.user);

  const token = user ? user.token : null;

  const {
    data: courses = [], // Default to an empty array if no courses are fetched
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courses", token], // The query key should depend on the token to refetch when it changes
    queryFn: () => getCourses(token), // Fetch courses only if token is available
  });

  return { courses, isLoading, error };
}
