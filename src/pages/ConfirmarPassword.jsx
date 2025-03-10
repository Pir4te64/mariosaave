import React from "react";
import { Link } from "react-router-dom";

const RecuperarContrasena = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      {/* Contenedor principal */}
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-lg shadow-md">
        {/* Título */}
        <h2 className="text-2xl font-semibold text-white mb-2">
          Recuperar contraseña
        </h2>

        {/* Texto descriptivo */}
        <p className="text-gray-400 mb-6">
          ¿Olvidaste tu contraseña? Ingresa tu correo electrónico y te
          enviaremos las instrucciones para restablecer tu contraseña.
        </p>

        {/* Formulario */}
        <form className="space-y-4">
          {/* Campo de correo */}
          <div>
            <label className="block text-gray-300 mb-1">Correo</label>
            <input
              type="email"
              className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu usuario"
            />
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full bg-greenmusgo text-white py-2 rounded-md 
                       hover:bg-softYellow hover:text-black transition duration-300"
          >
            Enviar instrucciones
          </button>
        </form>

        {/* Enlace para registrarse */}
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            ¿Aún no tienes una cuenta?{" "}
            <Link to="/registrate" className="text-greenmusgo hover:underline">
              Regístrate Ahora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecuperarContrasena;
