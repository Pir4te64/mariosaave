import React, { useState } from "react";
import { APIURL } from "../utils/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormularioLogin = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmacionContraseña, setConfirmacionContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación: se verifica que la contraseña coincida con su confirmación
    if (contraseña !== confirmacionContraseña) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden",
      });
      return;
    }
    try {
      const response = await fetch(APIURL.register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: correo,
          password: contraseña,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        // Según la respuesta, si isActive es true se indica que revise su email.
        if (data.isActive === true) {
          Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: "Proceda a logearse.",
            timer: 1500,
            showConfirmButton: false,
          }).then(() => {
            navigate("/login");
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error en el registro. Por favor, intente nuevamente.",
        });
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al enviar datos.",
      });
    }
  };

  return (
    <div className='w-full max-w-2xl mx-auto bg-neutral-900 p-12 rounded-lg shadow-lg'>
      {/* Título */}
      <h2 className='text-4xl font-semibold text-white mb-8 text-left'>
        Registro
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
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default FormularioLogin;
