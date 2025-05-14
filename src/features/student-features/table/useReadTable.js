import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { apiReadTable } from "../../../services/student/apiTable";

export const useReadTable = () => {
  const user = useSelector((state) => state.auth.user); // Get the user from Redux store
  const token = user ? user.token : null;

  const { data: tableData, isPending, isFetching, error } = useQuery({
    queryKey: ['Student table', token],
    queryFn: () => apiReadTable(token),
  })
  return { tableData, isPending, error, isFetching }
}

