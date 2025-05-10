import React from "react";
import { GiFootprint } from "react-icons/gi";

const Grasa = ({ porcentaje = 45 }) => {
  return (
    <div className="t ransition-transform flex h-full flex-col items-center gap-4 rounded-2xl p-6 hover:scale-[1.02]">
      {/* Encabezado con icono */}
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-gradient-to-br from-[#99A98F] to-[#99A98F] p-3">
          <GiFootprint className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          Grasa corporal
        </h3>
      </div>

      {/* Valor grande */}
      <span className="text-4xl font-bold text-[#99A98F]">
        {porcentaje}%
      </span>

      {/* Mini progress bar */}
      <div className="w-full max-w-[120px]">
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-[#99A98F]"
            style={{ width: `${porcentaje}%` }}
          />
        </div>
      </div>

      {/* Leyenda */}
      <p className="text-sm text-gray-500">Porcentaje de grasa corporal</p>
    </div>
  );
};

export default Grasa;
