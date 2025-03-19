import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStoreLogin from "../Routes/useStore";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { APIURL, apikey } from "../utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false); // Estado para "Recordar contraseña"
  const { setIsAuthenticated } = useStoreLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(APIURL.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: apikey,
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Respuesta del servidor:", data);
        // Si "Recordar contraseña" está marcado, usamos localStorage;
        // de lo contrario, usamos sessionStorage.
        if (remember) {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("isAuthenticated", "true");
        } else {
          sessionStorage.setItem("access_token", data.access_token);
          sessionStorage.setItem("isAuthenticated", "true");
        }
        setIsAuthenticated(true);
        navigate("/dashboard");
      } else {
        alert("Correo o contraseña incorrectos.");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Error al enviar datos.");
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-black'>
      <div className='w-full max-w-md bg-neutral-900 p-8 rounded-lg shadow-md'>
        {/* Título */}
        <h2 className='text-3xl text-white mb-6 text-left'>¡Bienvenido!</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Correo */}
          <div>
            <label className='block text-gray-300 mb-1'>Correo</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Ingresa tu correo'
              required
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className='block text-gray-300 mb-1'>Contraseña</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 bg-neutral-800 text-white border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Ingresa tu contraseña'
              required
            />
          </div>

          {/* Recordar contraseña y enlace de recuperación */}
          <div className='flex items-center justify-between'>
            <label className='flex items-center text-gray-400'>
              <input
                type='checkbox'
                className='mr-2'
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Recordar contraseña
            </label>
            <Link
              to='/restablacerpassword'
              className='text-greenmusgo hover:underline text-sm'>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Botón de envío */}
          <button
            type='submit'
            className='w-full bg-greenmusgo text-white py-2 rounded-md hover:bg-softYellow hover:text-black transition duration-300'>
            Enviar información
          </button>
        </form>

        {/* Botones/Íconos de redes sociales */}
        {/* <div className='flex justify-center space-x-4 mt-4'>
          <button className='bg-neutral-800 p-2 rounded-full hover:bg-neutral-700'>
            <FaGoogle className='text-white w-5 h-5' />
          </button>
          <button className='bg-neutral-800 p-2 rounded-full hover:bg-neutral-700'>
            <FaFacebook className='text-white w-5 h-5' />
          </button>
          <button className='bg-neutral-800 p-2 rounded-full hover:bg-neutral-700'>
            <FaInstagram className='text-white w-5 h-5' />
          </button>
        </div> */}

        {/* Enlace para registrarse */}
        <div className='text-center mt-4'>
          <p className='text-greenmusgo'>
            ¿No tienes una cuenta?{" "}
            <Link to='/registrate' className='hover:underline'>
              Regístrate Ahora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
