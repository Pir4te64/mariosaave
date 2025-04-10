// store/calendarStore.js
import { create } from "zustand";
import axios from "axios";
import { APIURL } from "../utils/api";

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
      const response = await axios.get(APIURL.obtenerEventos, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data && response.data.events) {
        const transformedEvents = response.data.events.map((event) => ({
          title: event.summary,
          start: new Date(event.start.dateTime || event.start.date),
          end: new Date(event.end.dateTime || event.end.date),
          id: event.id,
          type: event.eventType || "default",
          description: event.description || "",
          htmlLink: event.htmlLink || "",
          hangoutLink: event.hangoutLink || "",
          conferenceData: event.conferenceData || {},
          // Puedes agregar otros campos que necesites
        }));

        set({ events: transformedEvents });
      }
    } catch (error) {
      console.error("Error al obtener eventos:", error);
    }
  },

  // Nueva acción: obtener datos de usuario/rol/4
  fetchUserRol4: async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${APIURL}/usuario/rol/4`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        set({ userRolData: response.data });
      }
    } catch (error) {
      console.error("Error al obtener datos de usuario/rol/4:", error);
    }
  },
}));

export default useCalendarStore;
