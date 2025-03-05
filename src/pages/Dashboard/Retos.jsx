import React, { useState } from "react";

const Retos = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Array de ejemplo
  const retos = [
    "Reto 1: Aprender React",
    "Reto 2: Hacer un proyecto con Tailwind",
    "Reto 3: Implementar un sistema de autenticación",
    "Reto 4: Estudiar GraphQL",
    "Reto 5: Trabajar con APIs",
    "Reto 6: Dominar Git",
    "Reto 7: Aprender TypeScript",
    "Reto 8: Crear un portfolio",
  ];

  // Filtrar los retos según el término de búsqueda
  const filteredRetos = retos.filter((reto) =>
    reto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center mb-8">
        Retos
      </h1>

      {/* Buscador */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Buscar reto..."
          className="border-2 border-gray-300 p-2 rounded-lg w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid de retos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRetos.map((reto, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-md text-center"
          >
            {reto}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Retos;
