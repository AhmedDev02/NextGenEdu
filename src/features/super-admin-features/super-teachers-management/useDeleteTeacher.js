import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { deleteTeacher } from "../../../services/superAdmin/apiTeachers"

const useDeleteTeacher = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (teacherId) => deleteTeacher(token, teacherId)
    })
    return { mutate, isPending }
}

export default useDeleteTeacher