const Header = () => {
  return (
    <>
      <header className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-red-500 h-screen relative">
        {/* Caja 1 */}
        <div className="bg-blue-500 text-white flex items-center justify-center h-full">
          <h1>Caja 1</h1>
        </div>

        {/* Caja 2 */}
        <div className="bg-green-500 text-white flex items-center justify-center h-full">
          <h1>Caja 2</h1>
        </div>

        {/* Caja flotante en el margen derecho */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg md:w-64 w-3/4">
          <h2 className="text-xl font-semibold">Caja de Redes</h2>
        </div>
      </header>

      {/* Nuevas cajas fuera del Header, centradas en la parte inferior */}
      <div className="w-full flex justify-center items-center -mt-20 z-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5">
          {/* Caja 3 */}
          <div className="bg-yellow-500 text-white flex items-center justify-center h-32">
            <h2>Caja 3</h2>
          </div>

          {/* Caja 4 */}
          <div className="bg-purple-500 text-white flex items-center justify-center h-32">
            <h2>Caja 4</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
