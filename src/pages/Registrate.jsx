import React from "react";
import FormularioRegistro from "../components/FormularioRegistro";

const Registrate = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 p-8">
      {/* Primera Sección */}
      <div className="w-full md:w-1/2 bg-blue-500 text-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-4">Bienvenido</h2>
        <p className="text-lg">
          Únete a nuestra plataforma y disfruta de nuestros servicios
          exclusivos.
        </p>
      </div>

      {/* Segunda Sección */}
      <div className="w-full md:w-1/2 bg-green-500 text-white p-8 rounded-lg shadow-md text-center">
        <FormularioRegistro />
      </div>
    </div>
  );
};

export default Registrate;
