import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú en dispositivos móviles
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40" // Cambia esto por la URL de tu logo
            alt="Logo"
            className="h-8" // Ajusta el tamaño del logo
          />
        </div>

        {/* Menú de navegación */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-4 text-white justify-center flex-grow`}
        >
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/calendario" className="hover:text-gray-300">
              Calendario
            </Link>
          </li>
          <li>
            <Link to="/dashboard/programas" className="hover:text-gray-300">
              Programas
            </Link>
          </li>
          <li>
            <Link to="/dashboard/retos" className="hover:text-gray-300">
              Retos
            </Link>
          </li>
          <li>
            <Link to="/dashboard/blog" className="hover:text-gray-300">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/dashboard/soporte" className="hover:text-gray-300">
              Soporte
            </Link>
          </li>
        </ul>

        {/* Menú de iconos (solo en escritorio) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Lupa (búsqueda) */}
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 3a8 8 0 11-8 8 8 8 0 018-8zM19 19l-4-4"
              />
            </svg>
          </button>

          {/* Icono de notificaciones */}
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A3.018 3.018 0 0019 13V8a7 7 0 00-14 0v5a3.018 3.018 0 00-1.595 2.595L4 17h5m6 0v1a3 3 0 01-6 0v-1"
              />
            </svg>
          </button>

          {/* Foto del usuario */}
          <img
            src="https://via.placeholder.com/40" // Cambia esto por la URL de la foto del usuario
            alt="Foto del usuario"
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
