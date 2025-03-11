// BlogCard.jsx
import React from "react";
import { Eye } from "lucide-react"; // O cualquier otro ícono que desees usar

const BlogCard = ({ image, title, author, excerpt, views }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72">
      {/* Imagen de portada */}
      <img src={image} alt={title} className="w-full h-44 object-cover" />

      {/* Contenido de la tarjeta */}
      <div className="p-4">
        {/* Título */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
          {title}
        </h3>

        {/* Autor */}
        <p className="text-sm text-gray-500 mb-2">{author}</p>

        {/* Extracto o descripción corta */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>

        {/* Enlace de "Leer más" */}

        {/* Sección de vistas */}
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <a
            href="#"
            className="text-blue-600 text-sm hover:underline inline-block mb-2"
          >
            Leer más
          </a>

          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {views.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
