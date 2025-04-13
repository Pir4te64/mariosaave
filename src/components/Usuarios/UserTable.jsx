import React, { useState } from "react";
import FormUsuario from "@/components/Usuarios/FormUsuario"; // Asegúrate de que la ruta sea correcta

const UserTable = ({ users }) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };

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
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {users.map((user, index) => {
              // En algunos casos user.perfil es null
              const nombre = user.perfil ? user.perfil.nombre : "";
              const apellido = user.perfil ? user.perfil.apellido : "";

              return (
                <React.Fragment key={user.id}>
                  <tr
                    className='hover:bg-gray-100 cursor-pointer'
                    onClick={() => handleRowClick(index)}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {user.email}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {nombre}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {apellido}
                    </td>
                  </tr>
                  {expandedRowIndex === index && (
                    <tr>
                      <td colSpan={3} className='px-6 py-4'>
                        {/* Se pasa user.perfil como initialData */}
                        <FormUsuario
                          userIndex={index}
                          initialData={user.perfil}
                          onSubmit={handleFormSubmit}
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
