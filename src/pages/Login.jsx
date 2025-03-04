import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Iniciar Sesión
      </h2>
      <form className="space-y-4">
        {/* Correo */}
        <div>
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu correo"
          />
        </div>

        {/* Contraseña */}
        <div>
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu contraseña"
          />
          <Link
            to="/restablacerpassword"
            className="text-blue-500 text-sm mt-2 inline-block"
          >
            ¿No sabes tu contraseña?
          </Link>
        </div>

        {/* Recordar contraseña */}
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">Recordar contraseña</label>
        </div>

        {/* Botón de enviar */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Enviar Información
        </button>
      </form>

      {/* Registrarse */}
      <p className="text-center text-gray-600 mt-4">
        ¿Aún no tienes cuenta?{" "}
        <Link to="/registrate" className="text-blue-500 font-semibold">
          Regístrate aquí
        </Link>
      </p>

      {/* Redes sociales */}
      <div className="mt-6 flex justify-center space-x-4">
        <button className="bg-blue-600 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
          🔵
        </button>
        <button className="bg-red-600 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
          🔴
        </button>
        <button className="bg-black text-white p-2 rounded-full w-12 h-12 flex items-center justify-center">
          ⚫
        </button>
      </div>
    </div>
  );
};

export default Login;
