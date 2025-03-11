// store/calendarStore.js

import { create } from "zustand";

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

const initialEvents = [
  {
    title: "Clase privada / Lucas Perez",
    start: new Date(currentYear, currentMonth, 19, 13, 0),
    end: new Date(currentYear, currentMonth, 19, 14, 0),
    type: "private",
  },
  {
    title: "Clase privada / Mario",
    start: new Date(currentYear, currentMonth, 19, 14, 0),
    end: new Date(currentYear, currentMonth, 19, 15, 0),
    type: "private",
  },
  {
    title: "Clase grupal / 2 spots disponibles",
    start: new Date(currentYear, currentMonth, 19, 15, 0),
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
];

const useCalendarStore = create((set) => ({
  currentView: "week",
  events: initialEvents,
  date: today,
  isModalOpen: false,
  selectedEvent: null,
  setCurrentView: (view) => set({ currentView: view }),
  setEvents: (events) => set({ events }),
  setDate: (date) => set({ date }),
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  setSelectedEvent: (event) => set({ selectedEvent: event }),
}));

export default useCalendarStore;
