import { useState } from "react";
import { Link } from "react-router-dom";
import useStoreLogin from "../../Routes/useStore";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isAuthenticated, logout, setIsAuthenticated } = useStoreLogin();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    setIsAuthenticated(false);
    logout();
  };

  // Cerrar el menú cuando se hace clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="h-8"
          />
        </div>

        {/* Botón de menú hamburguesa (solo en móviles) */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menú de navegación */}
        <ul
          className={`absolute top-16 left-0 w-full bg-gray-800 p-4 text-left md:text-center justify-center space-y-2 text-white md:relative md:top-0 md:flex md:space-x-4 md:p-0 md:space-y-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/dashboard"
              onClick={handleLinkClick} // Cierra el menú al hacer clic
              className="block hover:text-gray-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/calendario"
              onClick={handleLinkClick} // Cierra el menú al hacer clic
              className="block hover:text-gray-300"
            >
              Calendario
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/programas"
              onClick={handleLinkClick} // Cierra el menú al hacer clic
              className="block hover:text-gray-300"
            >
              Programas
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/retos"
              onClick={handleLinkClick} // Cierra el menú al hacer clic
              className="block hover:text-gray-300"
            >
              Retos
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/blog"
              onClick={handleLinkClick} // Cierra el menú al hacer clic
              className="block hover:text-gray-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/soporte"
              onClick={handleLinkClick} // Cierra el menú al hacer clic
              className="block hover:text-gray-300"
            >
              Soporte
            </Link>
          </li>

          {/* Botón Logout en móviles */}
          <li className="md:hidden">
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </li>
          <li className="md:hidden">
            <Link
              to="/dashboard/miplan"
              onClick={handleLinkClick} // Cierra el menú al hacer clic
              className="block w-full px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600"
            >
              Mi plan
            </Link>
          </li>
        </ul>

        {/* Iconos y perfil (solo en escritorio) */}
        <div className="hidden md:flex items-center space-x-4">
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

          {/* Perfil y dropdown */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="Foto del usuario"
              className="rounded-full w-10 h-10 cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg">
                <ul>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      to="/dashboard/miplan"
                      className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                    >
                      Mi plan
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
