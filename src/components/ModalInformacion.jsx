// ModalInformacion.jsx
import React from "react";
import moment from "moment";

const ModalInformacion = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-xl overflow-hidden transform transition-all">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {event.title}
          </h2>
          <div className="mb-3">
            <span className="font-medium text-gray-600">Inicio:</span>
            <span className="ml-2 text-gray-700">
              {moment(event.start).format("DD MMM YYYY, h:mm A")}
            </span>
          </div>
          <div className="mb-3">
            <span className="font-medium text-gray-600">Fin:</span>
            <span className="ml-2 text-gray-700">
              {moment(event.end).format("DD MMM YYYY, h:mm A")}
            </span>
          </div>
          <div className="mb-4">
            <span className="font-medium text-gray-600">Tipo:</span>
            <span className="ml-2 text-gray-700">
              {event.type === "private" ? "Clase Privada" : "Clase Grupal"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-greenmusgo hover:bg-softYellow text-white hover:text-black font-medium rounded-lg transition duration-200"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalInformacion;
