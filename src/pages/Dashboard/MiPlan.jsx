import React from "react";

const MiPlan = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2 sm:mb-0">
            Plan de suscripción
          </h1>
          <a
            href="#"
            className="text-greenmusgo hover:underline text-base sm:text-lg"
          >
            Ver calendario
          </a>
        </div>

        {/* Tarjeta de plan actual */}
        <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center border-l-8 border-l-greenmusgo">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-700 mb-1">
              <strong>Plan actual:</strong> Plan Venta Online
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Frecuencia de pago:</strong> Trimestral
            </p>
            <p className="text-gray-700">
              <strong>Importe de la próxima transacción:</strong> 99€ + IVA
            </p>
          </div>
          <button className="px-5 py-2 bg-greenmusgo text-white rounded-md hover:bg-softYellow hover:text-black transition-colors">
            Cambiar de plan
          </button>
        </div>

        {/* Historial de facturación */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Historial de facturación
        </h2>

        {/* Contenedor de la tabla con scroll horizontal en mobile */}
        <div className="bg-white shadow-sm rounded-lg overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-gray-600 font-medium text-sm sm:text-base">
                  Fecha
                </th>
                <th className="px-4 py-3 text-gray-600 font-medium text-sm sm:text-base">
                  Tipo
                </th>
                <th className="px-4 py-3 text-gray-600 font-medium text-sm sm:text-base">
                  Cantidad
                </th>
                <th className="px-4 py-3 text-gray-600 font-medium text-sm sm:text-base">
                  Estado
                </th>
                <th className="px-4 py-3 text-gray-600 font-medium text-sm sm:text-base">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-0 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-sm sm:text-base">
                      DD/MM/YYYY
                    </td>
                    <td className="px-4 py-3 text-sm sm:text-base">
                      Suscripción
                    </td>
                    <td className="px-4 py-3 text-sm sm:text-base">140€</td>
                    <td className="px-4 py-3 text-sm sm:text-base">
                      {index % 2 === 0 ? "ACTIVO" : "PENDIENTE"}
                    </td>
                    <td className="px-4 py-3 text-sm sm:text-base">
                      <button className="px-3 py-1 bg-greenmusgo text-white rounded-md hover:bg-softYellow hover:text-black">
                        Ver factura
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MiPlan;
