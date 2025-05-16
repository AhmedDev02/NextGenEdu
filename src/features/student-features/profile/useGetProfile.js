import { useQuery } from "@tanstack/react-query"
import { getProfileData } from "../../../services/student/apiProfile";
import { useUser } from "../../../hooks/useUser";

export const useGetProfile = () => {
    const { token, user } = useUser();
    // const user = useSelector((state) => state.auth.user); 
    // const token = user ? user.token : null;
    console.log(user)
    const queryEnabled = !!token;
    const { data: ProfileInfo, error, isLoading } = useQuery({
        queryKey: ['Profile', token],
        queryFn: () => getProfileData({token,user}),
        enabled: queryEnabled,
        staleTime: 0
    })
    return { ProfileInfo, error, isLoading }
}

