// src/components/Usuarios/UserTable.jsx
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import FormUsuario from "@/components/Usuarios/FormUsuario"; // ruta correcta
import { APIURL } from "../../utils/api";

const UserTable = ({ users, refreshUsers, roles }) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const handleRowClick = (index) =>
    setExpandedRowIndex(expandedRowIndex === index ? null : index);

  const handleFormSubmit = (userIndex) => {
    setExpandedRowIndex(null);
  };

  const handleDelete = async (e, userId) => {
    e.stopPropagation();

    // Confirmación con SweetAlert2
    const result = await Swal.fire({
      title: "¿Seguro que quieres eliminar este usuario?",
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
      await axios.delete(`${APIURL.eliminar_usuario}${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // Notificación de éxito
      await Swal.fire({
        title: "Usuario eliminado",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      refreshUsers();
      setExpandedRowIndex(null);
    } catch (error) {
      console.error("Error al eliminar usuario:", error);

      // Notificación de error
      Swal.fire({
        title: "Error",
        text: "No se pudo eliminar el usuario. Revisa la consola para más detalles.",
        icon: "error",
      });
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full overflow-hidden rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Apellido
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Plan Contratado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {users.map((user, index) => {
              const nombre = user.perfil?.nombre ?? "";
              const apellido = user.perfil?.apellido ?? "";
              const plan = user.perfil?.plan_contratado ?? "";

              return (
                <React.Fragment key={user.id}>
                  <tr
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => handleRowClick(index)}
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      {nombre}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      {apellido}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      {user.isActive ? "activo" : "no activo"}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      {plan}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      <button
                        onClick={(e) => handleDelete(e, user.id)}
                        className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                  {expandedRowIndex === index && (
                    <tr>
                      <td colSpan={6} className="bg-gray-50 px-6 py-4">
                        <FormUsuario
                          initialData={user.perfil}
                          isActive={user.isActive}
                          onSubmit={() => handleFormSubmit(index)}
                          onRefresh={refreshUsers}
                          rol={user.rol}
                          roles={roles}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
