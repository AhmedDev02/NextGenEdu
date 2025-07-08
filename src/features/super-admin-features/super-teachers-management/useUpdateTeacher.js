import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { updateTeacher } from "../../../services/superAdmin/apiTeachers"

const useUpdateTeacher = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: ({teacherId, updatedData}) => updateTeacher(token, teacherId, updatedData)
    })
    return { mutate, isPending }
}

export default useUpdateTeacher