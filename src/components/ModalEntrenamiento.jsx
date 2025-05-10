import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { APIURL } from "@/utils/api";
import Swal from "sweetalert2";

const ModalEntrenamiento = ({ setIsModalOpen, users }) => {
  // Estados para los campos requeridos
  const [nivelExperiencia, setNivelExperiencia] = useState("");
  const [objetivoEntrenamiento, setObjetivoEntrenamiento] = useState("");
  const [condicionesMedicas, setCondicionesMedicas] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  // Estados para profesores y profesor seleccionado
  const [profesores, setProfesores] = useState([]);
  const [selectedProfesorId, setSelectedProfesorId] = useState(null);

  // Fecha de hoy en formato YYYY-MM-DD para el atributo min
  const todayDate = moment().format("YYYY-MM-DD");

  // useEffect para obtener la lista de profesores
  useEffect(() => {
    const fetchProfesores = async () => {
      const token = sessionStorage.getItem("token");
      try {
        const response = await axios.get(`${APIURL.profesor}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (response.data) {
          setProfesores(response.data);
        }
      } catch (error) {
        console.error("Error al obtener profesores:", error);
      }
    };

    fetchProfesores();
  }, []);

  const handleGuardar = async () => {
    // Validar campos obligatorios, incluyendo profesor
    if (!fecha || !hora || selectedProfesorId === null) {
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

    // Obtener la zona horaria del navegador
    const timezoneOffset = -startDate.getTimezoneOffset();
    const timezoneHours = Math.floor(Math.abs(timezoneOffset) / 60);
    const timezoneMinutes = Math.abs(timezoneOffset) % 60;
    const timezoneSign = timezoneOffset >= 0 ? '+' : '-';
    const timezoneString = `${timezoneSign}${String(timezoneHours).padStart(2, '0')}:${String(timezoneMinutes).padStart(2, '0')}`;

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

    // Obtener el alumno_id del token decodificado almacenado en localStorage
    let alumno_id = null;
    const decodedTokenStr = sessionStorage.getItem("decodedToken");
    if (decodedTokenStr) {
      try {
        const decodedToken = JSON.parse(decodedTokenStr);
        alumno_id = decodedToken.id;
      } catch (error) {
        console.error("Error al parsear decodedToken:", error);
      }
    }
    const profesoruno = profesores.find(
      (prof) => prof.id === selectedProfesorId
    );
    const profe = `${profesoruno.perfil.nombre} `;

    // Construir payload con formato requerido y agregar profesor_id como número
    const payload = {
      nivel_experiencia: nivelExperiencia,
      objetivo_entrenamiento: objetivoEntrenamiento,
      condiciones_medicas: condicionesMedicas,
      fecha_inicio: moment(startDate).format("YYYY-MM-DDTHH:mm:ss") + timezoneString,
      fecha_fin: moment(endDate).format("YYYY-MM-DDTHH:mm:ss") + timezoneString,
      alumno_id,
      profesor_id: selectedProfesorId,
      summary: objetivoEntrenamiento + profe,
    };
    console.log("Payload:", payload);

    // Obtener el token del localStorage para la petición
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.post(APIURL.reservas, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Se asume que el endpoint devuelve un objeto con message y event
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Evento creado",
          text: "El evento se ha creado correctamente.",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          setIsModalOpen(false);
          window.location.reload();
        });
      } else {
        throw new Error("Respuesta no válida");
      }
    } catch (error) {
      console.error("Error al crear el evento:", error);

      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
      <div className='max-h-[90vh] w-full max-w-md overflow-y-auto rounded-lg bg-white p-6 shadow-lg sm:max-w-lg md:max-w-xl'>
        <h2 className='mb-4 text-lg font-semibold sm:text-xl'>
          Agendar Evento
        </h2>
        <div className='grid grid-cols-1 gap-4'>
          {/* Campo: Nivel de experiencia */}
          <div>
            <label className='block text-sm font-medium'>
              Nivel de experiencia (opcional)
            </label>
            <select
              className='w-full rounded-lg border p-2'
              value={nivelExperiencia}
              onChange={(e) => setNivelExperiencia(e.target.value)}>
              <option value=''>Selecciona un nivel</option>
              <option value='Principiante'>Principiante</option>
              <option value='Intermedio'>Intermedio</option>
              <option value='Avanzado'>Avanzado</option>
            </select>
          </div>

          {/* Campo: Objetivo del entrenamiento */}
          <div>
            <label className='block text-sm font-medium'>
              Objetivo del entrenamiento (opcional)
            </label>
            <select
              className='w-full rounded-lg border p-2'
              value={objetivoEntrenamiento}
              onChange={(e) => setObjetivoEntrenamiento(e.target.value)}>
              <option value=''>Selecciona un objetivo</option>
              <option value='Pérdida de peso'>Pérdida de peso</option>
              <option value='Ganancia de masa muscular'>
                Ganancia de masa muscular
              </option>
              <option value='Mejorar resistencia cardiovascular'>
                Mejorar resistencia cardiovascular
              </option>
              <option value='Tonificación y definición'>
                Tonificación y definición
              </option>
              <option value='Mantenimiento general'>
                Mantenimiento general
              </option>
              <option value='Mejorar fuerza y potencia'>
                Mejorar fuerza y potencia
              </option>
              <option value='Rehabilitación o recuperación'>
                Rehabilitación o recuperación
              </option>
              <option value='Preparación para competencia'>
                Preparación para competencia
              </option>
            </select>
          </div>

          {/* Campo: Condiciones médicas o lesiones relevantes */}
          <div>
            <label className='block text-sm font-medium'>
              Condiciones médicas o lesiones relevantes (opcional)
            </label>
            <select
              className='w-full rounded-lg border p-2'
              value={condicionesMedicas}
              onChange={(e) => setCondicionesMedicas(e.target.value)}>
              <option value=''>Selecciona una condición</option>
              <option value='Hipertensión'>Hipertensión</option>
              <option value='Diabetes'>Diabetes</option>
              <option value='Asma'>Asma</option>
              <option value='Problemas cardíacos'>Problemas cardíacos</option>
              <option value='Lesiones en rodilla'>Lesiones en rodilla</option>
              <option value='Lesiones de espalda (lumbalgia, hernias)'>
                Lesiones de espalda (lumbalgia, hernias)
              </option>
              <option value='Lesiones de hombro o codo'>
                Lesiones de hombro o codo
              </option>
              <option value='Cirugías recientes'>Cirugías recientes</option>
            </select>
          </div>

          {/* Campo: Profesores */}
          <div>
            <label className='block text-sm font-medium'>Profesores *</label>
            <select
              className='w-full rounded-lg border p-2'
              value={selectedProfesorId || ""}
              onChange={(e) => setSelectedProfesorId(Number(e.target.value))}>
              <option value=''>Selecciona un profesor</option>
              {profesores.map((prof) => (
                <option key={prof.id} value={prof.id}>
                  {prof.perfil.nombre} {prof.perfil.apellido}
                </option>
              ))}
            </select>
          </div>

          {/* Campo: Fecha */}
          <div>
            <label className='block text-sm font-medium'>Fecha *</label>
            <input
              type='date'
              className='w-full rounded-lg border p-2'
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              min={todayDate}
            />
          </div>

          {/* Campo: Hora */}
          <div>
            <label className='block text-sm font-medium'>Hora *</label>
            <div className="flex gap-2">
              <select
                className='w-1/2 rounded-lg border p-2'
                value={hora.split(':')[0] || '00'}
                onChange={(e) => {
                  const minutes = hora.split(':')[1] || '00';
                  setHora(`${e.target.value}:${minutes}`);
                }}
              >
                {Array.from({ length: 24 }, (_, i) => 
                  String(i).padStart(2, '0')
                ).map(hour => (
                  <option key={hour} value={hour}>{hour}</option>
                ))}
              </select>
              <select
                className='w-1/2 rounded-lg border p-2'
                value={hora.split(':')[1] || '00'}
                onChange={(e) => {
                  const hours = hora.split(':')[0] || '00';
                  setHora(`${hours}:${e.target.value}`);
                }}
              >
                <option value="00">00</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className='mt-4 flex flex-col justify-end gap-2 sm:flex-row'>
          <button
            onClick={() => setIsModalOpen(false)}
            className='rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-200'>
            Cancelar
          </button>
          <button
            onClick={handleGuardar}
            className='rounded-lg bg-greenmusgo px-4 py-2 text-white hover:bg-softYellow hover:text-black'>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEntrenamiento;
