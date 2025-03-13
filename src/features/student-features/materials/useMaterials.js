import { useQuery } from "@tanstack/react-query";
import { getMaterials } from "../../../services/student/apiMaterials";

export function useMaterials() {
  const {
    data: materials,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["materials"],
    queryFn: getMaterials,
  });
  return { materials, isLoading, error };
}
