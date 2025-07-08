import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { exportFileTeachers } from "../../../services/superAdmin/apiTeachers"

const useExportFileTeacher = () => {
    const { token } = useUser()
    const { data: teachersFile, isPending, error, refetch } = useQuery({
        queryKey: ['teachers-file'],
        queryFn: () => exportFileTeachers(token)
    })
    return { teachersFile, isPending, error, refetch }
}

export default useExportFileTeacher