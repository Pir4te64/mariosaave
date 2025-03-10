import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registro de componentes requeridos por chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityChart = () => {
  // Ejemplo: manejo del estado para seleccionar el mes
  const [selectedMonth, setSelectedMonth] = useState("Noviembre");

  // Datos de ejemplo para el gráfico
  const data = {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "Calorías",
        data: [10, 20, 30, 40, 35, 25, 50, 45, 30, 40, 20, 15],
        backgroundColor: "#99A98F", // Color para la primera serie
      },
      {
        label: "Calorías",
        data: [15, 10, 25, 35, 40, 45, 30, 20, 25, 15, 35, 40],
        backgroundColor: "#6ECBD3", // Color para la segunda serie
      },
      {
        label: "Calorías",
        data: [5, 15, 20, 10, 25, 30, 40, 35, 45, 10, 25, 30],
        backgroundColor: "#A0A0A0", // Tercera serie, cambia según tu diseño
      },
    ],
  };

  // Opciones de configuración del gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false, // Si quieres un título en el gráfico, cámbialo a true
        text: "Actividad",
      },
    },
    // Ejemplo de configuración para el eje Y
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      {/* Encabezado */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">Actividad</h2>
        <div>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {/* Opciones de ejemplo para los meses */}
            <option value="Enero">Enero</option>
            <option value="Febrero">Febrero</option>
            <option value="Marzo">Marzo</option>
            <option value="Abril">Abril</option>
            <option value="Mayo">Mayo</option>
            <option value="Junio">Junio</option>
            <option value="Julio">Julio</option>
            <option value="Agosto">Agosto</option>
            <option value="Septiembre">Septiembre</option>
            <option value="Octubre">Octubre</option>
            <option value="Noviembre">Noviembre</option>
            <option value="Diciembre">Diciembre</option>
          </select>
        </div>
      </div>

      {/* Gráfico de barras */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
