import React from "react";

const Resultados = () => {
  return (
    <section className="w-full mt-32 flex justify-center items-center">
      <div className="w-11/12 md:w-4/5 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Nuestros Resultados
        </h2>

        {/* Sección con 3 cajas horizontales */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Caja 1 */}
          <div className="flex-1 bg-blue-500 text-white p-8 rounded-lg shadow-md mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Caja 1</h3>
            <p className="text-lg text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi.
            </p>
          </div>

          {/* Caja 2 */}
          <div className="flex-1 bg-green-500 text-white p-8 rounded-lg shadow-md mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Caja 2</h3>
            <p className="text-lg text-gray-200">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
          </div>

          {/* Caja 3 */}
          <div className="flex-1 bg-yellow-500 text-white p-8 rounded-lg shadow-md mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Caja 3</h3>
            <p className="text-lg text-gray-200">
              Aenean pharetra tortor in ligula venenatis, id eleifend nisl
              elementum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resultados;
