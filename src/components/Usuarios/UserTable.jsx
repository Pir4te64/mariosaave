import React, { useState } from "react";
import FormUsuario from "@/components/Usuarios/FormUsuario"; // Asegúrate de la ruta correcta

const UserTable = ({ users, refreshUsers }) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  
  const handleRowClick = (index) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };

  // Esta función se ejecuta cuando se envía el formulario para ocultar la fila expandida.
  const handleFormSubmit = (e, userIndex) => {
    e.preventDefault();
    setExpandedRowIndex(null);
  };

  return (
    <div className='overflow-x-auto'>
      <div className='min-w-full shadow rounded-lg overflow-hidden'>
        <table className='min-w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Email
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Nombre
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Apellido
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Estado
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Plan Contratado
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {users.map((user, index) => {
              const nombre = user.perfil ? user.perfil.nombre : "";
              const apellido = user.perfil ? user.perfil.apellido : "";
              const planContratado = user.perfil ? user.perfil.plan_contratado : "";

              return (
                <React.Fragment key={user.id}>
                  <tr
                    className='hover:bg-gray-100 cursor-pointer'
                    onClick={() => handleRowClick(index)}
                  >
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {user.email}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {nombre}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {apellido}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {user.isActive ? "activo" : "no activo"}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {planContratado}
                    </td>
                  </tr>
                  {expandedRowIndex === index && (
                    <tr>
                      <td colSpan={5} className='px-6 py-4'>
                        <FormUsuario
                          userIndex={index}
                          initialData={user.perfil}
                          onSubmit={handleFormSubmit}
                          // Se pasa la función refreshUsers para actualizar la lista
                          onRefresh={refreshUsers}
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
