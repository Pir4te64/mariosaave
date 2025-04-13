import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "@/utils/api";
import UserTable from "@/components/Usuarios/UserTable"; // Asegúrate de que la ruta sea correcta

const Usuarios = () => {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [users, setUsers] = useState([]); // Estado para los usuarios obtenidos por rol
  const token = localStorage.getItem("token");

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

  // Maneja el cambio en el select para obtener usuarios por rol
  const handleRoleChange = (e) => {
    const roleId = e.target.value;
    setSelectedRole(roleId);

    if (roleId) {
      axios
        .get(`${APIURL.listar_por_rol}/${roleId}`, {
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

  return (
    <div className='container mx-auto px-4 py-6'>
      {/* Encabezado: título y selector de roles */}
      <div className='mb-6 flex flex-col sm:flex-row items-center justify-between'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4 sm:mb-0'>
          Usuarios
        </h1>
        <div className='w-full sm:w-auto'>
          <select
            className='w-full sm:w-64 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={selectedRole}
            onChange={handleRoleChange}>
            <option value=''>Seleccione un Rol</option>
            {roles.map((rol) => (
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
          <UserTable users={users} />
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
