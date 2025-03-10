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
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-indexado
  const [currentView, setCurrentView] = useState("week");

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
  const [date, setDate] = useState(today);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventPropGetter = (event) => {
    let backgroundColor = event.type === "private" ? "#F8D7DA" : "#D4EDDA";
    let textColor = event.type === "private" ? "#721c24" : "#155724";

    return {
      style: {
        backgroundColor,
        color: textColor,
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "4px",
        cursor: "pointer",
      },
    };
  };

  return (
    <div className='min-h-screen p-6 bg-gray-100 flex flex-col items-center w-full'>
      {/* Botón para abrir el modal de agendar */}
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
          view={currentView}
          onView={(newView) => setCurrentView(newView)}
          onNavigate={(newDate) => setDate(newDate)}
          views={["week", "day", "month"]}
          culture='es'
          step={60}
          timeslots={1}
          min={new Date(currentYear, currentMonth, 1, 13, 0)}
          max={new Date(currentYear, currentMonth, 1, 20, 0)}
          eventPropGetter={eventPropGetter}
          onSelectEvent={(event) => setSelectedEvent(event)} // 👈 Evento clickeado
          style={{ height: "calc(100vh - 200px)" }}
        />
      </div>

      {/* Modal de evento seleccionado */}
      {selectedEvent && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
            <h2 className='text-lg font-bold mb-2'>{selectedEvent.title}</h2>
            <p>
              <strong>Inicio:</strong>{" "}
              {moment(selectedEvent.start).format("DD MMM YYYY, h:mm A")}
            </p>
            <p>
              <strong>Fin:</strong>{" "}
              {moment(selectedEvent.end).format("DD MMM YYYY, h:mm A")}
            </p>
            <p>
              <strong>Tipo:</strong>{" "}
              {selectedEvent.type === "private"
                ? "Clase Privada"
                : "Clase Grupal"}
            </p>
            <button
              onClick={() => setSelectedEvent(null)}
              className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal para agendar nuevo evento */}
      {isModalOpen && <ModalEntrenamiento setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Calendario;
