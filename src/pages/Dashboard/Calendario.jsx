import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es"; // Para que los días/meses salgan en español
import "react-big-calendar/lib/css/react-big-calendar.css";
import ModalEntrenamiento from "../../components/ModalEntrenamiento";

// Configura moment en español
moment.locale("es");
const localizer = momentLocalizer(moment);

const Calendario = () => {
  // Obtiene la fecha de hoy y extrae el año y mes actual
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-indexado
  const [currentView, setCurrentView] = useState("week");
  // Define los eventos usando el año y mes actuales
  const [events, setEvents] = useState([
    {
      title: "Clase privada / Lucas Perez",
      start: new Date(currentYear, currentMonth, 19, 13, 0), // 19 del mes actual, 1:00 PM
      end: new Date(currentYear, currentMonth, 19, 14, 0),
      type: "private",
    },
    {
      title: "Clase privada / Mario",
      start: new Date(currentYear, currentMonth, 19, 14, 0), // 19 del mes actual, 2:00 PM
      end: new Date(currentYear, currentMonth, 19, 15, 0),
      type: "private",
    },
    {
      title: "Clase grupal / 2 spots disponibles",
      start: new Date(currentYear, currentMonth, 19, 15, 0), // 19 del mes actual, 3:00 PM
      end: new Date(currentYear, currentMonth, 19, 16, 0),
      type: "group",
    },
    {
      title: "Clase privada / Lucas Perez",
      start: new Date(currentYear, currentMonth, 20, 13, 0),
      end: new Date(currentYear, currentMonth, 20, 14, 0),
      type: "private",
    },
    {
      title: "Clase grupal / 2 spots disponibles",
      start: new Date(currentYear, currentMonth, 20, 15, 0),
      end: new Date(currentYear, currentMonth, 20, 16, 0),
      type: "group",
    },
    {
      title: "Clase privada / Lucas Perez",
      start: new Date(currentYear, currentMonth, 21, 13, 0),
      end: new Date(currentYear, currentMonth, 21, 14, 0),
      type: "private",
    },
    {
      title: "Clase privada / Mario",
      start: new Date(currentYear, currentMonth, 21, 14, 0),
      end: new Date(currentYear, currentMonth, 21, 15, 0),
      type: "private",
    },
    {
      title: "Clase grupal / 2 spots disponibles",
      start: new Date(currentYear, currentMonth, 21, 15, 0),
      end: new Date(currentYear, currentMonth, 21, 16, 0),
      type: "group",
    },
  ]);

  // Inicia el calendario en la fecha actual
  const [date, setDate] = useState(today);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para asignar estilos según el tipo de evento
  const eventPropGetter = (event, start, end, isSelected) => {
    let backgroundColor = "#ffffff"; // valor por defecto
    let textColor = "#000000";

    switch (event.type) {
      case "private":
        backgroundColor = "#F8D7DA";
        textColor = "#721c24";
        break;
      case "group":
        backgroundColor = "#D4EDDA";
        textColor = "#155724";
        break;
      default:
        backgroundColor = "#E2E3E5";
        textColor = "#000";
        break;
    }

    return {
      style: {
        backgroundColor,
        color: textColor,
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "4px",
      },
    };
  };

  return (
    <div className='min-h-screen p-6 bg-gray-100 flex flex-col items-center w-full'>
      {/* Botón para abrir el modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className='mb-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600'>
        Agendar Entrenamiento
      </button>

      {/* Contenedor del calendario */}
      <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-full sm:max-w-6xl'>
        <Calendar
          localizer={localizer}
          events={events}
          date={date}
          view={currentView} // Controla la vista
          onView={(newView) => setCurrentView(newView)} // Permite cambiar la vista
          onNavigate={(newDate) => setDate(newDate)}
          views={["week", "day", "month"]}
          culture='es'
          step={60}
          timeslots={1}
          min={new Date(currentYear, currentMonth, 1, 13, 0)}
          max={new Date(currentYear, currentMonth, 1, 20, 0)}
          eventPropGetter={eventPropGetter}
          style={{ height: "calc(100vh - 200px)" }}
        />
      </div>

      {/* Modal */}
      {isModalOpen && <ModalEntrenamiento setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Calendario;
