import React from "react";
import { GiFootprint } from "react-icons/gi";

const BodyMeasurements = () => {
  return (
    <div className="bg-white rounded-md shadow-lg p-4 items-center justify-center">
      {/* Encabezado con ícono y título */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-[#99A98F] flex items-center justify-center mr-3">
          <GiFootprint className="text-white w-5 h-5" />
        </div>
        <h2 className="text-lg font-bold">Medidas corporales</h2>
      </div>

      {/* Lista de medidas */}
      <div className="flex flex-wrap justify-between text-center">
        <div className="flex flex-col mb-2">
          <span className="font-semibold">Cintura</span>
          <span>102 cm</span>
        </div>
        <div className="flex flex-col mb-2">
          <span className="font-semibold">Pecho</span>
          <span>102 cm</span>
        </div>
        <div className="flex flex-col mb-2">
          <span className="font-semibold">Brazos</span>
          <span>102 cm</span>
        </div>
        <div className="flex flex-col mb-2">
          <span className="font-semibold">Piernas</span>
          <span>102 cm</span>
        </div>
        <div className="flex flex-col mb-2">
          <span className="font-semibold">Muslo</span>
          <span>102 cm</span>
        </div>
        <div className="flex flex-col mb-2">
          <span className="font-semibold">Cadera</span>
          <span>102 cm</span>
        </div>
        <div className="flex flex-col mb-2">
          <span className="font-semibold">Cuello</span>
          <span>102 cm</span>
        </div>
      </div>
    </div>
  );
};

export default BodyMeasurements;
