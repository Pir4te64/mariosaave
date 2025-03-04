import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStoreLogin from "../Routes/useStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useStoreLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de las credenciales
    if (email === "super@gmail.com" && password === "123") {
      setIsAuthenticated(true); // Establecemos el estado de autenticación
      navigate("/dashboard"); // Redirigimos al Dashboard
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Iniciar Sesión
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Correo */}
        <div>
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu correo"
          />
        </div>

        {/* Contraseña */}
        <div>
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu contraseña"
          />
        </div>

        {/* Botón de enviar */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Iniciar Sesión
        </button>
      </form>
      {/* Otros enlaces de registro y redes sociales */}
    </div>
  );
};

export default Login;
