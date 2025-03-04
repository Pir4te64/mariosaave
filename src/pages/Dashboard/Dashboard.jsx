import React from "react";
import { useNavigate } from "react-router-dom";
import useStoreLogin from "../../Routes/useStore";

const Dashboard = () => {
  const { setIsAuthenticated } = useStoreLogin();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false); // Actualizamos el estado global
    localStorage.removeItem("isAuthenticated"); // Limpiamos el estado en localStorage
    navigate("/login"); // Redirigimos al login
  };

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded-md"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Dashboard;
