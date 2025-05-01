import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getMaterial } from "../../../services/admin/apiCourses";

export function useCourseMaterial(materialId) {
  const user = useSelector((state) => state.auth.user);
  const token = user ? user.token : null;
  const {
    data: courseMaterial = [], // Default to an empty array if no courses are fetched
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courseMaterial", { token, materialId }], // The query key should depend on the token to refetch when it changes
    queryFn: getMaterial, // Fetch courses only if token is available
  });

  return { courseMaterial, isLoading, error };
}
