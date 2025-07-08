import { useMutation } from "@tanstack/react-query"
import { deleteBuilding } from "../../../services/superAdmin/apiBuilding"
import { useUser } from "../../../hooks/useUser"

const useDeleteBuilding = () => {
    const {token}=useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (buildingId) => deleteBuilding(token,buildingId)
    })
    return { mutate, isPending }
}

export default useDeleteBuilding