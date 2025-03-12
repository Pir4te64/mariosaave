import React from "react";
import { Check, X } from "lucide-react";

const PlanCard = ({ title, subtitle, features, buttonText }) => {
  const includedFeatures = features.filter((f) => f.included);
  const notIncludedFeatures = features.filter((f) => !f.included);

  return (
    <div className="bg-white border border-greenmusgo rounded-lg shadow-sm flex flex-col p-4 h-[500px]">
      {/* Título y subtítulo */}
      <h3 className="text-xl md:text-2xl font-semibold text-greenmusgo mb-1">
        {title}
      </h3>
      <span className="text-sm font-normal text-gray-500 mb-3">{subtitle}</span>

      {/* Contenedor de features que se expande y añade scroll si es necesario */}
      <div className="flex-1 overflow-y-auto">
        {includedFeatures.length > 0 && (
          <>
            <p className="text-gray-700 bg-greenmusgo font-medium p-2 mt-2 rounded-md w-full">
              Incluye:
            </p>
            <ul className="mt-2 text-gray-600 space-y-2 px-2">
              {includedFeatures.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-green-600" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {notIncludedFeatures.length > 0 && (
          <>
            <p className="text-gray-700 bg-greenmusgo font-medium p-2 mt-4 rounded-md w-full">
              No incluye:
            </p>
            <ul className="mt-2 text-gray-600 space-y-2 px-2">
              {notIncludedFeatures.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <X className="text-red-600" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Botón fijo al fondo */}
      <button className="bg-greenmusgo hover:bg-softYellow hover:text-black text-white font-semibold py-2 px-4 mt-4 rounded-full">
        {buttonText}
      </button>
    </div>
  );
};

export default PlanCard;
