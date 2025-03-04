const Sobremi = () => {
  return (
    <section className="w-full mt-32 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 md:w-6/12">
        {/* Caja 1 */}
        <div className="bg-blue-500 text-white flex items-center justify-center h-40">
          <h2>Caja 1</h2>
        </div>

        {/* Caja 2 */}
        <div className="bg-green-500 text-white flex items-center justify-center h-40">
          <h2>Caja 2</h2>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
