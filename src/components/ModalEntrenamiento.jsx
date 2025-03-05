import React from "react";

const ModalEntrenamiento = ({ setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg sm:max-w-4xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Agendar entrenamiento
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Fecha *</label>
            <input type="date" className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Hora *</label>
            <input type="time" className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Modalidad *</label>
            <select className="w-full border rounded-lg p-2">
              <option>Selecciona</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Objetivo del Entrenamiento *
            </label>
            <select className="w-full border rounded-lg p-2">
              <option>Selecciona</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Nivel de experiencia *
            </label>
            <select className="w-full border rounded-lg p-2">
              <option>Selecciona</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Entrenador(a) *</label>
            <select className="w-full border rounded-lg p-2">
              <option>Selecciona</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium">
              Condiciones médicas o lesiones relevantes
            </label>
            <input type="text" className="w-full border rounded-lg p-2" />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200"
          >
            Cancelar
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEntrenamiento;
