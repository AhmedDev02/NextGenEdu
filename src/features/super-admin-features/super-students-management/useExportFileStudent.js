import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { exportFileStudent } from "../../../services/superAdmin/apiStudents"

const useExportFileStudent = () => {
    const { token } = useUser()
    const { data: studentsFile, isPending, error, refetch } = useQuery({
        queryKey: ['students-file'],
        queryFn: () => exportFileStudent(token)
    })
    return { studentsFile, isPending, error, refetch }
}

export default useExportFileStudent