import React from "react";

const RoleSelectSection = ({ roles = [], userData, rol, handleInputChange }) => {
    /* ─── Nombre del rol actual ─── */
    const currentRoleName =
        // 1) Encuéntralo en la lista de roles si ya llegó
        roles.find((r) => String(r.RolID) === String(userData.rol))?.nombre ||
        // 2) Si aún no, usa la prop `rol` que ya viene del usuario
        rol?.nombre ||
        // 3) Fallback
        "Sin rol";

    /* ─── Opciones para cambiar ───  (solo activos) */
    const roleOptions = roles.filter((r) => r.isActive);

    return (
        <div className="mb-8">
            {/* Rol actual en modo lectura */}
            <div className="mb-2 text-sm">
                <span className="font-medium text-gray-700">Rol actual:</span>{" "}
                <span className="text-gray-900">{currentRoleName}</span>
            </div>

            {/* Select para cambiar rol */}
            <label className="block text-sm font-medium text-gray-700">
                Cambiar rol
            </label>
            <select
                name="rol"
                value={userData.rol || ""}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-150"
            >
                <option value="">Seleccione un nuevo rol</option>
                {roleOptions.map((r) => (
                    <option key={r.RolID} value={String(r.RolID)}>
                        {r.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RoleSelectSection;
