import { useSelector } from "react-redux";

export function useUser() {
  const user = useSelector((state) => state.auth.user); // Get the user from Redux store
  return { user, token: user.token };
}
