import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmarPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Función para manejar la confirmación de la contraseña
  const handleConfirmPassword = (e) => {
    e.preventDefault();

    // Verifica si las contraseñas coinciden
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
      // Redirige al inicio si las contraseñas coinciden
      navigate("/");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Confirmar Contraseña
      </h2>

      {/* Formulario para confirmar la contraseña */}
      <form onSubmit={handleConfirmPassword} className="space-y-4">
        {/* Contraseña nueva */}
        <div>
          <label className="block text-gray-700">Nueva Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirmación de contraseña */}
        <div>
          <label className="block text-gray-700">Confirmar Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirma tu nueva contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Mensaje de error */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Botón de enviar */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default ConfirmarPassword;
