import React from "react";
import { GiFootprint } from "react-icons/gi";
import useProfileStore from "@/pages/Dashboard/Profile/useProfileStore"; // Ajusta la ruta según tu estructura

const BodyMeasurements = () => {
  // Obtén el perfil desde el estado global
  const profile = useProfileStore((state) => state.profile);

  // Extrae las medidas con fallback
  const cintura = profile ? profile.cintura : "N/A";
  const pecho = profile ? profile.pecho : "N/A";
  const brazos = profile ? profile.brazos : "N/A";
  const piernas = profile ? profile.piernas : "N/A";
  const muslo = profile ? profile.muslo : "N/A";
  const cadera = profile ? profile.cadera : "N/A";
  const cuello = profile ? profile.cuello : "N/A";

  return (
    <div className='bg-white rounded-md shadow-lg p-4'>
      {/* Encabezado con ícono y título */}
      <div className='flex items-center mb-4'>
        <div className='w-10 h-10 rounded-full bg-[#99A98F] flex items-center justify-center mr-3'>
          <GiFootprint className='text-white w-5 h-5' />
        </div>
        <h2 className='text-lg font-bold'>Medidas corporales</h2>
      </div>

      {/* Lista de medidas en filas */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between border-b pb-1'>
          <span className='font-semibold'>Cintura</span>
          <span>{cintura} cm</span>
        </div>
        <div className='flex justify-between border-b pb-1'>
          <span className='font-semibold'>Pecho</span>
          <span>{pecho} cm</span>
        </div>
        <div className='flex justify-between border-b pb-1'>
          <span className='font-semibold'>Brazos</span>
          <span>{brazos} cm</span>
        </div>
        <div className='flex justify-between border-b pb-1'>
          <span className='font-semibold'>Piernas</span>
          <span>{piernas} cm</span>
        </div>
        <div className='flex justify-between border-b pb-1'>
          <span className='font-semibold'>Muslo</span>
          <span>{muslo} cm</span>
        </div>
        <div className='flex justify-between border-b pb-1'>
          <span className='font-semibold'>Cadera</span>
          <span>{cadera} cm</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-semibold'>Cuello</span>
          <span>{cuello} cm</span>
        </div>
      </div>
    </div>
  );
};

export default BodyMeasurements;
