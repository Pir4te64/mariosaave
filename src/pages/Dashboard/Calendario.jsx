// Calendario.jsx
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ModalEntrenamiento from "../../components/ModalEntrenamiento";
import ModalInformacion from "../../components/ModalInformacion";
import useCalendarStore from "../../store/calendarStore";

moment.locale("es");
const localizer = momentLocalizer(moment);

const Calendario = () => {
  const today = new Date();

  // Extraemos los estados y funciones desde el store
  const currentView = useCalendarStore((state) => state.currentView);
  const setCurrentView = useCalendarStore((state) => state.setCurrentView);
  const events = useCalendarStore((state) => state.events);
  const date = useCalendarStore((state) => state.date);
  const setDate = useCalendarStore((state) => state.setDate);
  const isModalOpen = useCalendarStore((state) => state.isModalOpen);
  const setIsModalOpen = useCalendarStore((state) => state.setIsModalOpen);
  const selectedEvent = useCalendarStore((state) => state.selectedEvent);
  const setSelectedEvent = useCalendarStore((state) => state.setSelectedEvent);

  const eventPropGetter = (event) => {
    const backgroundColor = event.type === "private" ? "#F8D7DA" : "#D4EDDA";
    const textColor = event.type === "private" ? "#721c24" : "#155724";

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
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center w-full">
      {/* Botón para abrir el modal de agendar */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-6 py-3 bg-greenmusgo text-white rounded-md shadow-md hover:bg-softYellow hover:text-black"
      >
        Agendar Entrenamiento
      </button>

      {/* Contenedor del calendario */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-full sm:max-w-6xl">
        <Calendar
          localizer={localizer}
          events={events}
          date={date}
          view={currentView}
          onView={(newView) => setCurrentView(newView)}
          onNavigate={(newDate) => setDate(newDate)}
          views={["week", "day", "month"]}
          culture="es"
          step={60}
          timeslots={1}
          min={new Date(today.getFullYear(), today.getMonth(), 1, 13, 0)}
          max={new Date(today.getFullYear(), today.getMonth(), 1, 20, 0)}
          eventPropGetter={eventPropGetter}
          onSelectEvent={(event) => setSelectedEvent(event)}
          style={{ height: "calc(100vh - 200px)" }}
        />
      </div>

      {/* Modal de evento seleccionado */}
      {selectedEvent && (
        <ModalInformacion
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {/* Modal para agendar nuevo evento */}
      {isModalOpen && <ModalEntrenamiento setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Calendario;
