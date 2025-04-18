import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useStoreLogin from "@/Routes/useStore";
import logo from "@/assets/Logo.png"; // Asegúrate de que la ruta sea correcta

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout, setIsAuthenticated } = useStoreLogin();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    setIsAuthenticated(false);

    // Eliminamos la información de autenticación del localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    localStorage.removeItem("decodedToken");

    // También eliminamos la información del sessionStorage
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("decodedToken");

    logout();
  };

  // Efecto para hacer scroll suave a la sección correspondiente si hay un hash en la URL
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className='bg-black p-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo a la izquierda */}
        <div className='flex-shrink-0'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='h-10' />
          </Link>
        </div>

        {/* Menú de navegación (versión escritorio) */}
        <ul className='hidden md:flex space-x-10 text-white items-center'>
          <li>
            <Link to='/' className='hover:text-gray-300'>
              Inicio
            </Link>
          </li>
          <li>
            <HashLink smooth to='/#nosotros' className='hover:text-gray-300'>
              Nosotros
            </HashLink>
          </li>
          <li>
            <HashLink smooth to='/#servicios' className='hover:text-gray-300'>
              Servicios
            </HashLink>
          </li>
          <li>
            <HashLink smooth to='/#testimonios' className='hover:text-gray-300'>
              Testimonios
            </HashLink>
          </li>
          <li>
            <HashLink smooth to='/#contacto' className='hover:text-gray-300'>
              Contacto
            </HashLink>
          </li>
          <li>
            <Link to='/planes' className='hover:text-gray-300'>
              Planes
            </Link>
          </li>
          <li>
            {!isAuthenticated ? (
              <div className='flex space-x-6 items-center'>
                <Link
                  to='/registrate'
                  className='text-softYellow font-semibold hover:bg-softYellow hover:text-black px-6 py-3 rounded-md'>
                  Regístrate
                </Link>
                <Link
                  to='/login'
                  className='bg-softYellow text-black px-6 py-3 rounded-md font-semibold hover:bg-black hover:border-softYellow hover:text-softYellow'>
                  Ingresar
                </Link>
              </div>
            ) : (
              <div className='flex space-x-4'>
                <Link to='/dashboard' className='hover:text-gray-300'>
                  Dashboard
                </Link>
                <Link
                  onClick={handleLogout}
                  className='hover:text-gray-300 hover:bg-gray-800 px-4  rounded-md text-white font-semibold'>
                  Salir
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Botón hamburguesa en móviles */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable en móviles (animado) */}
      <ul
        className={`
          md:hidden 
          transition-all duration-500 ease-in-out 
          transform origin-top
          space-y-2 text-white mt-4 
          overflow-hidden
          ${
            isOpen
              ? "max-h-96 opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          }
        `}>
        <li>
          <Link
            to='/'
            className='block p-2 hover:text-gray-300'
            onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
        </li>
        <li>
          <HashLink
            smooth
            to='/#nosotros'
            className='block p-2 hover:text-gray-300'
            onClick={() => setIsOpen(false)}>
            Nosotros
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to='/#servicios'
            className='block p-2 hover:text-gray-300'
            onClick={() => setIsOpen(false)}>
            Servicios
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to='/#testimonios'
            className='block p-2 hover:text-gray-300'
            onClick={() => setIsOpen(false)}>
            Testimonios
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to='/#contacto'
            className='block p-2 hover:text-gray-300'
            onClick={() => setIsOpen(false)}>
            Contacto
          </HashLink>
        </li>
        <li>
          <Link
            to='/planes'
            className='block p-2 hover:text-gray-300'
            onClick={() => setIsOpen(false)}>
            Planes
          </Link>
        </li>
        {!isAuthenticated ? (
          <>
            <li>
              <Link
                to='/registrate'
                className='block p-2 text-softYellow font-semibold hover:text-black hover:bg-softYellow hover:rounded-md'
                onClick={() => setIsOpen(false)}>
                Regístrate
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='block p-2 bg-softYellow text-black px-4 py-2 rounded-md font-semibold hover:bg-black hover:text-softYellow'
                onClick={() => setIsOpen(false)}>
                Ingresar
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to='/dashboard'
                className='block p-2 hover:text-gray-300'
                onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className='block p-2 hover:text-gray-300'>
                Salir
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
