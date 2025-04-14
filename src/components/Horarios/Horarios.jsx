import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "@/utils/api";
import { Trash, Edit } from "lucide-react";
import Swal from "sweetalert2";
import HorarioForm from "@/components/Horarios/HorarioForm"; // Formulario para agregar horarios
import EditHorarioForm from "@/components/Horarios/EditHorarioForm"; // Formulario para editar horarios

const Horarios = () => {
  // Estado para almacenar la lista de horarios
  const [horarios, setHorarios] = useState([]);
  // Estado para el formulario de creación de horario
  const [newHorario, setNewHorario] = useState({
    fecha: "",
    hora_inicio: "00:00",
    hora_fin: "00:00",
    isActive: false,
  });
  // Estado para el horario en edición
  const [editingHorario, setEditingHorario] = useState(null);

  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  const fetchHorarios = () => {
    axios
      .get(APIURL.horarios, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHorarios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos desde /horarios:", error);
      });
  };

  useEffect(() => {
    fetchHorarios();
  }, []);

  // Funciones para el formulario de creación
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHorario((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTimeChange = (field, part, value) => {
    const [currentHour, currentMinute] = newHorario[field].split(":");
    let newHour = currentHour;
    let newMinute = currentMinute;
    if (part === "hour") {
      newHour = value;
    } else if (part === "minute") {
      newMinute = value;
    }
    newHour = newHour.toString().padStart(2, "0");
    newMinute = newMinute.toString().padStart(2, "0");
    const timeString = `${newHour}:${newMinute}`;
    setNewHorario((prevState) => ({
      ...prevState,
      [field]: timeString,
    }));
  };

  // Función para comparar horas
  const isValidTimeRange = (horaInicio, horaFin) => {
    const [inicioH, inicioM] = horaInicio.split(":").map(Number);
    const [finH, finM] = horaFin.split(":").map(Number);
    // Convertir a minutos
    const totalInicio = inicioH * 60 + inicioM;
    const totalFin = finH * 60 + finM;
    return totalInicio < totalFin;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validamos que la hora de inicio sea menor a la de fin
    if (!isValidTimeRange(newHorario.hora_inicio, newHorario.hora_fin)) {
      Swal.fire({
        icon: "error",
        title: "Error en la hora",
        text: "La hora de inicio debe ser menor a la hora de fin.",
      });
      return;
    }

    const decodedTokenStr = localStorage.getItem("decodedToken");
    const decodedToken = decodedTokenStr ? JSON.parse(decodedTokenStr) : null;

    const payload = {
      ...newHorario,
      profesor_id: decodedToken?.id,
    };

    console.log("Payload a enviar:", payload);

    axios
      .post(APIURL.horarios, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setHorarios((prevHorarios) => [...prevHorarios, response.data]);
        Swal.fire({
          icon: "success",
          title: "Horario creado",
          text: "El horario se ha creado correctamente.",
        });
        setNewHorario({
          fecha: "",
          hora_inicio: "00:00",
          hora_fin: "00:00",
          isActive: false,
        });
      })
      .catch((error) => {
        console.error("Error al crear horario:", error);
      });
  };

  // Función para eliminar un horario
  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${APIURL.horarios}/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() => {
            setHorarios((prevHorarios) =>
              prevHorarios.filter((horario) => horario.id !== id)
            );
            Swal.fire("Eliminado!", "El horario ha sido eliminado.", "success");
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "Hubo un error al eliminar el horario.",
              "error"
            );
            console.error("Error al eliminar horario:", error);
          });
      }
    });
  };

  // Funciones para el formulario de edición
  const handleEditClick = (horario) => {
    // Cargar el horario seleccionado en el estado de edición
    setEditingHorario({ ...horario });
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingHorario((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEditTimeChange = (field, part, value) => {
    const [currentHour, currentMinute] = editingHorario[field].split(":");
    let newHour = currentHour;
    let newMinute = currentMinute;
    if (part === "hour") {
      newHour = value;
    } else if (part === "minute") {
      newMinute = value;
    }
    newHour = newHour.toString().padStart(2, "0");
    newMinute = newMinute.toString().padStart(2, "0");
    const timeString = `${newHour}:${newMinute}`;
    setEditingHorario((prevState) => ({
      ...prevState,
      [field]: timeString,
    }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    // Validamos en edición que la hora de inicio sea menor a la de fin
    if (
      !isValidTimeRange(editingHorario.hora_inicio, editingHorario.hora_fin)
    ) {
      Swal.fire({
        icon: "error",
        title: "Error en la hora",
        text: "La hora de inicio debe ser menor a la hora de fin.",
      });
      return;
    }

    axios
      .put(`${APIURL.horarios}/${editingHorario.id}`, editingHorario, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setHorarios((prevHorarios) =>
          prevHorarios.map((horario) =>
            horario.id === editingHorario.id ? response.data : horario
          )
        );
        setEditingHorario(null);
      })
      .catch((error) => {
        console.error("Error al actualizar horario:", error);
      });
  };

  const cancelEdit = () => {
    setEditingHorario(null);
  };

  // Arreglos para horas y minutos
  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const minutes = ["00", "30"];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='container mx-auto px-4 py-6'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>
        Lista de Horarios
      </h2>
      {horarios.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white shadow-md rounded-lg'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Fecha
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
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {horarios.map((horario) => (
                <tr key={horario.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {formatDate(horario.fecha)}
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
                  <td className='px-6 py-4 whitespace-nowrap flex gap-2'>
                    <button
                      onClick={() => handleEditClick(horario)}
                      className='text-blue-500 hover:text-blue-700'
                      title='Editar horario'>
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(horario.id)}
                      className='text-red-500 hover:text-red-700'
                      title='Eliminar horario'>
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='text-gray-500'>No hay horarios registrados</p>
      )}

      {/* Se muestra HorarioForm (creación) solo cuando no se está editando */}
      {!editingHorario && (
        <HorarioForm
          newHorario={newHorario}
          handleChange={handleChange}
          handleTimeChange={handleTimeChange}
          handleSubmit={handleSubmit}
          hours={hours}
          minutes={minutes}
        />
      )}

      {/* Formulario de edición (se muestra si editingHorario tiene datos) */}
      {editingHorario && (
        <EditHorarioForm
          horarioData={editingHorario}
          handleChange={handleEditChange}
          handleTimeChange={handleEditTimeChange}
          handleSubmit={handleUpdateSubmit}
          hours={hours}
          minutes={minutes}
          cancelEdit={cancelEdit}
        />
      )}
    </div>
  );
};

export default Horarios;
