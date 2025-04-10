import React from "react";
import laptopImg from "@/assets/dash.png";
import useProfileStore from "@/pages/Dashboard/Profile/useProfileStore";

const GreetingCard = () => {
  // Obtén el perfil del estado global
  const profile = useProfileStore((state) => state.profile);
  // Define un nombre completo con fallback a un valor por defecto
  const fullName = profile
    ? `${profile.nombre} ${profile.apellido}`
    : "Usuario";

  return (
    <div className='w-full h-full bg-[#99A98F] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between shadow-md'>
      {/* Texto de saludo */}
      <div className='text-left mb-4 md:mb-0 md:mr-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Hola {fullName},</h2>
        <p className='text-gray-700 mt-1'>
          ¡Que tengas un excelente día y no olvides cuidar tu salud!
        </p>
      </div>
      <div className='flex-shrink-0'>
        <img
          src={laptopImg}
          alt='Laptop with plant'
          className='h-20 md:h-24 object-contain'
        />
      </div>
    </div>
  );
};

export default GreetingCard;
