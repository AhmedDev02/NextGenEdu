
import { useMutation } from "@tanstack/react-query";
import { useUser } from "../../../hooks/useUser";
import { exportFileStudent } from "../../../services/superAdmin/apiStudents";

const useExportFileStudent = () => {
    const { token } = useUser();

    const { mutateAsync, isPending } = useMutation({
        mutationFn: () => exportFileStudent(token),
    });

    return { exportFile: mutateAsync, isExporting: isPending };
};

export default useExportFileStudent;