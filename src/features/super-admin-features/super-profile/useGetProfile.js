import { useQuery } from "@tanstack/react-query"
import { useUser } from "../../../hooks/useUser"
import { getSuperAdminProfile } from "../../../services/superAdmin/apiSuperProfile"

const useGetProfile = () => {
  const { token } = useUser()
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ['super-profile'],
    queryFn: () => getSuperAdminProfile(token),
    enabled: !!token
  })
  return { data, isPending, error, refetch }
}

export default useGetProfile