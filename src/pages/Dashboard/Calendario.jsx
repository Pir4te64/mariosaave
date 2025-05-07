import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ModalEntrenamiento from "@/components/ModalEntrenamiento";
import ModalInformacion from "@/components/ModalCalendario/ModalInformacion";
import useCalendarStore from "@/store/calendarStore";

moment.locale("es");
const localizer = momentLocalizer(moment);

const Calendario = () => {
  const today = new Date();

  const currentView = useCalendarStore((state) => state.currentView);
  const setCurrentView = useCalendarStore((state) => state.setCurrentView);
  const events = useCalendarStore((state) => state.events);
  const setDate = useCalendarStore((state) => state.setDate);
  const date = useCalendarStore((state) => state.date);
  const isModalOpen = useCalendarStore((state) => state.isModalOpen);
  const setIsModalOpen = useCalendarStore((state) => state.setIsModalOpen);
  const selectedEvent = useCalendarStore((state) => state.selectedEvent);
  const setSelectedEvent = useCalendarStore((state) => state.setSelectedEvent);
  const fetchEvents = useCalendarStore((state) => state.fetchEvents);
  console.log(events);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const eventPropGetter = (event) => {
    if (event.estado === "pendiente") {
      return {
        style: {
          backgroundColor: "#fff3cd",
          color: "#856404",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "4px",
          cursor: "pointer",
        },
      };
    }
    if (event.estado === "cancelado") {
      return {
        style: {
          backgroundColor: "#f8d7da",
          color: "#721c24",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "4px",
          cursor: "pointer",
        },
      };
    }
    return {
      style: {
        backgroundColor: "#d4edda",
        color: "#155724",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "4px",
        cursor: "pointer",
      },
    };
  };

  return (
    <div className='min-h-screen p-6 bg-gray-100 flex flex-col items-center w-full'>
      <button
        onClick={() => setIsModalOpen(true)}
        className='mb-4 px-6 py-3 bg-greenmusgo text-white rounded-md shadow-md hover:bg-softYellow hover:text-black'>
        Agendar Entrenamiento
      </button>

      <div className='w-full h-[80vh]'>
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
          // Ajustamos las horas mínimas y máximas para el día actual:
          min={
            new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate(),
              5,
              0
            )
          }
          max={
            new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate(),
              23,
              0
            )
          }
          eventPropGetter={eventPropGetter}
          onSelectEvent={(event) => setSelectedEvent(event)}
        />
      </div>

      {selectedEvent && (
        <ModalInformacion
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {isModalOpen && <ModalEntrenamiento setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Calendario;
