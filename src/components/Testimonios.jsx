import React from "react";
import imagenEjemplo from "../assets/react.svg"; // Asegúrate de tener la imagen en esta ruta

const Testimonios = () => {
  return (
    <section className="w-full mt-32 flex justify-center items-center">
      <div className="w-11/12 md:w-4/5 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Nuestros Testimonios
        </h2>

        {/* Sección con texto y una imagen al lado */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex-1">
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              interdum, libero euismod facilisis pharetra, leo dui placerat
              velit, at tempor magna augue sit amet nisl. Integer vel varius
              libero.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={imagenEjemplo}
              alt="Imagen de ejemplo"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-center text-gray-500 mt-2">Texto de la imagen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
