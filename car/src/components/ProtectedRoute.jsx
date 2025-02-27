import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import Firebase authentication

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; // Get logged-in user

  if (!user) {
    return <Navigate to="/login" replace />; // Redirect if not logged in
  }

  return children;
};

export default ProtectedRoute;
