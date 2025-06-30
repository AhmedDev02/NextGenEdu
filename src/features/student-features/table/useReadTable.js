import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { apiReadTable } from "../../../services/student/apiTable";

export const useReadTable = () => {
  const user = useSelector((state) => state.auth.user);
  const token = user ? user.token : null;

  const { data: tableData, isPending, error, refetch } = useQuery({
    queryKey: ['student table', token],
    queryFn: () => apiReadTable(token),
    enabled: !!token
  })
  return { tableData, isPending, error, refetch }
}

