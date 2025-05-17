import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "@/utils/api";
import UserTable from "@/components/Usuarios/UserTable"; // Asegúrate de la ruta correcta

const Usuarios = () => {
  const [roles, setRoles] = useState([]);
  // Por defecto se setea el rol "3"
  const [selectedRole, setSelectedRole] = useState("3");
  const [users, setUsers] = useState([]);
  const token = sessionStorage.getItem("token");
  // Función para volver a obtener el listado de usuarios por rol
  const refreshUsers = () => {
    if (selectedRole) {
      axios
        .get(`${APIURL.listar_por_rol}${selectedRole}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener listado por rol:", error);
        });
    } else {
      setUsers([]);
    }
  };

  // Obtención de los roles
  useEffect(() => {
    axios
      .get(APIURL.listar_roles, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener roles:", error);
      });
  }, [token]);

  // Llama a refreshUsers cuando cambia el rol seleccionado
  useEffect(() => {
    refreshUsers();
  }, [selectedRole, token]);

  const handleRoleChange = (e) => {
    const roleId = e.target.value;
    setSelectedRole(roleId);
  };

  return (
    <div className='container mx-auto px-4 py-6'>
      {/* Encabezado: título y selector de roles */}
      <div className='mb-6 flex flex-col items-center justify-between sm:flex-row'>
        <h1 className='mb-4 text-3xl font-bold text-gray-800 sm:mb-0'>
          Usuarios
        </h1>
        <div className='w-full sm:w-auto'>
          <select
            className='w-full rounded border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-64'
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value=''>Seleccione un Rol</option>
            {/* Solo se muestran roles con id 3 y 4 */}
            {roles
              .filter((rol) => rol.RolID === 3 || rol.RolID === 4)
              .map((rol) => (
                <option key={rol.RolID} value={rol.RolID}>
                  {rol.nombre}
                </option>
              ))}
          </select>
        </div>
      </div>
      {/* Tabla de usuarios */}
      <div>
        {users.length > 0 ? (
          // Se pasa refreshUsers a UserTable
          <UserTable users={users} refreshUsers={refreshUsers} roles={roles} />
        ) : (
          <p className='text-gray-600'>
            {selectedRole
              ? "No hay usuarios para el rol seleccionado."
              : "Seleccione un rol para ver los usuarios."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Usuarios;
