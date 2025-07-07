import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { updateDepartment } from "../../../services/superAdmin/apiSuperDepartment"

const useEditDepartment = () => {
    const { token } = useUser()
    const { mutate, isPending: isUpdating } = useMutation({
        mutationFn: ({departmentId, updatedData}) => updateDepartment(token, departmentId, updatedData)
    })
    return { mutate, isUpdating }
}

export default useEditDepartment