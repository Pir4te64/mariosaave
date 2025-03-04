import React from "react";

const FormularioRegistro = () => {
  return (
    <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Registro de Usuario
      </h2>
      <form className="space-y-4">
        {/* Nombre completo */}
        <div>
          <label className="block text-gray-700">Nombre Completo</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu nombre completo"
          />
        </div>

        {/* Edad */}
        <div>
          <label className="block text-gray-700">Edad</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu edad"
          />
        </div>

        {/* Peso */}
        <div>
          <label className="block text-gray-700">Peso (kg)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: 70"
          />
        </div>

        {/* Altura */}
        <div>
          <label className="block text-gray-700">Altura (cm)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: 175"
          />
        </div>

        {/* Metas de entrenamiento */}
        <div>
          <label className="block text-gray-700">Metas de Entrenamiento</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: Bajar de peso, ganar músculo..."
          />
        </div>

        {/* Actividad actual */}
        <div>
          <label className="block text-gray-700">Actividad Actual</label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Selecciona tu nivel de actividad</option>
            <option value="sedentario">Sedentario</option>
            <option value="ligero">Ejercicio ligero</option>
            <option value="moderado">Ejercicio moderado</option>
            <option value="intenso">Ejercicio intenso</option>
          </select>
        </div>

        {/* Disponibilidad horaria */}
        <div>
          <label className="block text-gray-700">Disponibilidad Horaria</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: Mañanas, tardes, noches..."
          />
        </div>

        {/* Inversión en sí mismo */}
        <div>
          <label className="block text-gray-700">
            ¿Cuánto estás interesado en invertir en ti?
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: $50, $100, más..."
          />
        </div>

        {/* Botón de enviar */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Enviar Información
        </button>
      </form>
    </div>
  );
};

export default FormularioRegistro;
