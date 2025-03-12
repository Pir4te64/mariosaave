import React from "react";
import testmonio from "../assets/testimonios.png"; // Asegúrate de tener la imagen en esta ruta
import TestimoniosCarousel from "./TestimoniosCarousel";
const Testimonios = () => {
  return (
    <section
      className="w-full mt-32 flex justify-center items-center px-4"
      id="testimonios"
    >
      <div className="w-full md:w-4/5 text-center">
        <h2 className="text-2xl font-thin text-gray-800 mb-4">
          <strong className="font-extrabold text-5xl mb-4">Testimonios</strong>{" "}
          <br /> que respaldan los resultados
        </h2>

        {/* Sección con imagen arriba y texto abajo en pantallas pequeñas */}
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={testmonio}
              alt="Imagen de testimonio"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <TestimoniosCarousel />
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
