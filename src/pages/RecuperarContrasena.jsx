import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../utils/api";

const RecuperarContrasena = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(APIURL.solicitar_recuperacion, {
        email,
      });
      setMensaje(
        response.data.message ||
          "Se han enviado las instrucciones a tu correo electrónico"
      );
    } catch (error) {
      setMensaje(
        error.response?.data?.message ||
          "Error al enviar el correo. Por favor, intenta nuevamente."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      {/* Contenedor principal */}
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-lg shadow-md">
        {/* Título */}
        <h2 className="text-2xl font-semibold text-white mb-2">Enviar Email</h2>

        {/* Texto descriptivo */}
        <p className="text-gray-400 mb-6">
          ¿Olvidaste tu contraseña? Ingresa tu correo electrónico y te
          enviaremos las instrucciones para restablecer tu contraseña.
        </p>

        {/* Mensaje de estado */}
        {mensaje && (
          <p
            className={`mb-4 ${
              mensaje.toLowerCase().includes("error")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {mensaje}
          </p>
        )}

        {/* Formulario */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Campo de correo */}
          <div>
            <label className="block text-gray-300 mb-1">Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full bg-greenmusgo text-white py-2 rounded-md 
                       hover:bg-softYellow hover:text-black transition duration-300"
          >
            Enviar recuperación
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
