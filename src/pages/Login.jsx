import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStoreLogin from "../Routes/useStore";
import { APIURL } from "../utils/api";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const { setIsAuthenticated } = useStoreLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(APIURL.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Guardamos el token recibido
        if (remember) {
          localStorage.setItem("token", data.token);
        } else {
          sessionStorage.setItem("token", data.token);
        }

        // Decodificamos el token usando jwt-decode
        const decodedToken = jwtDecode(data.token);

        // Guardamos el token deserializado en el storage correspondiente
        localStorage.setItem("decodedToken", JSON.stringify(decodedToken));
        localStorage.setItem("token", data.token);

        if (remember) {
          localStorage.setItem("decodedToken", JSON.stringify(decodedToken));
          localStorage.setItem("isAuthenticated", "true");
        } else {
          sessionStorage.setItem("decodedToken", JSON.stringify(decodedToken));
          sessionStorage.setItem("isAuthenticated", "true");
        }
        setIsAuthenticated(true);

        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Inicio de sesión exitoso",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate("/dashboard");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Correo o contraseña incorrectos.",
        });
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al enviar datos.",
      });
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-black'>
      <div className='w-full max-w-md bg-neutral-900 p-8 rounded-lg shadow-md'>
        <h2 className='text-3xl text-white mb-6 text-left'>¡Bienvenido!</h2>

        <form onSubmit={handleSubmit} className='space-y-6'>
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

          <button
            type='submit'
            className='w-full bg-greenmusgo text-white py-2 rounded-md hover:bg-softYellow hover:text-black transition duration-300'>
            Enviar información
          </button>
        </form>

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
