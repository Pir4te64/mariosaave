import { create } from "zustand";
import axios from "axios";
import { APIURL } from "@/utils/api";

const today = new Date();

const useCalendarStore = create((set) => ({
  currentView: "week",
  events: [],
  date: today,
  isModalOpen: false,
  selectedEvent: null,
  userRolData: null, // Nueva propiedad para los datos de "usuario/rol/4"

  setCurrentView: (view) => set({ currentView: view }),
  setEvents: (events) => set({ events }),
  setDate: (date) => set({ date }),
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  setSelectedEvent: (event) => set({ selectedEvent: event }),

  // Acción para obtener y transformar los eventos
  fetchEvents: async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(APIURL.reservas, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        const eventsArray = response.data.events || response.data;
        const transformedEvents = eventsArray.map((event) => ({
          title: event.summary,
          start: new Date(event.fecha_inicio),
          end: new Date(event.fecha_fin),
          id: event.id,
          estado: event.estado,
          nivel_experiencia: event.nivel_experiencia,
          objetivo_entrenamiento: event.objetivo_entrenamiento,
          condiciones_medicas: event.condiciones_medicas,
          isActive: event.isActive,
          calendarEventId: event.google_meet_url,
          profesor: event.profesor,
          alumno: event.alumno,
        }));

        set({ events: transformedEvents });
      }
    } catch (error) {
      console.error("Error al obtener eventos:", error);
    }
  },
}));

export default useCalendarStore;