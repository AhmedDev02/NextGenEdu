import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { createBuilding } from "../../../services/superAdmin/apiBuilding"

const useCreateBuilding = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (data) => createBuilding(token, data)
    })
    return { mutate, isPending }
}

export default useCreateBuilding