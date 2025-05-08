import React, { useEffect } from "react";
import axios from "axios";
import useTablaInformacion from "@/components/Usuarios/useTablaInformacion";
import { APIURL } from "@/utils/api";
import { defaultUserData } from "@/components/Usuarios/initialValues";
import useFetchProfile from "@/components/Usuarios/useFetchProfile";
import Swal from "sweetalert2";

import PersonalInfoSection from "@/components/Usuarios/PersonalInfoSection";
import PlanSelectSection from "@/components/Usuarios/PlanSelectSection";
import BodyMeasurementsSection from "@/components/Usuarios/BodyMeasurementsSection";
import RoleSelectSection from "@/components/Usuarios/RoleSelectSection";

const FormUsuario = ({
  userIndex,
  initialData,
  onSubmit,
  onRefresh,
  roles,
  isActive,
  rol,            // rol actual que llega del backend
}) => {
  const { tabla, updateUserField, setUserData } = useTablaInformacion();
  const userData = tabla[userIndex] || {};
  console.log(isActive);

  useEffect(() => {
    const baseData =
      initialData && Object.keys(initialData).length
        ? { ...defaultUserData, ...initialData }
        : { ...defaultUserData };

    if (rol) baseData.rol = String(rol.RolID);

    // Normalizar: cualquier cosa distinta de true se vuelve false
    baseData.isActive = isActive === true || isActive === "true";

    setUserData(userIndex, baseData);
  }, [initialData, rol, isActive, roles, setUserData, userIndex]);




  /* 2 ▸ Traer perfil si existe id */
  useFetchProfile(userData.id, userIndex, setUserData);

  /* 3 ▸ Manejador de inputs */
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // 1 Si es el checkbox de activo, garantizamos booleano
    if (name === "isActive") {
      updateUserField(userIndex, "isActive", checked === true);
      return;
    }

    // 2 Si es el selector de rol, normalizamos a string
    if (name === "rol") {
      updateUserField(userIndex, "rol", String(value));
      return;
    }

    // 3 Para cualquier otro campo, valor directo
    updateUserField(userIndex, name, value);
  };

  /* 4 ▸ Guardar/actualizar */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* 1 ▸ Header con token */
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    /* 2 ▸ Armar el payload del endpoint /register         */
    const registerPayload = {
      isActive: userData.isActive,
    };

    if (userData.rol) {
      // Solo se envía role_id si hay un rol seleccionado
      registerPayload.role_id = Number(userData.rol);
    }

    /* 3 ▸ PUT intermedio (rol / isActive)                  */
    try {
      await axios.put(
        `${APIURL.register}/${userData.usuario_id}`,
        registerPayload,
        { headers }
      );
    } catch (err) {
      console.error("Error actualizando rol/isActive:", err);
    }

    /* 4 ▸ POST o PUT principal (perfil) — rol ya está fuera por el destructuring */
    const { rol: _rolField, isActive: _isActive, ...payload } = userData;

    try {
      const response = userData.id
        ? await axios.put(`${APIURL.perfil}/${userData.id}`, payload, { headers })
        : await axios.post(`${APIURL.perfil}`, payload, { headers });

      setUserData(userIndex, (prev) => ({ ...prev, ...response.data }));
      onSubmit?.(e, userIndex);
      onRefresh?.();

      Swal.fire({
        title: userData.id ? "¡Actualizado!" : "¡Creado!",
        text: userData.id
          ? "Perfil actualizado correctamente"
          : "Perfil creado correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      console.error("Error al guardar el perfil:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al guardar el perfil",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  /* 5 ▸ Render */
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white shadow rounded-lg">
      <form onSubmit={handleSubmit}>
        <PersonalInfoSection
          userData={userData}
          handleInputChange={handleInputChange}
        />

        <PlanSelectSection
          userData={userData}
          handleInputChange={handleInputChange}
        />

        <RoleSelectSection
          roles={roles}
          rol={rol}
          userData={userData}
          handleInputChange={handleInputChange}
        />

        <BodyMeasurementsSection
          userData={userData}
          handleInputChange={handleInputChange}
        />

        {/* Activo */}
        <div className="flex items-center mb-8">
          <input
            type="checkbox"
            name="isActive"
            checked={userData.isActive === true}  // ← SOLO true literal marca
            onChange={handleInputChange}
            className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />


          <label className="text-sm font-medium text-gray-700">¿Activo?</label>
        </div>

        {/* Botón Guardar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUsuario;
