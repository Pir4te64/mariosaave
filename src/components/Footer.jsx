import React from "react";
import logo from "../assets/react.svg"; // Asegúrate de tener el logo en la ruta correcta

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-12">
      {/* Fila superior */}
      <div className="w-11/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        {/* Caja 1 */}
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Caja 1</h3>
            <p className="text-sm">
              Contenido de la primera caja, puede incluir enlaces o información
              adicional.
            </p>
          </div>
        </div>

        {/* Caja 2 */}
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Caja 2</h3>
            <p className="text-sm">
              Contenido de la segunda caja, puede incluir enlaces o información
              adicional.
            </p>
          </div>
        </div>
      </div>

      {/* Fila inferior */}
      <div className="w-11/12 md:w-4/5 mx-auto mt-8 text-center">
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-sm">© 2025 Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
