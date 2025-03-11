// Programas.jsx
import React, { useRef } from "react";
import ProximaLeccionCard from "../../components/TarjetasCurso";
import CursoCard from "../../components/CursoCard"; // Importar el nuevo componente
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  cursosDisponibles,
  leccionesProximas,
} from "../../utils/ProgramasLecciones";

const Programas = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Cursos disponibles (colocados aquí o en un archivo aparte)

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado con "Ver calendario" */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Bienvenido de nuevo, ¿listo para tu próxima lección?
          </h1>
          <a
            href="#"
            className="mt-2 sm:mt-0 text-blue-600 hover:underline text-base sm:text-lg"
          >
            Ver calendario
          </a>
        </div>

        {/* Carrusel de próximas lecciones */}
        <div className="relative mb-8">
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth space-x-4 flex items-stretch"
            style={{ scrollBehavior: "smooth" }}
          >
            {leccionesProximas.map((leccion) => (
              <div
                key={leccion.id}
                className="min-w-[280px] sm:min-w-[300px] mr-4 last:mr-0"
              >
                <ProximaLeccionCard
                  image={leccion.image}
                  title={leccion.title}
                  author={leccion.author}
                  lessonInfo={leccion.lessonInfo}
                  progress={leccion.progress}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación tipo carousel (si hay más de 3 elementos) */}
        {leccionesProximas.length > 3 && (
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              onClick={scrollLeft}
              className="p-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}

        {/* Sección "Elige tu curso" */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Elige tu curso
        </h2>

        {/* Cuadrícula de cursos disponibles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cursosDisponibles.map((curso) => (
            <CursoCard key={curso.id} {...curso} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programas;
