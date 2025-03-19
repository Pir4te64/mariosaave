import React, { useState } from "react";
import { APIURL, apikey } from "../utils/api";

const FormularioLogin = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmacionContraseña, setConfirmacionContraseña] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación: se verifica que la contraseña coincida con su confirmación
    if (contraseña !== confirmacionContraseña) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      const response = await fetch(APIURL.register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: apikey,
        },
        body: JSON.stringify({
          email: correo,
          password: contraseña,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        // Según la respuesta, si email_verified es false, se indica que revise su email.
        if (data.user_metadata.email_verified === false) {
          alert(
            "Registro exitoso. Por favor, revise su email para confirmar su cuenta."
          );
        } else {
          alert("Registro exitoso.");
        }
      } else {
        alert("Error en el registro. Por favor, intente nuevamente.");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Error al enviar datos.");
    }
  };

  return (
    <div className='w-full max-w-2xl mx-auto bg-neutral-900 p-12 rounded-lg shadow-lg'>
      {/* Título */}
      <h2 className='text-4xl font-semibold text-white mb-8 text-left'>
        Iniciar Sesión
      </h2>

      <form className='space-y-8' onSubmit={handleSubmit}>
        {/* Correo */}
        <div>
          <label className='block text-left text-gray-300 mb-2 text-lg'>
            Correo
          </label>
          <input
            type='email'
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className='w-full p-3 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg'
            placeholder='Ingresa tu correo'
            required
          />
        </div>

        {/* Contraseña */}
        <div>
          <label className='block text-left text-gray-300 mb-2 text-lg'>
            Contraseña
          </label>
          <input
            type='password'
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            className='w-full p-3 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg'
            placeholder='Ingresa tu contraseña'
            required
          />
        </div>

        {/* Confirmación de contraseña */}
        <div>
          <label className='block text-left text-gray-300 mb-2 text-lg'>
            Confirmación de contraseña
          </label>
          <input
            type='password'
            value={confirmacionContraseña}
            onChange={(e) => setConfirmacionContraseña(e.target.value)}
            className='w-full p-3 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg'
            placeholder='Confirma tu contraseña'
            required
          />
        </div>

        {/* Botón de envío */}
        <button
          type='submit'
          className='w-full bg-greenmusgo text-white py-3 rounded-md hover:bg-softYellow hover:text-black transition duration-300 text-lg'>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default FormularioLogin;
