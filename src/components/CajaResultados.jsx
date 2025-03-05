import React from "react";

const CajaResultados = ({ img }) => {
  return (
    <div className="flex-1 text-white p-8 mb-8 md:mb-0">
      <div className="flex-1 text-white px-4 py-2 rounded-tl-2xl rounded-br-2xl bg-greenmusgo mb-4">
        <div className="flex justify-between text-xl font-semibold">
          <span>Antes</span>
          <span>Después</span>
        </div>
      </div>

      <div className="relative bg-gris p-6 rounded-bl-xl rounded-br-xl">
        <img
          src={img} // Aquí se coloca la imagen deseada
          alt="Imagen de ejemplo"
          className="w-full h-[300px] object-contain rounded-lg" // Tamaño fijo con 'object-cover'
        />
      </div>
    </div>
  );
};

export default CajaResultados;
