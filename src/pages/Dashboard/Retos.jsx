import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import CursoCard from "../../components/CursoCard";
import { cursosDisponibles } from "../../utils/ProgramasLecciones";

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
    <div className="bg-[#F8F8F5] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center mb-8">
          Retos
        </h1>

        {/* Contenedor principal del buscador y filtros */}
        <div className="max-w-4xl mx-auto">
          {/* Buscador: columna en mobile, fila en sm+ */}
          <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-md shadow-sm overflow-hidden">
            <input
              type="text"
              placeholder="Buscar el reto"
              className="w-full px-4 py-3 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-[#A6A27B] px-6 py-3 text-white font-semibold hover:opacity-90 transition-opacity">
              Buscar
            </button>
          </div>

          {/* Filtros: alineados a la izquierda en mobile */}
          <div className="flex flex-wrap items-center gap-2 mt-4 justify-start md:justify-between">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-md shadow-sm px-4 py-2 flex items-center justify-between cursor-pointer w-full sm:w-auto"
                >
                  <span className="text-gray-700">Lorem</span>
                  <ChevronDown className="w-4 h-4 ml-2 text-gray-500" />
                </div>
              ))}
          </div>
        </div>

        {/* Línea divisoria (opcional) */}
        <hr className="my-6 border-gray-300" />

        {/* Sección de cursos utilizando CursoCard */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Elige tu curso
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cursosDisponibles.map((curso) => (
            <CursoCard key={curso.id} {...curso} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Retos;
