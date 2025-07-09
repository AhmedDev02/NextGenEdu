import { useMutation } from "@tanstack/react-query"
import { updateBuilding } from "../../../services/superAdmin/apiBuilding"
import { useUser } from "../../../hooks/useUser"

const useUpdateBuilding = () => {
    const { token } = useUser()
    const { mutate: update, isPending: isUpdating } = useMutation({
        mutationFn: ({ buildingId, updatedData }) => updateBuilding(token, buildingId, updatedData)
    })
    return { update, isUpdating }
}

export default useUpdateBuilding