import React from "react";
import apuntando from "../assets/Apuntando.png";
import fondo from "../assets/back.png";

const Potencia = () => {
  return (
    <section
      id="contacto"
      className="w-full my-32 flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${fondo})`,
      }}
    >
      <div className="w-11/12 md:w-3/4 text-center">
        {/* Sección dividida en dos partes */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Caja 1 */}
          <div className="flex-1 text-white p-8 rounded-lg space-y-6">
            <h3 className="text-5xl font-bold text-left my-5 leading-tight">
              Potencia tu cuerpo, transforma tu vida
            </h3>
            <p className="text-lg text-left my-5 leading-normal">
              Con un plan de entrenamiento personalizado y asesoría nutricional,
              alcanzar tus objetivos nunca ha sido tan eficiente.
            </p>
            <button className="mt-4 my-5 bg-greenmusgo text-white px-6 py-2 w-full hover:bg-softYellow hover:text-black rounded-sm font-semibold shadow-md transition">
              ¡Conoce qué plan se adapta a ti!
            </button>
          </div>

          {/* Imagen en lugar de Caja 2 */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={apuntando}
              alt="Persona apuntando"
              className="w-full max-w-md md:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potencia;
