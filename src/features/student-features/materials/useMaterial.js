import { useQuery } from "@tanstack/react-query";
import { getMaterial } from "../../../services/student/apiMaterials";
import { useParams } from "react-router-dom";

export function useMaterial() {
  const { materialId } = useParams();
  const {
    data: material,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["material", materialId],
    queryFn: () => getMaterial(materialId),
  });

  return { material, isLoading, error };
}