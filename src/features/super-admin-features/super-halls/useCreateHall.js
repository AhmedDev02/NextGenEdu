import { useMutation } from "@tanstack/react-query"
import { createHall } from "../../../services/superAdmin/apiHalls"
import { useUser } from "../../../hooks/useUser"

const useCreateHall = () => {
    const { token } = useUser()
    const { mutate: create, isPending: isCreatingHall } = useMutation({
        mutationFn: (data) => createHall(token, data)
    })
    return { create, isCreatingHall }
}

export default useCreateHall