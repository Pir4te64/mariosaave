import React from "react";
import { GiFootprint } from "react-icons/gi";
import useProfileStore from "@/pages/Dashboard/Profile/useProfileStore";

const PesoCard = () => {
  const profile = useProfileStore((state) => state.profile);
  const pesoKg = profile?.peso ?? null;

  return (
    <div className="flex h-full flex-col items-center gap-4 rounded-2xl p-6 transition-transform hover:scale-[1.02]">
      {/* Cabecera con icono y título */}
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-gradient-to-br from-[#99A98F] to-[#99A98F] p-3">
          <GiFootprint className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Peso</h3>
      </div>

      {/* Valor principal */}
      <span className="text-4xl font-bold text-gray-800">
        {pesoKg !== null ? pesoKg : "N/A"}
      </span>

      {/* Unidad o fallback */}
      <p className="text-sm text-gray-500">
        {pesoKg !== null ? "kg" : "Peso no disponible"}
      </p>
    </div>
  );
};

export default PesoCard;
