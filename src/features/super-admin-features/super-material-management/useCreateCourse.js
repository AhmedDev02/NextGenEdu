import { useMutation } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { createCourse } from "../../../services/superAdmin/apiCourses"

const useCreateCourse = () => {
    const { token } = useUser()
    const { mutate, isPending } = useMutation({
        mutationFn: (data) => createCourse(token, data)
    })
    return { mutate, isPending }
}

export default useCreateCourse