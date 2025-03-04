import React from "react";

const Planes = () => {
  return (
    <section className="w-full mt-32 flex flex-col justify-center items-center px-4">
      {/* Título y descripción */}
      <div className="w-full md:w-4/5 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Nuestros Planes
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Descubre nuestros 4 planes diseñados para ofrecerte la mejor
          experiencia. Cada uno se adapta a tus necesidades, brindando opciones
          flexibles y beneficios exclusivos.
        </p>
      </div>

      {/* Sección con 4 cajas horizontales */}
      <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Caja 1 */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Plan 1</h3>
          <p className="text-gray-200">Ideal para principiantes.</p>
        </div>

        {/* Caja 2 */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Plan 2</h3>
          <p className="text-gray-200">Equilibrio entre costo y beneficio.</p>
        </div>

        {/* Caja 3 */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Plan 3</h3>
          <p className="text-gray-200">Perfecto para profesionales.</p>
        </div>

        {/* Caja 4 */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Plan 4</h3>
          <p className="text-gray-200">Máximo rendimiento y beneficios.</p>
        </div>
      </div>
    </section>
  );
};

export default Planes;
