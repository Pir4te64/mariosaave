import React, { useState } from "react";
import useCalendarStore from "../store/calendarStore";

const ModalEntrenamiento = ({ setIsModalOpen }) => {
  // Accedemos al store para obtener el array de eventos y la función para actualizarlos
  const { events, setEvents } = useCalendarStore();

  // Estados locales para cada input del formulario
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [entrenador, setEntrenador] = useState("");
  const [condiciones, setCondiciones] = useState("");

  const handleGuardar = () => {
    // Validar que los campos obligatorios estén completos
    if (
      !fecha ||
      !hora ||
      !modalidad ||
      !objetivo ||
      !experiencia ||
      !entrenador
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const [year, month, day] = fecha.split("-");
    const [hour, minute] = hora.split(":");
    const startDate = new Date(year, month - 1, day, hour, minute);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
    const eventType =
      modalidad.toLowerCase() === "privada" ? "private" : "group";

    const newEvent = {
      title: `Clase ${modalidad} / ${entrenador}`,
      start: startDate,
      end: endDate,
      type: eventType,
      objetivo,
      experiencia,
      condiciones,
    };

    setEvents([...events, newEvent]);
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 justify-center items-center p-4">
      {/* Contenedor del modal con ancho responsivo y scroll vertical en caso de overflow */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Agendar entrenamiento
        </h2>

        {/* Grid responsive: 1 columna en mobile y 2 en pantallas mayores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Fecha *</label>
            <input
              type="date"
              className="w-full border rounded-lg p-2"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Hora *</label>
            <input
              type="time"
              className="w-full border rounded-lg p-2"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Modalidad *</label>
            <select
              className="w-full border rounded-lg p-2"
              value={modalidad}
              onChange={(e) => setModalidad(e.target.value)}
            >
              <option value="">Selecciona</option>
              <option value="privada">Privada</option>
              <option value="grupal">Grupal</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Objetivo del Entrenamiento *
            </label>
            <select
              className="w-full border rounded-lg p-2"
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
            >
              <option value="">Selecciona</option>
              <option value="fuerza">Fuerza</option>
              <option value="resistencia">Resistencia</option>
              <option value="flexibilidad">Flexibilidad</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Nivel de experiencia *
            </label>
            <select
              className="w-full border rounded-lg p-2"
              value={experiencia}
              onChange={(e) => setExperiencia(e.target.value)}
            >
              <option value="">Selecciona</option>
              <option value="principiante">Principiante</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Entrenador(a) *</label>
            <select
              className="w-full border rounded-lg p-2"
              value={entrenador}
              onChange={(e) => setEntrenador(e.target.value)}
            >
              <option value="">Selecciona</option>
              <option value="Lucas Perez">Lucas Perez</option>
              <option value="Mario">Mario</option>
            </select>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium">
              Condiciones médicas o lesiones relevantes
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              value={condiciones}
              onChange={(e) => setCondiciones(e.target.value)}
            />
          </div>
        </div>

        {/* Botones: se acomodan en columna en mobile y en fila en pantallas mayores */}
        <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200"
          >
            Cancelar
          </button>
          <button
            onClick={handleGuardar}
            className="px-4 py-2 bg-greenmusgo text-white rounded-lg hover:bg-softYellow hover:text-black"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEntrenamiento;
