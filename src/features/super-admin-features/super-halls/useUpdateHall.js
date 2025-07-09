import { useMutation } from "@tanstack/react-query"
import { updateHall } from "../../../services/superAdmin/apiHalls"
import { useUser } from "../../../hooks/useUser"

const useUpdateHall = () => {
    const { token } = useUser()
    const { mutate: update, isPending: isUpdating } = useMutation({
        mutationFn: ({ hallId, updatedData }) => updateHall(token, hallId, updatedData)
    })
    return { update, isUpdating }
}

export default useUpdateHall