import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTeacherProfile } from "../../../services/admin/apiTeacherProfile"
import { useUser } from "../../../hooks/useUser";
import toast from "react-hot-toast";

const useUpdateProfile = () => {
    const { token } = useUser();
    const queryClient = useQueryClient()
    const { mutate, isPending } = useMutation({
        mutationFn: ({ password, avatar }) => updateTeacherProfile(password, avatar, token),
        onSuccess: () => {
            queryClient.invalidateQueries(['Profile']);
            toast.success('تم تحديث معلومات الصفحه الشخصية بنجاح')
        },
        onError: () => {
            toast.error(' حدث خطأ اثناء تحديث المعلومات يرجي المحاولة لاحقا')
        }
    })
    return { mutate, isPending }
}
export default useUpdateProfile