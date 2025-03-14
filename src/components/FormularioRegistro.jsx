import React, { useState } from "react";

const FormularioRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Aquí podrías enviar los datos a tu backend o manejarlos según necesites
    console.log("Registrado:", { nombre, correo, contraseña });
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-neutral-900 p-8 rounded-lg shadow-md">
      {/* Título */}
      <h2 className="text-3xl font-semibold text-white mb-6 text-left">
        ¡Regístrate!
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Nombre */}
        <div>
          <label className="block text-left text-gray-300 mb-1">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>

        {/* Correo */}
        <div>
          <label className="block text-left text-gray-300 mb-1">Correo</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu correo"
            required
          />
        </div>

        {/* Contraseña */}
        <div>
          <label className="bloc text-leftk text-gray-300 mb-1">
            Contraseña
          </label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        {/* Confirmación de contraseña */}
        <div>
          <label className="block text-left text-gray-300 mb-1">
            Confirmar contraseña
          </label>
          <input
            type="password"
            value={confirmarContraseña}
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirma tu contraseña"
            required
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-greenmusgo text-white py-2 rounded-md hover:bg-softYellow hover:text-black transition duration-300"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default FormularioRegistro;
