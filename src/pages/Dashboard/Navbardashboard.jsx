import { useState } from "react";
import { Link } from "react-router-dom";
import useStoreLogin from "../../Routes/useStore";
// Si tienes un logo real, impórtalo:
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import DashboardUserActions from "../../components/DashboardUserActions";

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
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Sección Izquierda: Logo / Marca */}
        <div className="flex items-center space-x-2">
          <Link to="/dashboard">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
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
        <DashboardUserActions
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleLogout={handleLogout}
        />
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
      <div
        className={`md:hidden bg-black px-4 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
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
            <Link to="/dashboard/soporte" className="block hover:text-gray-300">
              Soporte
            </Link>
          </li>
          <li className="border-t border-gray-700 pt-2">
            <Link to="/dashboard/miplan" className="block hover:text-gray-300">
              Mi plan
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="block text-left hover:text-gray-300"
            >
              Salir
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
