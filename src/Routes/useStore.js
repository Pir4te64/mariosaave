import { create } from "zustand";

const useStoreLogin = create((set) => ({
  // Estado para autenticación del usuario
  isAuthenticated: true,

  // Cambiar el estado de autenticación
  setAuthenticated: (status) => set({ isAuthenticated: status }),

  // Ejemplo de estado para manejar un contador (puedes reemplazarlo con cualquier estado que necesites)
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStoreLogin;
