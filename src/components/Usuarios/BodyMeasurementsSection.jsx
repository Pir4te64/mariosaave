// components/Usuarios/BodyMeasurementsSection.jsx
import React from "react";

const BodyMeasurementsSection = ({ userData, handleInputChange }) => {
    const fields = [
        { name: "altura", label: "Altura (m)", step: "0.01" },
        { name: "peso", label: "Peso (kg)" },
        { name: "cintura", label: "Cintura (cm)" },
        { name: "pecho", label: "Pecho (cm)" },
        { name: "brazos", label: "Brazos (cm)" },
        { name: "piernas", label: "Piernas (cm)" },
        { name: "muslo", label: "Muslo (cm)" },
        { name: "cadera", label: "Cadera (cm)" },
        { name: "cuello", label: "Cuello (cm)" },
    ];

    return (
        <fieldset className="mb-8 border-t border-gray-200 pt-4">
            <legend className="text-xl font-bold text-gray-800 mb-4">
                Medidas Corporales
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fields.map(({ name, label, step }) => (
                    <div key={name}>
                        <label className="block text-sm font-medium text-gray-700">
                            {label}
                        </label>
                        <input
                            type="number"
                            name={name}
                            step={step}
                            placeholder={`Ingresa la medida de ${label.toLowerCase()}`}
                            value={userData[name] || ""}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
                        />
                    </div>
                ))}
            </div>
        </fieldset>
    );
};

export default BodyMeasurementsSection;
