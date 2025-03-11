// CursoCard.jsx
import React from "react";

const CursoCard = ({
  image,
  category,
  duration,
  title,
  description,
  authorImage,
  authorName,
  oldPrice,
  newPrice,
}) => {
  return (
    <div className="bg-white w-72 p-4 rounded-lg shadow-md">
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover rounded-md"
      />

      {/* Categoría y duración (por ejemplo: "Piernas", "3 semanas") */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
        <span>{category}</span>
        <span>{duration}</span>
      </div>

      {/* Título */}
      <h3 className="text-base font-semibold mt-2 text-gray-800">{title}</h3>

      {/* Descripción breve */}
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>

      {/* Autor / Entrenador */}
      <div className="flex items-center mt-3">
        {authorImage && (
          <img
            src={authorImage}
            alt={authorName}
            className="w-6 h-6 rounded-full mr-2 object-cover"
          />
        )}
        <span className="text-sm text-gray-700">{authorName}</span>
      </div>

      {/* Precios (tachado y precio final) */}
      <div className="flex items-center justify-between mt-3">
        {oldPrice && (
          <span className="text-sm text-gray-400 line-through">
            €{oldPrice}
          </span>
        )}
        <span className="text-lg font-semibold text-greenmusgo">
          €{newPrice}
        </span>
      </div>
    </div>
  );
};

export default CursoCard;
