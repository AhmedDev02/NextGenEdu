import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { exportFileTeachers } from "../../../services/superAdmin/apiTeachers"

const useExportFileTeacher = () => {
    const { token } = useUser()
    const { mutateAsync, isPending } = useMutation({
        mutationFn: () => exportFileTeachers(token)
    })
    return { mutateAsync, isPending }
}

export default useExportFileTeacher