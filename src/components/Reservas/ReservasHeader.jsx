import React from "react";

const ReservasHeader = ({ monthFilter, setMonthFilter }) => {
  return (
    <div className='flex items-center justify-between mb-4'>
      <h2 className='text-2xl font-bold text-gray-800'>Reservas</h2>
      <div className='flex items-center'>
        <label htmlFor='monthFilter' className='mr-2 text-gray-700'>
          Filtrar por mes:
        </label>
        <input
          id='monthFilter'
          type='month'
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
          className='p-1 border border-gray-300 rounded'
        />
      </div>
    </div>
  );
};

export default ReservasHeader;
