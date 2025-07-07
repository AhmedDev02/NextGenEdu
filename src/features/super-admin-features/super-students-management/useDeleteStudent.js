import { useMutation } from "@tanstack/react-query"
import { deleteStudent } from "../../../services/superAdmin/apiStudents"
import { useUser } from "../../../hooks/useUser"

const useDeleteStudent = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (studentId) => deleteStudent(token, studentId)
    })
    return { mutate, isPending }
}

export default useDeleteStudent