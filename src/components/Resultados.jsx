import React from "react";
import AD1 from "../assets/AD1.png";
import AD2 from "../assets/AD2.png";
import AD3 from "../assets/AD3.png";
import CajaResultados from "./CajaResultados";
const Resultados = () => {
  return (
    <section className="w-full my-20 flex justify-center items-center">
      <div className="w-11/12 md:w-4/5 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Transformaciones reales, resultados visibles...
        </h2>

        {/* Sección con 3 cajas horizontales */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Caja 1 */}
          <CajaResultados img={AD1} />
          {/* Caja 2 */}
          <CajaResultados img={AD2} />
          {/* Caja 3 */}
          <CajaResultados img={AD3} />
        </div>
      </div>
    </section>
  );
};

export default Resultados;
