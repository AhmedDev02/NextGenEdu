import { useMutation } from "@tanstack/react-query"
import { deleteHall } from "../../../services/superAdmin/apiHalls"
import { useUser } from "../../../hooks/useUser"

const useDeleteHall = () => {
    const { token } = useUser()
    const { mutate: deletingHall, isPending: isDeleting } = useMutation({
        mutationFn: (hallId) => deleteHall(token, hallId)
    })
    return { deletingHall, isDeleting }
}

export default useDeleteHall