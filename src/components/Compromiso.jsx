const Compromiso = () => {
  return (
    <section className="w-full mt-32 flex justify-center items-center">
      <div className="w-11/12 md:w-4/5 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Nuestro Compromiso
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          malesuada arcu. Aliquam erat volutpat. Mauris facilisis arcu ut ante
          interdum, id tristique sem fermentum. Sed tristique lobortis gravida.
          Phasellus sit amet purus ac orci pretium mollis sit amet euismod
          ipsum. Donec vestibulum arcu ut risus congue, eu sollicitudin eros
          sollicitudin.
        </p>

        {/* Nuevo div con dos secciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primera sección: Dividido en 4 sub-divs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500 text-white flex items-center justify-center h-24">
              <p>Sub Caja 1</p>
            </div>
            <div className="bg-green-500 text-white flex items-center justify-center h-24">
              <p>Sub Caja 2</p>
            </div>
            <div className="bg-yellow-500 text-white flex items-center justify-center h-24">
              <p>Sub Caja 3</p>
            </div>
            <div className="bg-purple-500 text-white flex items-center justify-center h-24">
              <p>Sub Caja 4</p>
            </div>
          </div>

          {/* Segunda sección: Un solo texto */}
          <div className="flex items-center justify-center h-24 bg-gray-300 text-white">
            <p>Texto de la segunda sección, que puede ser más información.</p>
          </div>
        </div>

        {/* Última sección: 4 mini divs con texto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-blue-500 text-white flex items-center justify-center h-20">
            <p>Mini 1</p>
          </div>
          <div className="bg-green-500 text-white flex items-center justify-center h-20">
            <p>Mini 2</p>
          </div>
          <div className="bg-yellow-500 text-white flex items-center justify-center h-20">
            <p>Mini 3</p>
          </div>
          <div className="bg-purple-500 text-white flex items-center justify-center h-20">
            <p>Mini 4</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compromiso;
