import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import avatar from "@/assets/avatar.png";
import file from "@/assets/file.png";
import useProfileStore from "@/pages/Dashboard/Profile/useProfileStore";

const UserProfileSidebar = () => {
  const [date, setDate] = useState(new Date());
  const profile = useProfileStore((state) => state.profile);

  const fullName = profile
    ? `${profile.nombre} ${profile.apellido}`
    : "Usuario";
  const edad = profile?.edad ?? "-";
  const altura = profile?.altura?.toFixed(2) ?? "-";
  const peso = profile?.peso ?? "-";
  const imc = profile?.altura && profile?.peso
    ? (profile.peso / (profile.altura ** 2)).toFixed(1)
    : "-";

  return (
    <div className="flex w-full flex-col space-y-6 rounded-xl bg-gray-50 p-6 shadow-lg">
      {/* Perfil */}
      <div className="flex flex-col items-center gap-3 rounded-xl bg-white p-6 shadow-md">
        <img
          src={avatar}
          alt="Avatar"
          className="h-16 w-16 rounded-full border-2 border-gray-200 object-cover"
        />
        <h3 className="text-xl font-bold text-gray-800">{fullName}</h3>
        <p className="text-sm text-gray-500">
          {edad !== "-" ? `${edad} años` : "Edad no disponible"}
        </p>

        <div className="mt-4 flex w-full justify-between text-center text-sm">
          <div>
            <span className="block font-semibold text-gray-700">IMC</span>
            <span className="mt-1 block text-green-600">{imc}</span>
          </div>
          <div>
            <span className="block font-semibold text-gray-700">Altura</span>
            <span className="mt-1 block text-gray-800">{altura} m</span>
          </div>
          <div>
            <span className="block font-semibold text-gray-700">Peso</span>
            <span className="mt-1 block text-gray-800">{peso} kg</span>
          </div>
        </div>
      </div>

      {/* Calendario */}
      <div className="rounded-xl bg-white p-4 shadow-md">
        <Calendar
          onChange={setDate}
          value={date}
          className="mx-auto rounded-lg border-none"
        />
      </div>

   

      {/* Botón descargar plan */}
      <button
        onClick={() => window.open('https://api.whatsapp.com/send?phone=573145779511&text=Hola%20Equipo%20Mario%20Saave%F0%9F%92%AA%0A%0AMi%20nombre%20es%20' + encodeURIComponent(fullName) + '%0A%0A%C2%A1Me%20gustar%C3%ADa%20consultar%20mi%20plan%20nutricional%20personalizado!', '_blank')}
        className='mt-4 flex flex-col items-center rounded-md bg-[#99A98F] py-3 font-semibold text-white transition hover:bg-[#7e8a77]'>
        <img src={file} alt='Archivo' className='mb-1 h-16 w-16' />
        <span>Descargar plan nutricional</span>
      </button>
    </div>
  );
};

export default UserProfileSidebar;
