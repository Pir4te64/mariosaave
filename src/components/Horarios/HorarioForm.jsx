// src/components/Horarios/HorarioForm.jsx
import React from "react";

const HorarioForm = ({
  newHorario,
  handleChange,
  handleTimeChange,
  handleSubmit,
  hours,
  minutes,
}) => {
  // Fecha mínima hoy en local YYYY-MM-DD
  const getTodayLocal = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const today = getTodayLocal();

  // parseHour/minute de "HH:MM"
  const parseHour = (str) => (str || "00:00").split(":")[0];
  const parseMinute = (str) => (str || "00:00").split(":")[1];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Agregar Horario</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Hora Inicio */}
          <div>
            <label
              htmlFor="fecha_inicio_hour"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Hora Inicio:
            </label>
            <div className="flex space-x-2">
              <select
                id="fecha_inicio_hour"
                value={parseHour(newHorario.fecha_inicio)}
                onChange={(e) =>
                  handleTimeChange("fecha_inicio", "hour", e.target.value)
                }
                className="p-2 border border-gray-300 rounded-md w-full"
              >
                {hours.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
              <select
                id="fecha_inicio_minute"
                value={parseMinute(newHorario.fecha_inicio)}
                onChange={(e) =>
                  handleTimeChange("fecha_inicio", "minute", e.target.value)
                }
                className="p-2 border border-gray-300 rounded-md w-full"
              >
                {minutes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Hora Fin */}
          <div>
            <label
              htmlFor="fecha_fin_hour"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Hora Fin:
            </label>
            <div className="flex space-x-2">
              <select
                id="fecha_fin_hour"
                value={parseHour(newHorario.fecha_fin)}
                onChange={(e) =>
                  handleTimeChange("fecha_fin", "hour", e.target.value)
                }
                className="p-2 border border-gray-300 rounded-md w-full"
              >
                {hours.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
              <select
                id="fecha_fin_minute"
                value={parseMinute(newHorario.fecha_fin)}
                onChange={(e) =>
                  handleTimeChange("fecha_fin", "minute", e.target.value)
                }
                className="p-2 border border-gray-300 rounded-md w-full"
              >
                {minutes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Fecha */}
        <div>
          <label
            htmlFor="fecha"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Fecha:
          </label>
          <input
            id="fecha"
            type="date"
            name="fecha"
            value={newHorario.fecha}
            onChange={handleChange}
            min={today}
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        {/* Activo */}
        <div className="flex items-center">
          <input
            id="isActive"
            type="checkbox"
            name="isActive"
            checked={newHorario.isActive}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="isActive"
            className="ml-2 block text-sm text-gray-900"
          >
            Bloquear Horario
          </label>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-greenmusgo text-white rounded-md hover:bg-greenmusgo/80"
        >
          Agregar Horario
        </button>
      </form>
    </div>
  );
};

export default HorarioForm;
