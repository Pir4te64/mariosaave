import React from "react";
import moment from "moment";
import { X } from "lucide-react";
import { SiGooglemeet } from "react-icons/si";

const ModalInformacion = ({ event, onClose }) => {
  if (!event) return null;
  console.log("Evento en ModalInformacion:", event.calendarEventId);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm transition-opacity duration-300'>
      <div className='relative bg-white w-full max-w-md mx-auto rounded-2xl shadow-xl overflow-hidden transform transition-all'>
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className='absolute top-3 right-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors focus:outline-none'
          aria-label='Cerrar modal'>
          <X size={20} />
        </button>
        <div className='p-6 space-y-5'>
          {/* Título */}
          <h2 className='text-2xl font-bold text-gray-800'>{event.title}</h2>
          {/* Fechas */}
          <div className='space-y-1'>
            <div className='flex items-center'>
              <span className='font-medium text-gray-600'>Inicio:</span>
              <span className='ml-3 text-gray-700'>
                {moment(event.start).format("DD MMM YYYY, h:mm A")}
              </span>
            </div>
            <div className='flex items-center'>
              <span className='font-medium text-gray-600'>Fin:</span>
              <span className='ml-3 text-gray-700'>
                {moment(event.end).format("DD MMM YYYY, h:mm A")}
              </span>
            </div>
          </div>
          {/* Estado */}
          <div className='flex items-center'>
            <span className='font-medium text-gray-600'>Estado:</span>
            <span className='ml-3 text-gray-700'>{event.estado}</span>
          </div>
          {/* Nivel de experiencia */}
          <div className='flex items-center'>
            <span className='font-medium text-gray-600'>
              Nivel de experiencia:
            </span>
            <span className='ml-3 text-gray-700'>
              {event.nivel_experiencia}
            </span>
          </div>
          {/* Objetivo del entrenamiento */}
          <div className='flex items-center'>
            <span className='font-medium text-gray-600'>
              Objetivo del entrenamiento:
            </span>
            <span className='ml-3 text-gray-700'>
              {event.objetivo_entrenamiento}
            </span>
          </div>
          {/* Condiciones médicas */}
          <div className='flex items-center'>
            <span className='font-medium text-gray-600'>
              Condiciones médicas:
            </span>
            <span className='ml-3 text-gray-700'>
              {event.condiciones_medicas}
            </span>
          </div>
          {/* Enlace de evento */}
          <div className='flex items-center space-x-2'>
            <span className='font-medium text-gray-600'>Enlace de evento:</span>
            {event.calendarEventId &&
            event.calendarEventId.startsWith("http") ? (
              <a
                href={event.calendarEventId}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center p-3 rounded-full bg-blue-50 border border-blue-200 hover:bg-blue-500 hover:border-blue-500 transition-colors'
                title='Ir a Google Meet'>
                <SiGooglemeet
                  size={24}
                  className='text-blue-600 hover:text-white transition-colors'
                />
              </a>
            ) : (
              <span className='text-gray-700'>{event.calendarEventId}</span>
            )}
          </div>
          {/* Profesor */}
          <div className='flex items-center'>
            <span className='font-medium text-gray-600'>Profesor:</span>
            <span className='ml-3 text-gray-700'>
              {event.profesor?.perfil?.nombre}{" "}
              {event.profesor?.perfil?.apellido}
            </span>
          </div>
          {/* Alumno */}
          <div className='flex items-center'>
            <span className='font-medium text-gray-600'>Alumno:</span>
            <span className='ml-3 text-gray-700'>
              {event.alumno?.perfil?.nombre} {event.alumno?.perfil?.apellido}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInformacion;
