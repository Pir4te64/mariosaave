import React from "react";
import { Link } from "react-router-dom"; // Importa Link
import { v4 as uuidv4 } from "uuid"; // Para generar ID únicos (puedes usar otro sistema de IDs)

const Blog = () => {
  const noticias = [
    "Noticia 1: Nueva actualización en React",
    "Noticia 2: Lanzamiento de Tailwind CSS v3",
    "Noticia 3: JavaScript sigue siendo el rey del frontend",
    "Noticia 4: La importancia de aprender TypeScript",
  ];

  return (
    <div className="p-4">
      <h1 className="text-5xl font-semibold text-gray-800 text-center mb-8">
        Blog
      </h1>

      {/* Div dividido en dos secciones (Texto e Imagen) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Texto */}
        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
          <p className="text-lg text-gray-700">
            Aquí va el texto del blog. Puedes agregar cualquier contenido que
            desees, como una introducción al artículo o un resumen del tema que
            estás tratando.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Imagen del blog"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Sección de Noticias */}
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Noticias
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {noticias.map((noticia, index) => {
          const id = uuidv4(); // Genera un ID único para cada noticia
          return (
            <Link
              key={id}
              to={`/blog/${id}`} // Redirige a la ruta con el ID único
              className="p-4 bg-gray-100 rounded-lg shadow-md text-center"
            >
              {noticia}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
