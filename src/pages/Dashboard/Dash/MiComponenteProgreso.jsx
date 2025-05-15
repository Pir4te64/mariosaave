import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import apuntandoImg from '@/assets/Apuntando.png';

const MiComponenteProgreso = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex h-full w-full items-center justify-between rounded-2xl bg-white p-6 text-left shadow-md transition-shadow hover:shadow-xl focus:outline-none"
    >
      {/* Degradado de hover */}
      <div
        className="absolute -inset-px rounded-2xl bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-20"
      />

      {/* Columna de texto */}
      <div className="z-10 flex-1 pr-4">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          ¿Quieres ver tu progreso y cuántas clases te faltan?
        </h2>
        <a
          href="https://api.whatsapp.com/send?phone=573145779511&text=Hola%20Equipo%20Mario%20Saave%F0%9F%92%AA%0A%0A%C2%A1Me%20gustar%C3%ADa%20consultar%20mi%20progreso%20y%20clases%20restantes!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-600"
        >
          <FaWhatsapp className="text-xl" />
          Atención personalizada
        </a>
      </div>

      {/* Columna de imagen con overlay de degradado */}
      <div className="relative z-10 flex flex-1 items-center justify-center overflow-hidden">
        <img
          src={apuntandoImg}
          alt="Apuntando"
          className="h-full w-auto object-contain transition-transform"
        />
        {/* Gradiente inferior: blanco → transparente */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white to-transparent"
        />
      </div>
    </button>
  );
};

export default MiComponenteProgreso;
