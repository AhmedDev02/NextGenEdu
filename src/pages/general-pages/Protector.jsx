import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Protector = ({ children }) => {
  const user = useSelector((state) => state.auth.user); // Get the user from Redux store
  const location = useLocation(); // Get the current location to redirect to after login

  console.log(user);
  if (!user || user.role !== "Super admin") {
    // Redirect to login page for teachers if not authenticated or not a teacher
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
