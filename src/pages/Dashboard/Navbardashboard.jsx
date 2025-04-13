import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStoreLogin from "@/Routes/useStore";
import logo from "@/assets/Logo.png";
import DashboardUserActions from "@/components/DashboardUserActions";
// Nota: La importación de jwt-decode no se usa aquí ya que asumimos que
// el token decodificado ya fue guardado en el storage.

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [decodedToken, setDecodedToken] = useState(null);
  const { isAuthenticated, logout, setIsAuthenticated } = useStoreLogin();

  // Obtención del token decodificado almacenado en localStorage o sessionStorage
  useEffect(() => {
    let storedDecoded = localStorage.getItem("decodedToken");
    if (!storedDecoded) {
      storedDecoded = sessionStorage.getItem("decodedToken");
    }
    if (storedDecoded) {
      try {
        const tokenObj = JSON.parse(storedDecoded);
        setDecodedToken(tokenObj);
      } catch (err) {
        console.error("Error parseando el token decodificado:", err);
      }
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    setIsAuthenticated(false);
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("decodedToken");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("decodedToken");
  };

  return (
    <nav className='bg-black text-white p-4'>
      <div className='max-w-7xl mx-auto px-4 py-2 flex items-center justify-between'>
        {/* Sección Izquierda: Logo / Marca */}
        <div className='flex items-center space-x-2'>
          <Link to='/dashboard'>
            <img src={logo} alt='Logo' className='h-8 w-auto' />
          </Link>
        </div>

        {/* Menú de navegación (versión escritorio) */}
        <ul className='hidden md:flex space-x-6'>
          <li>
            <Link to='/dashboard' className='hover:text-gray-300'>
              Inicio
            </Link>
          </li>
          <li>
            <Link to='/dashboard/calendario' className='hover:text-gray-300'>
              Calendario
            </Link>
          </li>
          <li>
            <Link to='/dashboard/programas' className='hover:text-gray-300'>
              Programas
            </Link>
          </li>
          <li>
            <Link to='/dashboard/retos' className='hover:text-gray-300'>
              Retos
            </Link>
          </li>
          <li>
            <Link to='/dashboard/blog' className='hover:text-gray-300'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/dashboard/soporte' className='hover:text-gray-300'>
              Soporte
            </Link>
          </li>
          {/* Si role_id es 4, se muestra el botón "Horarios" */}
          {decodedToken && decodedToken.role_id === 4 && (
            <li>
              <Link to='/dashboard/horarios' className='hover:text-gray-300'>
                Horarios
              </Link>
            </li>
          )}
          {/* Si role_id es 1, se muestra la pestaña "Usuarios" */}
          {decodedToken && decodedToken.role_id === 1 && (
            <li>
              <Link to='/dashboard/usuarios' className='hover:text-gray-300'>
                Usuarios
              </Link>
            </li>
          )}
          {/* También, si role_id es 1, se puede mostrar otra pestaña, por ejemplo "Reservas" */}
          {decodedToken && decodedToken.role_id === 1 && (
            <li>
              <Link to='/dashboard/reservas' className='hover:text-gray-300'>
                Reservas
              </Link>
            </li>
          )}
        </ul>

        {/* Sección Derecha (versión escritorio): íconos + dropdown de usuario */}
        <DashboardUserActions
          dropdownOpen={dropdownOpen}
          toggleDropdown={toggleDropdown}
          handleLogout={handleLogout}
        />

        {/* Botón Hamburguesa (versión móvil) */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable (versión móvil) */}
      <div
        className={`md:hidden bg-black px-4 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}>
        <ul className='space-y-2 mt-2'>
          <li>
            <Link to='/dashboard' className='block hover:text-gray-300'>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard/calendario'
              className='block hover:text-gray-300'>
              Calendario
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard/programas'
              className='block hover:text-gray-300'>
              Programas
            </Link>
          </li>
          <li>
            <Link to='/dashboard/retos' className='block hover:text-gray-300'>
              Retos
            </Link>
          </li>
          <li>
            <Link to='/dashboard/blog' className='block hover:text-gray-300'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/dashboard/soporte' className='block hover:text-gray-300'>
              Soporte
            </Link>
          </li>
          {/* Versión móvil: botón "Horarios" si role_id es 4 */}
          {decodedToken && decodedToken.role_id === 4 && (
            <li>
              <Link
                to='/dashboard/horarios'
                className='block hover:text-gray-300'>
                Horarios
              </Link>
            </li>
          )}
          {/* Versión móvil: pestaña "Usuarios" si role_id es 1 */}
          {decodedToken && decodedToken.role_id === 1 && (
            <li>
              <Link
                to='/dashboard/usuarios'
                className='block hover:text-gray-300'>
                Usuarios
              </Link>
            </li>
          )}
          {/* Versión móvil: botón "Reservas" si role_id es 1 */}
          {decodedToken && decodedToken.role_id === 1 && (
            <li>
              <Link
                to='/dashboard/reservas'
                className='block hover:text-gray-300'>
                Reservas
              </Link>
            </li>
          )}
          <li className='border-t border-gray-700 pt-2'>
            <Link to='/dashboard/miplan' className='block hover:text-gray-300'>
              Mi plan
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className='block text-left hover:text-gray-300'>
              Salir
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
