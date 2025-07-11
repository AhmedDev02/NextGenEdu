import { useMutation } from "@tanstack/react-query"
import { importFileStudent } from "../../../services/superAdmin/apiStudents"
import { useUser } from "../../../hooks/useUser"

const useImportFileStudents = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (file) => importFileStudent(token, file)
    })
    return { mutate, isPending }
}

export default useImportFileStudents