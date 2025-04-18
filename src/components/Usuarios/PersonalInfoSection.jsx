// components/Usuarios/PersonalInfoSection.jsx
import React from "react";

const PersonalInfoSection = ({ userData, handleInputChange }) => (
    <fieldset className="mb-8 border-t border-gray-200 pt-4">
        <legend className="text-xl font-bold text-gray-800 mb-4">
            Información Personal
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Ingresa el nombre"
                    value={userData.nombre || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
                />
            </div>

            {/* Apellido */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    placeholder="Ingresa el apellido"
                    value={userData.apellido || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
                />
            </div>

            {/* Teléfono */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input
                    type="text"
                    name="telefono"
                    placeholder="Ingresa el teléfono"
                    value={userData.telefono || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
                />
            </div>

            {/* Edad */}
            <div>
                <label className="block text-sm font-medium text-gray-700">Edad</label>
                <input
                    type="number"
                    name="edad"
                    placeholder="Ingresa la edad"
                    value={userData.edad || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
                />
            </div>
        </div>
    </fieldset>
);

export default PersonalInfoSection;
