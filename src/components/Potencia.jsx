import React from "react";

const Potencia = () => {
  return (
    <section className="w-full mt-32 flex justify-center items-center">
      <div className="w-11/12 md:w-4/5 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Potencia de Nuestro Servicio
        </h2>

        {/* Sección dividida en dos partes */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Caja 1 */}
          <div className="flex-1 bg-blue-500 text-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Caja 1</h3>
            <p className="text-lg text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Etiam malesuada risus at tortor placerat, vel aliquam
              elit tempus. Quisque eget lectus nec urna efficitur dictum.
            </p>
          </div>

          {/* Caja 2 */}
          <div className="flex-1 bg-green-500 text-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Caja 2</h3>
            <p className="text-lg text-gray-200">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Curabitur nec dui turpis.
              Aenean pharetra tortor in ligula venenatis, id eleifend nisl
              elementum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potencia;
