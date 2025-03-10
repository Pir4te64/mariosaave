import React from "react";
import FormularioRegistro from "../components/FormularioRegistro";
import socios from "../assets/socios.png";

const Registrate = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col md:flex-row items-center justify-center gap-8 p-8">
      {/* Primera Sección: Imagen (oculta en mobile) */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
        <img
          src={socios}
          alt="Socios"
          className="rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Segunda Sección: Formulario */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        {/* Contenedor para ajustar ancho máximo del formulario */}
        <div className="max-w-md w-full bg-neutral-900 text-white  rounded-lg shadow-md text-center">
          <FormularioRegistro />
        </div>
      </div>
    </div>
  );
};

export default Registrate;
