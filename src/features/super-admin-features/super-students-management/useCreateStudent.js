import { useMutation } from "@tanstack/react-query"
import { createStudent } from "../../../services/superAdmin/apiStudents"
import { useUser } from "../../../hooks/useUser"

const useCreateStudent = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (data) => createStudent(token, data)
    })
    return { mutate, isPending }
}

export default useCreateStudent