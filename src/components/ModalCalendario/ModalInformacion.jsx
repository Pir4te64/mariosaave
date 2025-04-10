import React from "react";
import moment from "moment";
import { X } from "lucide-react";

const ModalInformacion = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
      <div className='relative bg-white w-full max-w-md mx-auto rounded-lg shadow-xl overflow-hidden transform transition-all'>
        {/* Botón de cierre en la esquina superior derecha */}
        <button
          onClick={onClose}
          className='absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900'>
          <X size={20} />
        </button>
        <div className='p-6'>
          {/* Título: Summary */}
          <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
            {event.title}
          </h2>
          <div className='mb-3'>
            <span className='font-medium text-gray-600'>Inicio:</span>
            <span className='ml-2 text-gray-700'>
              {moment(event.start).format("DD MMM YYYY, h:mm A")}
            </span>
          </div>
          <div className='mb-3'>
            <span className='font-medium text-gray-600'>Fin:</span>
            <span className='ml-2 text-gray-700'>
              {moment(event.end).format("DD MMM YYYY, h:mm A")}
            </span>
          </div>
          {event.type && (
            <div className='mb-3'>
              <span className='font-medium text-gray-600'>Tipo:</span>
              <span className='ml-2 text-gray-700'>
                {event.type === "private" ? "Clase Privada" : "Clase Grupal"}
              </span>
            </div>
          )}
          {event.description && (
            <div className='mb-3'>
              <span className='font-medium text-gray-600'>Descripción:</span>
              <div
                className='ml-2 text-gray-700'
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
            </div>
          )}
          {event.hangoutLink &&
            event.conferenceData &&
            event.conferenceData.conferenceSolution &&
            event.conferenceData.conferenceSolution.iconUri && (
              <div className='mb-3 flex items-center justify-center'>
                <a
                  href={event.hangoutLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 border  border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-md transition-colors'>
                  <img
                    src={event.conferenceData.conferenceSolution.iconUri}
                    alt='Icono Google Meet'
                    className='h-6 w-6'
                  />
                  <span>Ir al evento</span>
                </a>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ModalInformacion;
