import { create } from "zustand";

const useStoreLogin = create((set) => ({
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true", // Obtener el estado de localStorage
  setIsAuthenticated: (status) => {
    set({ isAuthenticated: status });
    localStorage.setItem("isAuthenticated", status); // Guardar el estado en localStorage
  },
  logout: () => set({ isAuthenticated: false }),
  login: () => set({ isAuthenticated: true }),
}));

export default useStoreLogin;
