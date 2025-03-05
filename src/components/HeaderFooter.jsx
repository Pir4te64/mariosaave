import React from "react";

const HeaderFooter = () => {
  return (
    <div className="w-full flex justify-center items-center -mt-14 md:-mt-32 z-50">
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5">
        {/* Caja 3 */}
        <div className="bg-greenmusgo text-white flex flex-col items-start justify-center p-6 shadow-lg h-full">
          <h2 className="text-3xl font-bold mb-4">
            Beneficios del entrenamiento personalizado
          </h2>

          <ul className="space-y-6">
            <li className="flex items-center gap-2 before:content-['✔'] before:text-black before:font-bold">
              Planes a medida para alcanzar tus objetivos de forma eficiente.
            </li>
            <li className="flex items-center gap-2 before:content-['✔'] before:text-black before:font-bold">
              Entrena desde cualquier lugar con sesiones virtuales guiadas.
            </li>
            <li className="flex items-center gap-2 before:content-['✔'] before:text-black before:font-bold">
              Nutrición estratégica adaptada a tu estilo de vida.
            </li>
            <li className="flex items-center gap-2 before:content-['✔'] before:text-black before:font-bold">
              Acompañamiento constante para asegurar tu progreso.
            </li>
          </ul>

          <button className="mt-6 text-white bg-black hover:text-black hover:bg-softYellow font-semibold px-6 py-3 rounded-sm transition">
            Descubre más
          </button>
        </div>

        {/* Caja 4 */}
        <div className="bg-black text-white flex flex-col items-start justify-center p-8 h-full gap-4 space-y-7">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transforma tu cuerpo con un plan exclusivo
          </h2>
          <p className="text-lg mb-4">
            Cada persona es diferente, por eso necesitas un entrenamiento y una
            alimentación diseñados para ti.
          </p>
          <p className="text-lg mb-6">
            Comienza hoy tu cambio con asesoría personalizada.
          </p>
          <button className="text-black bg-greenmusgo hover:bg-softYellow font-semibold px-6 py-3 rounded-sm transition">
            Únete y sé parte del cambio
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderFooter;
