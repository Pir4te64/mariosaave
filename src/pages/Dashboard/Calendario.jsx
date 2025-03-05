import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ModalEntrenamiento from "../../components/ModalEntrenamiento";

const localizer = momentLocalizer(moment);

const Calendario = () => {
  const [events, setEvents] = useState([
    {
      title: "Evento importante",
      start: new Date(2024, 2, 10, 10, 0),
      end: new Date(2024, 2, 10, 12, 0),
      allDay: false,
    },
    {
      title: "Reunión",
      start: new Date(2024, 2, 15, 14, 0),
      end: new Date(2024, 2, 15, 15, 0),
      allDay: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl font-semibold text-gray-800 mb-6">
        Calendario
      </h1>

      {/* Botón para abrir el modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
      >
        Agendar Entrenamiento
      </button>

      {/* Contenedor del calendario */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-full sm:max-w-4xl">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "calc(100vh - 200px)" }} // Ajusta la altura para pantallas pequeñas
          className="p-4"
        />
      </div>

      {/* Modal */}
      {isModalOpen && <ModalEntrenamiento setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Calendario;
