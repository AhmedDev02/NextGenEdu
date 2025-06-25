import { useMutation } from "@tanstack/react-query"
import { updateCourseMaterial } from "../../../services/admin/apiCourses"
import { useUser } from "../../../hooks/useUser"

const useEditMaterial = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: ({ materialId, updatedData }) => updateCourseMaterial(materialId, updatedData, token),
    })
    return { mutate, isPending }
}

export default useEditMaterial