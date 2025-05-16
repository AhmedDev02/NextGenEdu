import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Protector = ({ children }) => {
  const user = useSelector((state) => state.auth.user); // Get the user from Redux store
  const location = useLocation(); // Get the current location to redirect to after login

  console.log(user.role);
  if (!user || !["Super admin", "Teacher", "Admin"].includes(user.role)) {
    localStorage.setItem("showLoginToast", "true");
    return (
      <Navigate
        to="/teachers/login"
        state={{ from: location, showToast: true }}
        replace
      />
    );
  }

  // If the user is a teacher, render the protected content (children)
  return children;
};

export default Protector;
