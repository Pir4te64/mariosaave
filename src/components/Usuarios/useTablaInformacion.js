// useTablaInformacion.js
import { create } from "zustand";

const useTablaInformacion = create((set) => ({
  // Objeto para almacenar la información de cada usuario (key: índice, value: objeto con los datos)
  tabla: {},

  // Actualiza un campo específico del usuario
  updateUserField: (userIndex, field, value) =>
    set((state) => ({
      tabla: {
        ...state.tabla,
        [userIndex]: {
          ...(state.tabla[userIndex] || {}),
          [field]: value,
        },
      },
    })),

  // Permite establecer la data completa de un usuario
  setUserData: (userIndex, data) =>
    set((state) => ({
      tabla: {
        ...state.tabla,
        [userIndex]: data,
      },
    })),

  // Función opcional para reiniciar la información
  resetTabla: () => set({ tabla: {} }),
}));

export default useTablaInformacion;
