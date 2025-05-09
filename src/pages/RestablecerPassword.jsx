// src/components/RestablecerPassword.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { APIURL } from "../utils/api";
import Swal from "sweetalert2";

const RestablecerPassword = () => {
  const navigate = useNavigate();
  const [nuevaClave, setNuevaClave] = useState("");
  const [confirmarClave, setConfirmarClave] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    // Obtener el token de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      setMensaje("Token no encontrado en la URL");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setMensaje("Token no válido");
      return;
    }

    if (nuevaClave !== confirmarClave) {
      setMensaje("Las contraseñas no coinciden");
      return;
    }

    try {
      await axios.post(APIURL.resetear_clave, {
        token,
        nuevaClave,
        confirmarClave,
      });
      setMensaje("Contraseña actualizada exitosamente");

      // Mostrar SweetAlert2 antes de redirigir
      await Swal.fire({
        icon: "success",
        title: "¡Contraseña actualizada!",
        text: "Tu contraseña ha sido actualizada exitosamente. Serás redirigido al login.",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      navigate("/login");
    } catch (error) {
      console.error("Error al actualizar la contraseña:", error);
      setMensaje("Error al actualizar la contraseña");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white mb-2">
          Restablecer contraseña
        </h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Cambia tu contraseña. Gracias por confirmar tu cuenta. Ingresa una
          nueva contraseña.
        </p>

        {mensaje && (
          <p
            className={`mb-4 ${
              mensaje.includes("Error") || mensaje.includes("no")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {mensaje}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Contraseña</label>
            <input
              type="password"
              value={nuevaClave}
              onChange={(e) => setNuevaClave(e.target.value)}
              className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu nueva contraseña"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              value={confirmarClave}
              onChange={(e) => setConfirmarClave(e.target.value)}
              className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirma tu nueva contraseña"
              required
            />
          </div>

          <ul className="text-gray-500 text-sm list-disc list-inside space-y-1 mt-2">
            <li>Contiene mínimo 8 caracteres</li>
            <li>Incluye al menos una mayúscula</li>
            <li>Incluye caracteres alfanuméricos</li>
          </ul>

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
