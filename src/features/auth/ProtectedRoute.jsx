import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/403" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
