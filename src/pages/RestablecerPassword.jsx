import React from "react";
import { useNavigate } from "react-router-dom";

const RestablecerPassword = () => {
  const navigate = useNavigate(); // Usado para la navegación a la página anterior

  const handleGoBack = () => {
    navigate(-1); // Vuelve a la página anterior
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Recuperar Contraseña
      </h2>

      <button
        onClick={handleGoBack}
        className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 mb-4"
      >
        Volver
      </button>

      <form className="space-y-4">
        {/* Correo */}
        <div>
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu correo"
          />
        </div>

        {/* Botón de enviar */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default RestablecerPassword;
