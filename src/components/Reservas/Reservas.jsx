// src/components/Reservas/Reservas.jsx
import React, { useState } from "react";
import { Edit2, Check, X, Trash2 } from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa";
import useReservas from "@/components/Reservas/useReservas";
import { updateReserva } from "@/components/Reservas/ReservationService";
import ReservasHeader from "@/components/Reservas/ReservasHeader";
import Swal from "sweetalert2";
import axios from "axios";
import { APIURL } from "../../utils/api";
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

  const handleDeleteReserva = async (id) => {
    // Confirmación con SweetAlert2
    const result = await Swal.fire({
      title: "¿Seguro que quieres eliminar esta reserva?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
      const token = sessionStorage.getItem("token");
      await axios.delete(`${APIURL.reservas}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // Notificación de éxito
      await Swal.fire({
        title: "Reserva eliminada",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      fetchReservas();
    } catch (error) {
      console.error("Error eliminando reserva:", error);

      // Notificación de error
      Swal.fire({
        title: "Error",
        text: "No se pudo eliminar la reserva. Revisa la consola para más detalles.",
        icon: "error",
      });
    }
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
    <div className="container mx-auto px-4 py-6">
      <ReservasHeader monthFilter={monthFilter} setMonthFilter={setMonthFilter} />

      {filteredReservas.length > 0 ? (
        <div className="flex flex-col gap-4">
          {filteredReservas.map((reserva) => (
            <details
              key={reserva.id}
              className="rounded-lg bg-white shadow-md"
              onToggle={(e) => handleToggle(e, reserva.id)}
            >
              <summary className="flex cursor-pointer flex-col px-6 py-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col items-center md:flex-row md:space-x-4">
                  {openStates[reserva.id] ? (
                    <FaMinus className="mr-2" />
                  ) : (
                    <FaPlus className="mr-2" />
                  )}
                  <span>
                    <strong>Inicio:</strong> {formatDateDisplay(reserva.fecha_inicio)}
                  </span>
                  <span>
                    <strong>Fin:</strong> {formatDateDisplay(reserva.fecha_fin)}
                  </span>
                  <span className="capitalize">
                    <strong>Estado:</strong>{" "}
                    {editReservaId === reserva.id ? (
                      <select
                        value={editEstado}
                        onChange={(e) => setEditEstado(e.target.value)}
                        className="rounded-md border border-gray-300 p-1"
                      >
                        <option value="pendiente">Pendiente</option>
                        <option value="confirmado">Confirmado</option>
                        <option value="cancelado">Cancelado</option>
                      </select>
                    ) : (
                      reserva.estado
                    )}
                  </span>
                </div>

                <div className="mt-2 flex space-x-2 md:mt-0">
                  {editReservaId === reserva.id ? (
                    <>
                      <button
                        onClick={() => handleUpdate(reserva.id)}
                        title="Guardar"
                        className="rounded-md bg-green-600 p-1 text-white hover:bg-green-700"
                      >
                        <Check size={18} />
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        title="Cancelar"
                        className="rounded-md bg-gray-600 p-1 text-white hover:bg-gray-700"
                      >
                        <X size={18} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditClick(reserva);
                        }}
                        title="Editar"
                        className="rounded-md bg-blue-600 p-1 text-white hover:bg-blue-700"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteReserva(reserva.id);
                        }}
                        title="Eliminar"
                        className="rounded-md bg-red-600 p-1 text-white hover:bg-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </>
                  )}
                </div>
              </summary>

              <div className="border-t px-6 py-4">
                <p>
                  <strong>Summary:</strong> {reserva.summary}
                </p>
                <p>
                  <strong>Nivel de experiencia:</strong> {reserva.nivel_experiencia}
                </p>
                <p>
                  <strong>Objetivo entrenamiento:</strong> {reserva.objetivo_entrenamiento}
                </p>
                <p>
                  <strong>Condiciones médicas:</strong> {reserva.condiciones_medicas}
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
        <p className="text-gray-500">No hay reservas registradas</p>
      )}
    </div>
  );
};

export default Reservas;
