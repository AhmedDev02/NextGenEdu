import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { importFileTeachers } from "../../../services/superAdmin/apiTeachers"

const useImportFileTeachers = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (file) => importFileTeachers(token, file)
    })
    return { mutate, isPending }
}

export default useImportFileTeachers