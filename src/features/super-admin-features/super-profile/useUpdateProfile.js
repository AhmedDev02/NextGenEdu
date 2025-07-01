import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import toast from "react-hot-toast"
import { updateSuperAdminProfile } from "../../../services/superAdmin/apiSuperProfile"

const useUpdateProfile = () => {
    const { token } = useUser()
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation({
        mutationFn: ({ password, avatar }) => updateSuperAdminProfile(password, avatar, token),
        onSuccess: () => {
            queryClient.invalidateQueries(['super-profile']);
            toast.success('تم تحديث معلومات الصفحه الشخصية بنجاح')
        },
        onError: () => {
            toast.error(' حدث خطأ اثناء تحديث المعلومات يرجي المحاولة لاحقا')
        }
    })
    return { mutate, isPending }
}

export default useUpdateProfile