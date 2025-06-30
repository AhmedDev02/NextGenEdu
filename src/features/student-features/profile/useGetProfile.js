import { useQuery } from "@tanstack/react-query"
import { getProfileData } from "../../../services/student/apiProfile";
import { useUser } from "../../../hooks/useUser";

export const useGetProfile = () => {
    const { token, user } = useUser();

    const { data: ProfileInfo, error, isPending, refetch } = useQuery({
        queryKey: ['Profile', token],
        queryFn: () => getProfileData({ token, user }),
        enabled: !!token,
    })
    return { ProfileInfo, error, isPending, refetch }
}

