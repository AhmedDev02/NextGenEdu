import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { uploadSolution } from "../../../services/student/apiTasks"
import toast from "react-hot-toast"

const useUploadTask = (onCloseModal,) => {
    const { token } = useUser()
    const queryClient = useQueryClient()
    const { mutate, isPending  } = useMutation({
        mutationFn: ({ AssId, uploadedSolution }) => uploadSolution(token, AssId, uploadedSolution),
        onSuccess: (data) => {
            queryClient.invalidateQueries(['task']);
            toast.success('تم رفع الملف بنجاح')
            // if (onSuccessCallback) onSuccessCallback(data)
            if (onCloseModal) onCloseModal();
        },
        onError: () => {
            toast.error('حدث خطأ اثناء رفع الملف يرجي المحاولة مجددا')
        }
    })
    return { mutate, isPending  }
}

export default useUploadTask