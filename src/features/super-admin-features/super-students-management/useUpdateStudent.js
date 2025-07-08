import { useMutation } from "@tanstack/react-query"
import { updateStudent } from "../../../services/superAdmin/apiStudents"
import { useUser } from "../../../hooks/useUser"

const useUpdateStudent = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: ({ studentId, updatedData }) => updateStudent(token, studentId, updatedData)
    })
    return { mutate, isPending }
}

export default useUpdateStudent