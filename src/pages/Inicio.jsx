import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header"; // Asegúrate de importar el Header
import Sobremi from "../components/Sobremi";
import Compromiso from "../components/Compromiso";
import Testimonios from "../components/Testimonios";
import Potencia from "../components/Potencia";
import Resultados from "../components/Resultados";
import Footer from "../components/Footer";

const Inicio = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <Header />
      <Sobremi />
      <Compromiso />
      <Testimonios />
      <Potencia />
      <Resultados />
      <Footer />
    </main>
  );
};

export default Inicio;
