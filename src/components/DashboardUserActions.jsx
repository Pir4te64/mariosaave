import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Search } from "lucide-react";
import avatar from "../assets/avatar.png"; // Ajusta la ruta según corresponda

const DashboardUserActions = ({
  dropdownOpen,
  toggleDropdown,
  handleLogout,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="hidden md:flex items-center space-x-4">
      {/* Ícono de campana */}
      <button className="hover:text-gray-300">
        <Bell className="w-6 h-6" />
      </button>

      {/* Ícono de búsqueda con input desplegable */}
      <div className="relative">
        {showSearch && (
          <input
            type="text"
            placeholder="Buscar..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="absolute right-8 top-0 w-40 p-1 border rounded-md bg-white text-black"
          />
        )}
        <button className="hover:text-gray-300" onClick={toggleSearch}>
          <Search className="w-6 h-6" />
        </button>
      </div>

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
