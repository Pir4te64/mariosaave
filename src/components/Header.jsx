import React from "react";
import SocialLinks from "./CajaRedesSociales";
import HeaderFooter from "./HeaderFooter";
import img1 from "../assets/img1.png"; // Asegúrate de que la ruta sea correcta

const Header = () => {
  return (
    <>
      <header className="p-6 bg-black h-screen relative">
        {/* Contenedor de Caja 1 y Caja 2 con ancho 80% y centrado */}
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
          {/* Caja 1 */}
          <div className="text-white flex flex-col items-start justify-center h-full p-3 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-softYellow text-left">
              Personal Coach
            </h2>
            <div className="border-l-8 border-softYellow pl-4">
              <h1
                className="text-5xl md:text-7xl font-bold tracking-widest"
                style={{ fontFamily: "Jumper PERSONAL USE ONLY Thin Italic" }}
              >
                Let's Unlock
              </h1>
              <h1
                className="text-3xl md:text-5xl leading-tight italic tracking-wide"
                style={{ fontFamily: "AvertaStd-Thin" }}
              >
                your full power
              </h1>
            </div>

            <p className="text-base md:text-lg font-normal tracking-wide">
              Asesoría exclusiva en ejercicio físico y nutrición, diseñada para
              adaptarse a tu ritmo de vida. Entrena con el método de Mario
              Saave.
            </p>
            <button className="bg-greenmusgo text-white font-semibold px-6 py-2 rounded-sm hover:bg-black hover:border-softYellow hover:text-softYellow border border-transparent">
              Registrarme
            </button>
          </div>

          {/* Caja 2 - Solo en pantallas md en adelante */}
          <div className="flex items-center justify-center h-full hidden md:block">
            <img
              src={img1}
              alt="Header"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* SocialLinks se mantiene fuera del contenedor 80% */}
        <SocialLinks />
      </header>

      <HeaderFooter />
    </>
  );
};

export default Header;
