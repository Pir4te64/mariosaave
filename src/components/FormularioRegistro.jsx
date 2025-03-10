import React from "react";

const FormularioRegistro = () => {
  return (
    <div className="w-full max-w-lg mx-auto bg-neutral-900 p-8 rounded-lg shadow-md">
      {/* Título */}
      <h2 className="text-3xl font-semibold text-white mb-6 text-left">
        ¡Bienvenido!
      </h2>

      <form className="space-y-6">
        {/* Nombre completo */}
        <div>
          <label className="block text-gray-300 mb-1">Nombre completo</label>
          <input
            type="text"
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                       rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu nombre completo"
          />
        </div>

        {/* Fila con 3 inputs: Edad, Peso, Altura */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Edad */}
          <div>
            <label className="block text-gray-300 mb-1">Edad</label>
            <input
              type="number"
              className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu edad"
            />
          </div>
          {/* Peso */}
          <div>
            <label className="block text-gray-300 mb-1">Peso (kg)</label>
            <input
              type="number"
              className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: 70"
            />
          </div>
          {/* Altura */}
          <div>
            <label className="block text-gray-300 mb-1">Altura (cm)</label>
            <input
              type="number"
              className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej: 175"
            />
          </div>
        </div>

        {/* Metas de entrenamiento (select) */}
        <div>
          <label className="block text-gray-300 mb-1">
            Metas de entrenamiento
          </label>
          <select
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                       rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecciona tu meta</option>
            <option value="bajar">Bajar de peso</option>
            <option value="ganar">Ganar músculo</option>
            <option value="resistencia">Mejorar resistencia</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Nivel de actividad actual */}
        <div>
          <label className="block text-gray-300 mb-1">
            Nivel de actividad actual
          </label>
          <select
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                       rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecciona tu nivel de actividad</option>
            <option value="sedentario">Sedentario</option>
            <option value="ligero">Ejercicio ligero</option>
            <option value="moderado">Ejercicio moderado</option>
            <option value="intenso">Ejercicio intenso</option>
          </select>
        </div>

        {/* Disponibilidad horaria */}
        <div>
          <label className="block text-gray-300 mb-1">
            Disponibilidad horaria
          </label>
          <select
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                       rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecciona tu disponibilidad</option>
            <option value="mananas">Mañanas</option>
            <option value="tardes">Tardes</option>
            <option value="noches">Noches</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        {/* Inversión en ti */}
        <div>
          <label className="block text-gray-300 mb-1">
            ¿Cuánto estás interesado en invertir en ti?
          </label>
          <select
            className="w-full p-2 bg-neutral-800 text-white border border-neutral-700 
                       rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecciona un rango</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="200">$200</option>
            <option value="mas">Más</option>
          </select>
        </div>

        {/* Botón de enviar */}
        <button
          type="submit"
          className="w-full bg-greenmusgo text-white py-2 rounded-md 
                     hover:bg-softYellow hover:text-black transition duration-300"
        >
          Enviar información
        </button>
      </form>
    </div>
  );
};

export default FormularioRegistro;
