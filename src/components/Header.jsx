import SocialLinks from "./CajaRedesSociales";

const Header = () => {
  return (
    <>
      <header className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-black h-screen relative">
        {/* Caja 1 */}
        <div className=" text-white flex flex-col items-start justify-center h-full p-8 space-y-4">
          <h2 className="text-3xl font-bold text-softYellow text-left">
            Personal Coach
          </h2>
          <div className="border-l-8 border-softYellow pl-4">
            <h1
              className="text-7xl font-bold tracking-widest"
              style={{ fontFamily: "Jumper PERSONAL USE ONLY Thin Italic" }}
            >
              Let's Unlock
            </h1>
            <h1
              className="text-5xl  leading-tight italic tracking-wide"
              style={{ fontFamily: "AvertaStd-Thin" }}
            >
              your full power
            </h1>
          </div>

          <p className="text-lg font-normal tracking-wide">
            Asesoría exclusiva en ejercicio físico y nutrición, diseñada para
            adaptarse a tu ritmo de vida. Entrena con el método de Mario Saave.
          </p>
          <button className="bg-greenmusgo text-white font-semibold px-6 py-2 rounded-sm hover:bg-black hover:border-softYellow hover:text-softYellow border border-transparent">
            Registrarme
          </button>
        </div>

        {/* Caja 2 */}
        <div className="bg-green-500 text-white flex items-center justify-center h-full">
          <h1>Caja 2</h1>
        </div>

        <SocialLinks />
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
