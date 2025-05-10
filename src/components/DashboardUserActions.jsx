import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell, Search } from "lucide-react";
import axios from "axios";
import avatar from "@/assets/avatar.png";
import { APIURL } from "@/utils/api";

const DashboardUserActions = ({
  dropdownOpen,
  toggleDropdown,
  handleLogout,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const navigate = useNavigate();

  // Alterna el menú de notificaciones
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  // Función para manejar el clic en una notificación:
  // Redirige y cierra el menú de notificaciones.
  const handleNotificationClick = () => {
    navigate("/dashboard/calendario");
    setShowNotifications(false);
  };

  // Obtiene las notificaciones de reservas pendientes
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      axios
        .get(APIURL.listar_reservas_pendientes, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // Se asume que la respuesta tiene la propiedad 'reservas'
          setNotifications(response.data.reservas);
        })
        .catch((error) => {
          console.error("Error fetching pending reservations:", error);
        });
    } else {
      console.warn("No se encontró token en localStorage");
    }
  }, []);

  return (
    <div className='hidden items-center space-x-4 md:flex'>
      {/* Ícono de campana con submenu de notificaciones */}
      <div className='relative'>
        <button
          onClick={toggleNotifications}
          className='relative hover:text-gray-300'>
          <Bell className='h-6 w-6' />
          {/* Muestra un punto si hay notificaciones pendientes y el menú está cerrado */}
          {notifications.length > 0 && !showNotifications && (
            <span className='absolute right-0 top-0 block h-2 w-2 rounded-full bg-red-500'></span>
          )}
        </button>
        {showNotifications && (
          <div className='absolute right-0 z-10 mt-2 w-64 rounded-md bg-white text-gray-800 shadow-lg'>
            {notifications.length > 0 ? (
              <ul className='py-1'>
                {notifications.map((notification, index) => {
                  // Se utiliza el alumno o, en su defecto, el profesor para obtener nombre y apellido
                  const displayName = notification.alumno?.perfil
                    ? `${notification.alumno.perfil.nombre} ${notification.alumno.perfil.apellido}`
                    : `${notification.profesor?.perfil?.nombre} ${notification.profesor?.perfil?.apellido}`;

                  return (
                    <li
                      key={index}
                      onClick={handleNotificationClick}
                      className='cursor-pointer px-4 py-2 hover:bg-greenmusgo hover:text-white'>
                      <span className='font-semibold text-yellow-600'>
                        {displayName}
                      </span>{" "}
                      - {notification.estado}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className='px-4 py-2'>No hay notificaciones.</div>
            )}
          </div>
        )}
      </div>

      {/* Avatar con dropdown */}
      <div className='relative'>
        <img
          src={avatar}
          alt='Foto del usuario'
          className='h-8 w-8 cursor-pointer rounded-full'
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className='absolute right-0 z-10 mt-2 w-48 rounded-md bg-white text-gray-800 shadow-lg'>
            <ul className='py-1'>
            
              <li>
                <button
                  onClick={handleLogout}
                  className='block w-full px-4 py-2 text-left hover:bg-greenmusgo hover:text-white'>
                  Salir
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardUserActions;
