import React, { useEffect } from "react";
import axios from "axios";
import useTablaInformacion from "@/components/Usuarios/useTablaInformacion";
import { APIURL } from "@/utils/api";
import { defaultUserData } from "@/components/Usuarios/initialValues";
import useFetchProfile from "@/components/Usuarios/useFetchProfile";
import Swal from "sweetalert2"; // Importa SweetAlert2

const FormUsuario = ({ userIndex, initialData, onSubmit, onRefresh }) => {
  const { tabla, updateUserField, setUserData } = useTablaInformacion();
  const userData = tabla[userIndex] || {};

  // Inicializa el store con initialData o con defaultUserData si está vacío.
  useEffect(() => {
    const dataToSet =
      initialData && Object.keys(initialData).length > 0
        ? { ...defaultUserData, ...initialData }
        : { ...defaultUserData };
    setUserData(userIndex, dataToSet);
  }, [initialData, setUserData, userIndex]);

  // Usa el hook personalizado para hacer el GET a la API cuando userData.id esté presente.
  useFetchProfile(userData.id, userIndex, setUserData);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateUserField(userIndex, name, type === "checkbox" ? checked : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (userData.id) {
      axios
        .put(`${APIURL.perfil}/${userData.id}`, userData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserData(userIndex, { ...defaultUserData, ...response.data });
          if (onSubmit) onSubmit(e, userIndex);
          if (onRefresh) onRefresh();
          Swal.fire({
            title: "¡Actualizado!",
            text: "Perfil actualizado correctamente",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        })
        .catch((error) => {
          console.error("Error actualizando el perfil:", error);
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al actualizar el perfil",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        });
    } else {
      axios
        .post(`${APIURL.perfil}`, userData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserData(userIndex, { ...defaultUserData, ...response.data });
          if (onSubmit) onSubmit(e, userIndex);
          if (onRefresh) onRefresh();
          Swal.fire({
            title: "¡Creado!",
            text: "Perfil creado correctamente",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        })
        .catch((error) => {
          console.error("Error al crear el perfil:", error);
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al crear el perfil",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        });
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-4 md:p-6 bg-white shadow rounded-lg'>
      <form onSubmit={handleSubmit}>
        {/* Información Personal */}
        <fieldset className='mb-8 border-t border-gray-200 pt-4'>
          <legend className='text-xl font-bold text-gray-800 mb-4'>
            Información Personal
          </legend>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Nombre
              </label>
              <input
                type='text'
                name='nombre'
                placeholder='Ingresa el nombre'
                value={userData.nombre || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Apellido
              </label>
              <input
                type='text'
                name='apellido'
                placeholder='Ingresa el apellido'
                value={userData.apellido || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Teléfono
              </label>
              <input
                type='text'
                name='telefono'
                placeholder='Ingresa el teléfono'
                value={userData.telefono || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Edad
              </label>
              <input
                type='number'
                name='edad'
                placeholder='Ingresa la edad'
                value={userData.edad || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
          </div>
        </fieldset>

        {/* Select de Planes */}
        <div className='mb-8'>
          <label className='block text-sm font-medium text-gray-700'>
            Plan Contratado
          </label>
          <select
            name='plan_contratado'
            value={userData.plan_contratado || ""}
            onChange={handleInputChange}
            className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
          >
            <option value=''>Seleccione un plan</option>
            <option value='Plan Básico'>Plan Básico</option>
            <option value='Plan Estándar'>Plan Estándar</option>
            <option value='Plan Premium'>Plan Premium</option>
            <option value='Plan Plus'>Plan Plus</option>
          </select>
        </div>

        {/* Sección de Medidas Corporales */}
        <fieldset className='mb-8 border-t border-gray-200 pt-4'>
          <legend className='text-xl font-bold text-gray-800 mb-4'>
            Medidas Corporales
          </legend>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Altura (m)
              </label>
              <input
                type='number'
                step='0.01'
                name='altura'
                placeholder='Ingresa la altura'
                value={userData.altura || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Peso (kg)
              </label>
              <input
                type='number'
                name='peso'
                placeholder='Ingresa el peso'
                value={userData.peso || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Cintura (cm)
              </label>
              <input
                type='number'
                name='cintura'
                placeholder='Ingresa la medida de cintura'
                value={userData.cintura || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Pecho (cm)
              </label>
              <input
                type='number'
                name='pecho'
                placeholder='Ingresa la medida de pecho'
                value={userData.pecho || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Brazos (cm)
              </label>
              <input
                type='number'
                name='brazos'
                placeholder='Ingresa la medida de brazos'
                value={userData.brazos || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Piernas (cm)
              </label>
              <input
                type='number'
                name='piernas'
                placeholder='Ingresa la medida de piernas'
                value={userData.piernas || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Muslo (cm)
              </label>
              <input
                type='number'
                name='muslo'
                placeholder='Ingresa la medida de muslo'
                value={userData.muslo || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Cadera (cm)
              </label>
              <input
                type='number'
                name='cadera'
                placeholder='Ingresa la medida de cadera'
                value={userData.cadera || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 transition duration-150'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Cuello (cm)
              </label>
              <input
                type='number'
                name='cuello'
                placeholder='Ingresa la medida de cuello'
                value={userData.cuello || ""}
                onChange={handleInputChange}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 transition duration-150'
              />
            </div>
          </div>
        </fieldset>

        {/* Checkbox para indicar si el usuario está activo */}
        <div className='flex items-center mb-8'>
          <input
            type='checkbox'
            name='isActive'
            checked={userData.isActive || false}
            onChange={handleInputChange}
            className='mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
          />
          <label className='text-sm font-medium text-gray-700'>¿Activo?</label>
        </div>

        {/* Botón para enviar el formulario */}
        <div className='flex justify-end'>
          <button
            type='submit'
            className='px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150'
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUsuario;
