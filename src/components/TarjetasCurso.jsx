// ProximaLeccionCard.jsx
import React from "react";

const ProximaLeccionCard = ({ image, title, author, lessonInfo, progress }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-72 h-96">
      {/* Imagen fija con altura definida */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Contenedor del contenido con altura fija */}
      <div className="p-4 flex flex-col h-48">
        <div>
          {/* Título y textos truncados para evitar que sobrepasen el espacio */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-2 truncate">{author}</p>
          <p className="text-gray-500 text-sm truncate">{lessonInfo}</p>
        </div>

        {/* Sección inferior que se "pega" al fondo del contenedor */}
        <div className="mt-auto">
          {/* Barra de progreso */}
          <div className="w-full bg-gray-200 rounded-full h-2 my-3">
            <div
              className="bg-greenmusgo h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-600 text-sm">Progreso: {progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProximaLeccionCard;
