import React from "react";

const MiPlan = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Plan de suscripción
        </h1>
        <div className="bg-gray-50 p-4 rounded-lg border mb-6">
          <p>
            <strong>Plan actual:</strong> Plan Venta Online
          </p>
          <p>
            <strong>Frecuencia de pago:</strong> Trimestral
          </p>
          <p>
            <strong>Importe de la próxima transacción:</strong> 99€ + IVA
          </p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Cambiar de plan
          </button>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Historial de facturación
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-sm sm:text-base">
                  Fecha
                </th>
                <th className="border border-gray-300 p-2 text-sm sm:text-base">
                  Tipo
                </th>
                <th className="border border-gray-300 p-2 text-sm sm:text-base">
                  Cantidad
                </th>
                <th className="border border-gray-300 p-2 text-sm sm:text-base">
                  Estado
                </th>
                <th className="border border-gray-300 p-2 text-sm sm:text-base">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 p-2 text-sm sm:text-base">
                      DD/MM/YYYY
                    </td>
                    <td className="border border-gray-300 p-2 text-sm sm:text-base">
                      Suscripción
                    </td>
                    <td className="border border-gray-300 p-2 text-sm sm:text-base">
                      140€
                    </td>
                    <td className="border border-gray-300 p-2 text-sm sm:text-base">
                      {index % 2 === 0 ? "ACTIVO" : "PENDIENTE"}
                    </td>
                    <td className="border border-gray-300 p-2 text-sm sm:text-base">
                      <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm sm:text-base">
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
