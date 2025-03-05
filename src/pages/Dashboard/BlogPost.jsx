import React from "react";
import { useParams } from "react-router-dom"; // Para obtener el parámetro de la URL

const BlogPost = () => {
  const { id } = useParams(); // Obtiene el id de la URL

  return (
    <div className="p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-6 sm:mb-8">
        Detalles del Blog - ID: {id}
      </h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Contenido del Blog
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mt-4">
          Aquí puedes mostrar el contenido específico del artículo basado en el
          ID: {id}.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
