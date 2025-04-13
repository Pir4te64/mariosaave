import React, { useState } from "react";
import { Edit2, Check, X } from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa";
import useReservas from "@/components/Reservas/useReservas";
import { updateReserva } from "@/components/Reservas/ReservationService";
import ReservasHeader from "@/components/Reservas/ReservasHeader";

const Reservas = () => {
  const { reservas, fetchReservas } = useReservas();
  const [editReservaId, setEditReservaId] = useState(null);
  const [editEstado, setEditEstado] = useState("");
  const [openStates, setOpenStates] = useState({});
  const [monthFilter, setMonthFilter] = useState("");

  const formatDateDisplay = (isoDate) => {
    const date = new Date(isoDate);
    date.setHours(date.getHours() + 3);
    return date.toLocaleString();
  };

  const handleEditClick = (reserva) => {
    setEditReservaId(reserva.id);
    setEditEstado(reserva.estado);
  };

  const handleCancelEdit = () => {
    setEditReservaId(null);
    setEditEstado("");
  };

  const handleUpdate = (id) => {
    updateReserva(id, editEstado)
      .then(() => {
        fetchReservas();
        setEditReservaId(null);
        setEditEstado("");
      })
      .catch((error) => {
        console.error("Error actualizando reserva:", error);
      });
  };

  const handleToggle = (e, id) => {
    setOpenStates((prev) => ({
      ...prev,
      [id]: e.target.open,
    }));
  };

  const filteredReservas = monthFilter
    ? reservas.filter((reserva) => {
        const fechaInicio = new Date(reserva.fecha_inicio);
        const [filterYear, filterMonth] = monthFilter.split("-").map(Number);
        return (
          fechaInicio.getFullYear() === filterYear &&
          fechaInicio.getMonth() + 1 === filterMonth
        );
      })
    : reservas;

  return (
    <div className='container mx-auto px-4 py-6'>
      {/* Componente de encabezado con filtro */}
      <ReservasHeader
        monthFilter={monthFilter}
        setMonthFilter={setMonthFilter}
      />

      {filteredReservas.length > 0 ? (
        <div className='flex flex-col gap-4'>
          {filteredReservas.map((reserva) => (
            <details
              key={reserva.id}
              className='bg-white shadow-md rounded-lg'
              onToggle={(e) => handleToggle(e, reserva.id)}>
              <summary className='cursor-pointer px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center'>
                <div className='flex flex-col md:flex-row md:space-x-4 items-center'>
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
