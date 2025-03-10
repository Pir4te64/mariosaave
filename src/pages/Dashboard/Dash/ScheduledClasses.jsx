import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const ScheduledClasses = () => {
  // Ejemplo de datos de las clases
  // Cada objeto puede tener:
  //  - name: nombre de la clase
  //  - progress: porcentaje de progreso
  //  - status: estado textual ("Asistió", "Falta", etc.)
  //  - color: color para el texto y la barra (opcional, si quieres personalizar por clase)
  //  - date: fecha (si aplica)
  const classesData = [
    {
      id: 1,
      name: "Clase #1",
      progress: 80,
      status: "Asistió",
      color: "#99A98F",
      date: null, // o "12/07/2025"
    },
    {
      id: 2,
      name: "Clase #2",
      progress: 40,
      status: "Falta",
      color: "#FF0000",
      date: null,
    },
    {
      id: 3,
      name: "Clase #3",
      progress: 100,
      status: "Completada",
      color: "#99A98F",
      date: "12/07/2025",
    },
    {
      id: 4,
      name: "Clase #4",
      progress: 25,
      status: "Pendiente",
      color: "#A0A0A0",
      date: "12/07/2025",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      {/* Encabezado */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-[#99A98F] flex items-center justify-center mr-3">
          <FaChalkboardTeacher className="text-white w-5 h-5" />
        </div>
        <h2 className="text-lg font-bold">Clases programadas</h2>
      </div>

      {/* Contenedor de las clases (4 columnas) */}
      <div className="flex justify-around items-start">
        {classesData.map((classItem) => (
          <div
            key={classItem.id}
            className="flex flex-col items-center w-1/4 px-2"
          >
            {/* Nombre de la clase */}
            <span className="font-semibold">{classItem.name}</span>

            {/* Estado (Asistió, Falta, etc.) */}
            <span className="font-medium" style={{ color: classItem.color }}>
              {classItem.status}
            </span>

            {/* Si existe fecha, la mostramos. (Opcional) */}
            {classItem.date && (
              <span className="text-gray-500 text-sm">{classItem.date}</span>
            )}

            {/* Barra de progreso */}
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div
                className="h-2 rounded"
                style={{
                  width: `${classItem.progress}%`,
                  backgroundColor: classItem.color,
                }}
              />
            </div>
            <span className="text-sm text-gray-600 mt-1 inline-block">
              {classItem.progress}% completado
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledClasses;
