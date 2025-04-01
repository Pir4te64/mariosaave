import React, { useState } from "react";
import axios from "axios";
import useCalendarStore from "../store/calendarStore";
import moment from "moment";
import { APIURL } from "../utils/api";
import Swal from "sweetalert2";

const ModalEntrenamiento = ({ setIsModalOpen }) => {
  const { events, setEvents } = useCalendarStore();

  // Estados para los campos requeridos
  const [summary, setSummary] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  // Fecha de hoy en formato YYYY-MM-DD para el atributo min
  const todayDate = moment().format("YYYY-MM-DD");

  const handleGuardar = async () => {
    // Validar campos obligatorios
    if (!summary || !fecha || !hora) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos obligatorios.",
      });
      return;
    }

    // Crear objeto Date a partir de la fecha y hora ingresadas
    const [year, month, day] = fecha.split("-");
    const [hourVal, minute] = hora.split(":");
    const startDate = new Date(year, month - 1, day, hourVal, minute);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Duración de 1 hora

    // Validar que la fecha seleccionada no sea anterior a hoy (se ignora la hora para la validación)
    const todayStart = moment().startOf("day");
    if (moment(startDate).isBefore(todayStart)) {
      Swal.fire({
        icon: "error",
        title: "Fecha inválida",
        text: "La fecha seleccionada no puede ser anterior a la fecha actual.",
      });
      return;
    }

    // Construir payload con formato ISO y offset
    const payload = {
      summary,
      startDateTime: moment(startDate).format("YYYY-MM-DDTHH:mm:ssZ"),
      endDateTime: moment(endDate).format("YYYY-MM-DDTHH:mm:ssZ"),
    };

    // Obtener el token del localStorage
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(APIURL.crearEvento, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Se asume que el endpoint devuelve un objeto con message y event
      if (response.data && response.data.event) {
        Swal.fire({
          icon: "success",
          title: "Evento creado",
          text: "El evento se ha creado correctamente.",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          setIsModalOpen(false);
        });
      } else {
        throw new Error("Respuesta no válida");
      }
    } catch (error) {
      console.error("Error al crear el evento:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al crear el evento",
      });
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex z-50 justify-center items-center p-4'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-xl max-h-[90vh] overflow-y-auto'>
        <h2 className='text-lg sm:text-xl font-semibold mb-4'>
          Agendar Evento
        </h2>
        <div className='grid grid-cols-1 gap-4'>
          <div>
            <label className='block text-sm font-medium'>Resumen *</label>
            <input
              type='text'
              className='w-full border rounded-lg p-2'
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder='Ingresa el resumen del evento'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Fecha *</label>
            <input
              type='date'
              className='w-full border rounded-lg p-2'
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              min={todayDate} // Impide seleccionar fechas anteriores
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Hora *</label>
            <input
              type='time'
              className='w-full border rounded-lg p-2'
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row justify-end gap-2 mt-4'>
          <button
            onClick={() => setIsModalOpen(false)}
            className='px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200'>
            Cancelar
          </button>
          <button
            onClick={handleGuardar}
            className='px-4 py-2 bg-greenmusgo text-white rounded-lg hover:bg-softYellow hover:text-black'>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEntrenamiento;
