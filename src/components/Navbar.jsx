import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú en dispositivos móviles
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      {/* Ícono de hamburguesa (solo en dispositivos móviles) */}
      <div className="md:hidden flex items-center justify-between">
        <button onClick={toggleMenu} className="text-white">
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menú de navegación */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex space-x-4 text-white justify-center`}
      >
        <li>
          <Link to="/" className="hover:text-gray-300">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/contacto" className="hover:text-gray-300">
            Contacto
          </Link>
        </li>
        <li>
          <Link to="/nosotros" className="hover:text-gray-300">
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/planes" className="hover:text-gray-300">
            Planes
          </Link>
        </li>
        <li>
          <Link to="/servicios" className="hover:text-gray-300">
            Servicios
          </Link>
        </li>
        <li>
          <Link to="/testimonios" className="hover:text-gray-300">
            Testimonios
          </Link>
        </li>
        <li>
          <Link to="/registrate" className="hover:text-gray-300">
            Regístrate
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
