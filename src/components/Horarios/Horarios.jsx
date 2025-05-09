// src/components/Horarios/Horarios.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "@/utils/api";
import { Trash, Edit } from "lucide-react";
import Swal from "sweetalert2";
import HorarioForm from "@/components/Horarios/HorarioForm";
import EditHorarioForm from "@/components/Horarios/EditHorarioForm";

const Horarios = () => {
  const [horarios, setHorarios] = useState([]);
  const [newHorario, setNewHorario] = useState({
    fecha: "",
    fecha_inicio: "00:00",
    fecha_fin: "00:00",
    isActive: false,
  });
  const [editingHorario, setEditingHorario] = useState(null);

  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  // Traer array de horarios (puede venir como data, data.items o data.data)
  const fetchHorarios = () => {
    axios
      .get(APIURL.horarios, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const data = response.data;
        const arr = Array.isArray(data) ? data : data.items || data.data || [];
        setHorarios(arr);
      })
      .catch((error) => {
        console.error("Error al obtener datos desde /horarios:", error);
      });
  };

  useEffect(() => {
    fetchHorarios();
  }, []);

  // Helpers para formatear a zona local del navegador
  const formatLocalDate = (isoString) => {
    if (!isoString) return "";
    const dt = new Date(isoString);
    return dt.toLocaleDateString(); // p.ej. "11/5/2025" según locale
  };

  const formatLocalTime = (isoString) => {
    if (!isoString) return "";
    const dt = new Date(isoString);
    return dt.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // p.ej. "12:00 PM"
  };

  // Manejadores de creación
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewHorario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTimeChange = (field, part, value) => {
    const [h, m] = newHorario[field].split(":");
    const hour = part === "hour" ? value : h;
    const minute = part === "minute" ? value : m;
    setNewHorario((prev) => ({
      ...prev,
      [field]: `${String(hour).padStart(2, "0")}:${String(minute).padStart(
        2,
        "0"
      )}`,
    }));
  };

  const isValidTimeRange = (start, end) => {
    const [h1, m1] = start.split(":").map(Number);
    const [h2, m2] = end.split(":").map(Number);
    return h1 * 60 + m1 < h2 * 60 + m2;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidTimeRange(newHorario.fecha_inicio, newHorario.fecha_fin)) {
      Swal.fire({
        icon: "error",
        title: "Error en la hora",
        text: "La hora de inicio debe ser menor a la hora de fin.",
      });
      return;
    }

    const decoded = JSON.parse(localStorage.getItem("decodedToken") || "null");

    // Crear fechas con zona horaria
    const fecha = new Date(newHorario.fecha);
    const [horaInicio, minutoInicio] = newHorario.fecha_inicio.split(":");
    const [horaFin, minutoFin] = newHorario.fecha_fin.split(":");

    // Ajustar las horas a la fecha
    fecha.setHours(parseInt(horaInicio), parseInt(minutoInicio));
    const fechaInicio = fecha.toISOString();

    fecha.setHours(parseInt(horaFin), parseInt(minutoFin));
    const fechaFin = fecha.toISOString();

    const payload = {
      profesor_id: decoded?.id,
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin,
      isActive: newHorario.isActive,
    };

    axios
      .post(APIURL.horarios, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setHorarios((prev) => [...prev, res.data]);
        Swal.fire({
          icon: "success",
          title: "Horario creado",
          text: "El horario se ha creado correctamente.",
        });
        setNewHorario({
          fecha: "",
          fecha_inicio: "00:00",
          fecha_fin: "00:00",
          isActive: false,
        });
      })
      .catch((err) => {
        console.error("Error al crear horario:", err);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al crear el horario.",
        });
      });
  };

  // Manejadores de eliminación
  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${APIURL.horarios}/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() => {
            setHorarios((prev) => prev.filter((h) => h.id !== id));
            Swal.fire("Eliminado!", "El horario ha sido eliminado.", "success");
          })
          .catch((err) => {
            console.error("Error al eliminar horario:", err);
            Swal.fire(
              "Error!",
              "Hubo un error al eliminar el horario.",
              "error"
            );
          });
      }
    });
  };

  // Manejadores de edición
  const handleEditClick = (horario) => setEditingHorario({ ...horario });
  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingHorario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleEditTimeChange = (field, part, value) => {
    const [h, m] = editingHorario[field].split(":");
    const hour = part === "hour" ? value : h;
    const minute = part === "minute" ? value : m;
    setEditingHorario((prev) => ({
      ...prev,
      [field]: `${String(hour).padStart(2, "0")}:${String(minute).padStart(
        2,
        "0"
      )}`,
    }));
  };
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (
      !isValidTimeRange(editingHorario.fecha_inicio, editingHorario.fecha_fin)
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
      .then((res) => {
        setHorarios((prev) =>
          prev.map((h) => (h.id === editingHorario.id ? res.data : h))
        );
        setEditingHorario(null);
      })
      .catch((err) => console.error("Error al actualizar horario:", err));
  };
  const cancelEdit = () => setEditingHorario(null);

  // Opciones de hora/minuto para los selects de form
  const hours = Array.from({ length: 24 }, (_, i) =>
    String(i).padStart(2, "0")
  );
  const minutes = ["00", "30"];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Lista de Horarios
      </h2>

      {horarios.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hora Inicio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hora Fin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {horarios.map((horario) => (
                <tr key={horario.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatLocalDate(horario.fecha_inicio)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatLocalTime(horario.fecha_inicio)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatLocalTime(horario.fecha_fin)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {horario.isActive ? "Sí" : "No"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                    <button
                      onClick={() => handleEditClick(horario)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Editar horario"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(horario.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Eliminar horario"
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No hay horarios registrados</p>
      )}

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
