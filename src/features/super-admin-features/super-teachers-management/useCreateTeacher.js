import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { createTeacher } from "../../../services/superAdmin/apiTeachers"

const useCreateTeacher = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (data) => createTeacher(token, data)
    })
    return { mutate, isPending }
}

export default useCreateTeacher