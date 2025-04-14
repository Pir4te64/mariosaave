import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Importa los estilos predeterminados
import { FaBell } from "react-icons/fa";

import avatar from "@/assets/avatar.png";
import file from "@/assets/file.png";
import useProfileStore from "@/pages/Dashboard/Profile/useProfileStore";

const UserProfileSidebar = () => {
  // Estado para controlar la fecha seleccionada en el calendario
  const [date, setDate] = useState(new Date());
  // Obtén el perfil del estado global
  const profile = useProfileStore((state) => state.profile);

  // Define el nombre completo o fallback
  const fullName = profile
    ? `${profile.nombre} ${profile.apellido}`
    : "Usuario";
  // Extrae otros datos con un fallback adecuado
  const edad = profile ? profile.edad : "-";
  const altura = profile && profile.altura ? profile.altura.toFixed(2) : "-";
  const peso = profile && profile.peso ? profile.peso : "-";
  // Calcular IMC: peso / (altura * altura)
  const imc =
    profile && profile.altura && profile.peso
      ? (profile.peso / (profile.altura * profile.altura)).toFixed(1)
      : "-";

  return (
    <div className='w-full md:w-1/4 bg-[#F4F4F2] rounded-lg shadow p-4 flex flex-col h-full'>
      {/* Tarjeta de perfil */}
      <div className='flex flex-col items-center gap-4 bg-white p-4 rounded-md'>
        {/* Avatar del usuario */}
        <img
          src={avatar}
          alt='Foto del usuario'
          className='w-14 h-14 rounded-full object-cover'
        />
        <h3 className='text-lg font-semibold'>{fullName}</h3>
        <p className='text-sm text-gray-500'>
          {profile && profile.edad != null
            ? `${profile.edad} años`
            : "Edad no disponible"}
        </p>

        {/* Info básica: IMC, Altura, Peso */}
        <div className='flex-1 justify-center items-center flex flex-col gap-4 w-full'>
          <div className='flex gap-8 mt-2 text-sm justify-around items-center w-full'>
            <div className='flex flex-col items-center gap-1'>
              <span className='font-semibold'>IMC</span>
              <span className='text-green-500'>{imc}</span>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <span className='font-semibold'>Altura</span>
              <span>{altura}m</span>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <span className='font-semibold'>Peso</span>
              <span>{peso}kg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendario y próximos eventos */}
      <div className='flex-1 overflow-auto flex flex-col gap-4 mt-4'>
        {/* Calendario (no se modifica) */}
        <div className='p-2 rounded-md'>
          <Calendar
            onChange={setDate}
            value={date}
            className='border-none mx-auto bg-[#F4F4F2]'
          />
        </div>

        {/* Próximamente */}
        <div>
          <h4 className='text-md font-semibold mb-2'>Próximamente</h4>

          {/* Evento 1 */}
          <div className='text-sm mb-3 flex items-start gap-2'>
            <FaBell className='text-gray-500 mt-1 m-3' />
            <div>
              <p className='font-semibold'>Día de tren superior</p>
              <p className='text-gray-500'>9:00AM - 11:30AM</p>
            </div>
          </div>

          {/* Evento 2 */}
          <div className='text-sm flex items-start gap-2'>
            <FaBell className='text-gray-500 mt-1 m-3' />
            <div>
              <p className='font-semibold'>Guía de nutrición</p>
              <p className='text-gray-500'>11:30AM - 12:00PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón para descargar plan */}
      <button className='mt-4 bg-[#99A98F] text-white font-semibold rounded-md hover:bg-[#7e8a77] transition flex flex-col items-center py-3'>
        <img src={file} alt='Archivo' className='w-16 h-16 mb-1' />
        <span>Descargar plan nutricional</span>
      </button>
    </div>
  );
};

export default UserProfileSidebar;
