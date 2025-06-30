import { useQuery } from "@tanstack/react-query";
import { getMaterial } from "../../../services/student/apiMaterials";
import { useUser } from "../../../hooks/useUser";

export function useMaterial(materialId) {
  const { token } = useUser()
  const {
    data: material,
    isPending,
    error,
    refetch
  } = useQuery({
    queryKey: ["material", token, materialId],
    queryFn: () => getMaterial(token, materialId),
    enabled: !!token
  });

  return { material, isPending, error, refetch };
}