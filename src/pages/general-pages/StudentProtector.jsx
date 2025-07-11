import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentProtector = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.auth.user); // Get the user from Redux store
  const location = useLocation(); // Get the current location to redirect to after login

  if (allowedRoles?.includes(user?.role)) {
    localStorage.setItem("showLoginToast", "true");
    return children;
  }

  if (!user || user.role !== "Student") {
    localStorage.setItem("showLoginToast", "true");
    return (
      <Navigate
        to="/students/login"
        state={{ from: location, showToast: true }}
        replace
      />
    );
  }

  // If the user is a teacher, render the protected content (children)
  return children;
};

export default StudentProtector;
