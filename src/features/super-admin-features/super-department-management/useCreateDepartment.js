import { useMutation } from "@tanstack/react-query"
import { createDepartment } from "../../../services/superAdmin/apiSuperDepartment"
import { useUser } from "../../../hooks/useUser"

const useCreateDepartment = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (newDepartment) => createDepartment(newDepartment, token)
    })
    return { mutate, isPending }
}

export default useCreateDepartment