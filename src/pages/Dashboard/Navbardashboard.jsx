import { useState } from "react";
import { Link } from "react-router-dom";
import useStoreLogin from "../../Routes/useStore";
// Si tienes un logo real, impórtalo:
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

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

  return (
    <nav className="bg-black text-white p-6">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Sección Izquierda: Logo / Marca */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Menú de navegación (versión escritorio) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">
              Inicio
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

        {/* Sección Derecha (versión escritorio): íconos + dropdown de usuario */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Ícono de notificaciones */}
          <button className="hover:text-gray-300">
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
                d="M15 17h5l-1.405-1.405A3.018 3.018 0 0019 13V8a7 
                  7 0 00-14 0v5a3.018 3.018 0 00-1.595 2.595L4 17h5
                  m6 0v1a3 3 0 01-6 0v-1"
              />
            </svg>
          </button>

          {/* Ícono de búsqueda */}
          <button className="hover:text-gray-300">
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
                d="M11 3a8 8 0 11-8 8 8 
                   8 0 018-8zM19 19l-4-4"
              />
            </svg>
          </button>

          {/* Avatar con dropdown */}
          <div className="relative">
            <img
              src={avatar}
              alt="Foto del usuario"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md z-10">
                <ul className="py-1">
                  <li>
                    <Link
                      to="/dashboard/miplan"
                      className="block px-4 py-2 hover:bg-greenmusgo hover:text-white"
                    >
                      Mi plan
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-greenmusgo hover:text-white"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Botón Hamburguesa (móvil) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable (versión móvil) */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          <ul className="space-y-2 mt-2">
            <li>
              <Link to="/dashboard" className="block hover:text-gray-300">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/calendario"
                className="block hover:text-gray-300"
              >
                Calendario
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/programas"
                className="block hover:text-gray-300"
              >
                Programas
              </Link>
            </li>
            <li>
              <Link to="/dashboard/retos" className="block hover:text-gray-300">
                Retos
              </Link>
            </li>
            <li>
              <Link to="/dashboard/blog" className="block hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/soporte"
                className="block hover:text-gray-300"
              >
                Soporte
              </Link>
            </li>
            <li className="border-t border-gray-700 pt-2">
              <Link
                to="/dashboard/miplan"
                className="block hover:text-gray-300"
              >
                Mi plan
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block text-left hover:text-gray-300"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
