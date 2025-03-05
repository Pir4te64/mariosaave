import React from "react";
import Header from "../components/Header"; // Asegúrate de importar el Header
import Sobremi from "../components/Sobremi";
import Compromiso from "../components/Compromiso";
import Testimonios from "../components/Testimonios";
import Potencia from "../components/Potencia";
import Resultados from "../components/Resultados";

const Inicio = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col overflow-x-hidden">
      <Header />
      <Sobremi />
      <Compromiso />
      <Testimonios />
      <Potencia />
      <Resultados />
    </main>
  );
};

export default Inicio;
