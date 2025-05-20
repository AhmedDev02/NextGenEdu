import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { apiReadTableTeacher } from "../../../services/admin/apiTableTeacher";

export const useReadTableTeacher = () => {
  const user = useSelector((state) => state.auth.user); // Get the user from Redux store
  const token = user ? user.token : null;

  const { data: tableData, isPending, error } = useQuery({
    queryKey: ['Admin table', token],
    queryFn: () => apiReadTableTeacher(token),
  })
  return { tableData, isPending, error }
}

