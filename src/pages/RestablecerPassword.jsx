import React from "react";
import { useNavigate } from "react-router-dom";

const RestablecerPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar nueva contraseña
    alert("Tu contraseña ha sido restablecida.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-lg shadow-md">
        {/* Título */}
        <h2 className="text-3xl font-semibold text-white mb-2">
          Restablecer contraseña
        </h2>

        {/* Descripción */}
        <p className="text-gray-400 mb-6 leading-relaxed">
          Cambia tu contraseña. <br /> Gracias por confirmar tu cuenta. Ingresa
          una nueva contraseña.
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Contraseña */}
          <div>
            <label className="block text-gray-300 mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu nueva contraseña"
            />
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <label className="block text-gray-300 mb-1">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirma tu nueva contraseña"
            />
          </div>

          {/* Requisitos de contraseña (opcional) */}
          <ul className="text-gray-500 text-sm list-disc list-inside space-y-1 mt-2">
            <li>Contiene mínimo 8 caracteres</li>
            <li>Incluye al menos una mayúscula</li>
            <li>Incluye caracteres alfanuméricos</li>
          </ul>

          {/* Botón de cambiar contraseña */}
          <button
            type="submit"
            className="w-full bg-greenmusgo text-white py-2 rounded-md
                       hover:bg-softYellow hover:text-black transition duration-300 mt-4"
          >
            Cambiar contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default RestablecerPassword;
