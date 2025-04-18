import React from "react";
import { GiFootprint } from "react-icons/gi";
import useProfileStore from "@/pages/Dashboard/Profile/useProfileStore"; // Ajusta la ruta según tu estructura

const PesoCard = () => {
  // Obtén el perfil desde el estado global
  const profile = useProfileStore((state) => state.profile);
  // Extrae el peso en kg, o usa un valor por defecto si no está disponible
  const pesoKg = profile && profile.peso ? profile.peso : "N/A";

  return (
    <div className='bg-white rounded-lg p-4 flex flex-col items-center justify-center gap-2 h-full'>
      {/* Fila con icono y label "Peso" */}
      <div className='flex items-center gap-2'>
        <div className='w-10 h-10 rounded-full bg-[#99A98F] flex items-center justify-center'>
          <GiFootprint className='text-white w-5 h-5' />
        </div>
        <h3 className='font-semibold text-lg'>Peso</h3>
      </div>
      {/* Texto debajo con el peso en kg */}
      <p className='text-gray-600 text-sm'>{`Peso en kg: ${pesoKg}`}</p>
    </div>
  );
};

export default PesoCard;
