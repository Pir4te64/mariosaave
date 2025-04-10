import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "../../utils/api";
import { Edit2, Check, X } from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Reservas = () => {
  // Estado para almacenar la lista de reservas
  const [reservas, setReservas] = useState([]);
  // Estado para controlar la edición inline de la reserva
  const [editReservaId, setEditReservaId] = useState(null);
  const [editEstado, setEditEstado] = useState("");
  // Estado para almacenar si un details está abierto o cerrado
  const [openStates, setOpenStates] = useState({});

  // Se obtiene el token de localStorage o sessionStorage
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  // Función para obtener las reservas desde el endpoint
  const fetchReservas = () => {
    axios
      .get(APIURL.reservas, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("Datos recibidos de /reservas:", response.data);
        setReservas(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener reservas:", error);
      });
  };

  // Se consulta la lista de reservas al montar el componente
  useEffect(() => {
    fetchReservas();
  }, []);

  // Función para formatear la fecha a una cadena local legible
  const formatDateDisplay = (isoDate) => {
    const date = new Date(isoDate);
    date.setHours(date.getHours() + 3); // Add 3 hours
    return date.toLocaleString();
  };

  // Activa la edición inline de una reserva (solo el estado)
  const handleEditClick = (reserva) => {
    setEditReservaId(reserva.id);
    setEditEstado(reserva.estado);
  };

  // Cancela la edición inline
  const handleCancelEdit = () => {
    setEditReservaId(null);
    setEditEstado("");
  };

  // Actualiza la reserva cambiando solo el estado (en minúsculas)
  const handleUpdate = (id) => {
    const payload = { estado: editEstado.toLowerCase() };

    axios
      .put(`${APIURL.reservas}/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Vuelve a ejecutar el GET para obtener la lista actualizada
        fetchReservas();
        setEditReservaId(null);
        setEditEstado("");
      })
      .catch((error) => {
        console.error("Error actualizando reserva:", error);
      });
  };
  // Controla el estado open/collapsed de cada details
  const handleToggle = (e, id) => {
    setOpenStates((prev) => ({
      ...prev,
      [id]: e.target.open,
    }));
  };

  return (
    <div className='container mx-auto px-4 py-6'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>Reservas</h2>
      {reservas.length > 0 ? (
        <div className='flex flex-col gap-4'>
          {reservas.map((reserva) => (
            <details
              key={reserva.id}
              className='bg-white shadow-md rounded-lg'
              onToggle={(e) => handleToggle(e, reserva.id)}>
              <summary className='cursor-pointer px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center'>
                <div className='flex flex-col md:flex-row md:space-x-4 items-center'>
                  {/* Icono según el estado del details */}
                  {openStates[reserva.id] ? (
                    <FaMinus className='mr-2' />
                  ) : (
                    <FaPlus className='mr-2' />
                  )}
                  <span>
                    <strong>Inicio:</strong>{" "}
                    {formatDateDisplay(reserva.fecha_inicio)}
                  </span>
                  <span>
                    <strong>Fin:</strong> {formatDateDisplay(reserva.fecha_fin)}
                  </span>
                  <span className='capitalize'>
                    <strong>Estado:</strong>{" "}
                    {editReservaId === reserva.id ? (
                      <select
                        value={editEstado}
                        onChange={(e) => setEditEstado(e.target.value)}
                        className='border border-gray-300 rounded-md p-1'>
                        <option value='pendiente'>Pendiente</option>
                        <option value='confirmado'>Confirmado</option>
                        <option value='cancelado'>Cancelado</option>
                      </select>
                    ) : (
                      reserva.estado
                    )}
                  </span>
                </div>
                <div className='flex space-x-2 mt-2 md:mt-0'>
                  {editReservaId === reserva.id ? (
                    <>
                      <button
                        onClick={() => handleUpdate(reserva.id)}
                        title='Guardar'
                        className='p-1 bg-green-600 text-white rounded-md hover:bg-green-700'>
                        <Check size={18} />
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        title='Cancelar'
                        className='p-1 bg-gray-600 text-white rounded-md hover:bg-gray-700'>
                        <X size={18} />
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleEditClick(reserva)}
                      title='Editar'
                      className='p-1 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
                      <Edit2 size={18} />
                    </button>
                  )}
                </div>
              </summary>
              <div className='px-6 py-4 border-t'>
                <p>
                  <strong>Summary:</strong> {reserva.summary}
                </p>
                <p>
                  <strong>Nivel de experiencia:</strong>{" "}
                  {reserva.nivel_experiencia}
                </p>
                <p>
                  <strong>Objetivo entrenamiento:</strong>{" "}
                  {reserva.objetivo_entrenamiento}
                </p>
                <p>
                  <strong>Condiciones médicas:</strong>{" "}
                  {reserva.condiciones_medicas}
                </p>
                <p>
                  <strong>Profesor:</strong> {reserva.profesor?.perfil?.nombre}{" "}
                  {reserva.profesor?.perfil?.apellido}
                </p>
                <p>
                  <strong>Alumno:</strong> {reserva.alumno?.perfil?.nombre}{" "}
                  {reserva.alumno?.perfil?.apellido}
                </p>
              </div>
            </details>
          ))}
        </div>
      ) : (
        <p className='text-gray-500'>No hay reservas registradas</p>
      )}
    </div>
  );
};

export default Reservas;
