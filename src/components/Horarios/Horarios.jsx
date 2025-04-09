import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "../../utils/api";

const Horarios = () => {
  // Estado para almacenar la lista de horarios
  const [horarios, setHorarios] = useState([]);
  // Estado para el formulario de creación de horario (oculto)
  const [newHorario, setNewHorario] = useState({
    dia_semana: "",
    hora_inicio: "",
    hora_fin: "",
    isActive: false,
  });

  // Obtención del token desde localStorage o sessionStorage
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  // Función para obtener la lista de horarios desde el endpoint
  const fetchHorarios = () => {
    axios
      .get(APIURL.horarios, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Datos recibidos de /horarios:", response.data);
        setHorarios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos desde /horarios:", error);
      });
  };

  // Se consulta la lista de horarios al montar el componente
  useEffect(() => {
    fetchHorarios();
  }, []);

  // Maneja cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHorario((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Envía la solicitud POST para crear un nuevo horario
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(APIURL.horarios, newHorario, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Horario creado:", response.data);
        // Actualizamos la lista agregando el nuevo horario
        setHorarios((prevHorarios) => [...prevHorarios, response.data]);
        // Reiniciamos el formulario
        setNewHorario({
          dia_semana: "",
          hora_inicio: "",
          hora_fin: "",
          isActive: false,
        });
      })
      .catch((error) => {
        console.error("Error al crear horario:", error);
      });
  };

  return (
    <div className='container mx-auto px-4 py-6'>
      {/* Formulario de creación de horario oculto */}
      <div className='hidden'>
        <h2 className='text-xl font-bold mb-4'>Crear Horario</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-gray-700'>Día de la Semana:</label>
            <select
              name='dia_semana'
              value={newHorario.dia_semana}
              onChange={handleChange}
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              required>
              <option value=''>Seleccione un día</option>
              <option value='0'>Domingo</option>
              <option value='1'>Lunes</option>
              <option value='2'>Martes</option>
              <option value='3'>Miércoles</option>
              <option value='4'>Jueves</option>
              <option value='5'>Viernes</option>
              <option value='6'>Sábado</option>
            </select>
          </div>
          <div>
            <label className='block text-gray-700'>Hora Inicio:</label>
            <input
              type='time'
              name='hora_inicio'
              value={newHorario.hora_inicio}
              onChange={handleChange}
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              required
            />
          </div>
          <div>
            <label className='block text-gray-700'>Hora Fin:</label>
            <input
              type='time'
              name='hora_fin'
              value={newHorario.hora_fin}
              onChange={handleChange}
              className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              required
            />
          </div>
          <div className='flex items-center'>
            <input
              type='checkbox'
              name='isActive'
              checked={newHorario.isActive}
              onChange={handleChange}
              className='mr-2'
            />
            <label className='text-gray-700'>Activo</label>
          </div>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
            Crear Horario
          </button>
        </form>
      </div>

      {/* Lista de Horarios */}
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>
        Lista de Horarios
      </h2>
      {horarios.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white shadow-md rounded-lg'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Día Semana
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Hora Inicio
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Hora Fin
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Activo
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {horarios.map((horario) => (
                <tr key={horario.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {horario.dia_semana}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {horario.hora_inicio}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {horario.hora_fin}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {horario.isActive ? "Sí" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='text-gray-500'>No hay horarios registrados</p>
      )}
    </div>
  );
};

export default Horarios;
