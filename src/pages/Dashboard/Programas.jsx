import React from "react";

const Programas = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          Bienvenido de nuevo, ¿listo para tu próxima lección?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Curso"
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold">
                  Entrenamiento básico superior
                </h3>
                <p className="text-gray-600 text-sm">Por: Entrenador</p>
              </div>
            ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Elige tu curso
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(12)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Curso"
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold">Curso de alto nivel</h3>
                <p className="text-gray-600 text-sm">Entrenador experto</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-500 text-sm">140€</span>
                  <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm">
                    Ver más
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Programas;
