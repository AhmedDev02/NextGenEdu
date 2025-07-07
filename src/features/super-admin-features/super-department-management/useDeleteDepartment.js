import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { deleteDepartment } from "../../../services/superAdmin/apiSuperDepartment"

const useDeleteDepartment = () => {
    const { token } = useUser()
    const { mutate: deleteDept, isPending: isDeleting } = useMutation({
        mutationFn: (departmentId) => deleteDepartment(token, departmentId)
    })
    return { deleteDept, isDeleting }
}

export default useDeleteDepartment