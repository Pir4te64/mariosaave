import React from "react";

const EditHorarioForm = ({
  horarioData,
  handleChange,
  handleTimeChange,
  handleSubmit,
  hours,
  minutes,
  cancelEdit,
}) => {
  return (
    <div className='mt-8 border p-4 rounded'>
      <h3 className='text-xl font-bold text-gray-800 mb-4'>Editar Horario</h3>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Grupo de selección de horas */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Hora Inicio */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Hora Inicio:
            </label>
            <div className='flex space-x-2'>
              <select
                value={horarioData.hora_inicio.split(":")[0]}
                onChange={(e) =>
                  handleTimeChange("hora_inicio", "hour", e.target.value)
                }
                className='p-2 border border-gray-300 rounded-md w-full'>
                {hours.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
              <select
                value={horarioData.hora_inicio.split(":")[1]}
                onChange={(e) =>
                  handleTimeChange("hora_inicio", "minute", e.target.value)
                }
                className='p-2 border border-gray-300 rounded-md w-full'>
                {minutes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Hora Fin */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Hora Fin:
            </label>
            <div className='flex space-x-2'>
              <select
                value={horarioData.hora_fin.split(":")[0]}
                onChange={(e) =>
                  handleTimeChange("hora_fin", "hour", e.target.value)
                }
                className='p-2 border border-gray-300 rounded-md w-full'>
                {hours.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
              <select
                value={horarioData.hora_fin.split(":")[1]}
                onChange={(e) =>
                  handleTimeChange("hora_fin", "minute", e.target.value)
                }
                className='p-2 border border-gray-300 rounded-md w-full'>
                {minutes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Campo para la Fecha */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Fecha:
          </label>
          <input
            type='date'
            name='fecha'
            value={horarioData.fecha}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded-md w-full'
            required
          />
        </div>

        {/* Checkbox de estado */}
        <div className='flex items-center'>
          <input
            type='checkbox'
            name='isActive'
            checked={horarioData.isActive}
            onChange={handleChange}
            className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
          />
          <label className='ml-2 block text-sm text-gray-900'>
            Bloquear Horario
          </label>
        </div>

        {/* Botones */}
        <div className='flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0'>
          <button
            type='submit'
            className='px-4 py-2 bg-greenmusgo text-white rounded-md hover:bg-greenmusgo/80'>
            Guardar Cambios
          </button>
          <button
            type='button'
            onClick={cancelEdit}
            className='px-4 py-2 bg-softYellow text-black rounded-md hover:bg-softYellow/80 border border-grennmusgo'>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditHorarioForm;
