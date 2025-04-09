import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "../../utils/api";
import { Edit2, Check, X } from "lucide-react";

const Reservas = () => {
  // Estado para almacenar la lista de reservas
  const [reservas, setReservas] = useState([]);
  // Estado para controlar la edición y almacenar el nuevo estado
  const [editReservaId, setEditReservaId] = useState(null);
  const [editEstado, setEditEstado] = useState("");

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

  return (
    <div className='container mx-auto px-4 py-6'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>Reservas</h2>
      {reservas.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white shadow-md rounded-lg'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Fecha Inicio
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Fecha Fin
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Estado
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {reservas.map((reserva) => (
                <tr key={reserva.id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {formatDateDisplay(reserva.fecha_inicio)}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {formatDateDisplay(reserva.fecha_fin)}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap capitalize'>
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
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap flex space-x-2'>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='text-gray-500'>No hay reservas registradas</p>
      )}
    </div>
  );
};

export default Reservas;
