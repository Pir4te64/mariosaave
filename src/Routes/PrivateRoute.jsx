import { Navigate } from "react-router-dom";
import useStoreLogin from "./useStore";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useStoreLogin(); // Obtén el estado global de la autenticación

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
