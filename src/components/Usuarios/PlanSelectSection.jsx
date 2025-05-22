// components/Usuarios/PlanSelectSection.jsx
import React from "react";

const PlanSelectSection = ({ userData, handleInputChange }) => (
    <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700">
            Plan Contratado
        </label>

        <select
            name="plan_contratado"
            value={userData.plan_contratado || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
        >
            <option value="">Seleccione un plan</option>
            <option value="Plan Básico">Plan Básico</option>
            <option value="Plan Together">Plan Together</option>
            <option value="Plan Squad">Plan Squad</option>
            <option value="Plan Personal">Plan Personal</option>
        </select>
    </div>
);

export default PlanSelectSection;
