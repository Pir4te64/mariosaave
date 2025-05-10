import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStoreLogin from "@/Routes/useStore";
import { APIURL } from "@/utils/api";
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

      const data = await response.json();

      if (response.ok) {
        // Guardamos el token recibido
        if (remember) {
          sessionStorage.setItem("token", data.token);
        } else {
          sessionStorage.setItem("token", data.token);
        }

        // Decodificamos el token usando jwt-decode
        const decodedToken = jwtDecode(data.token);

        // Guardamos el token deserializado en el storage correspondiente
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
          text: data.message || "Inicio de sesión exitoso",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate("/dashboard");
        });
      } else {
        // Manejar el caso de cuenta desactivada
        if (data.error === "Cuenta desactivada. Contacte al administrador.") {
          Swal.fire({
            icon: "warning",
            title: "Cuenta Desactivada",
            text: data.error,
            confirmButtonText: "Entendido",
            confirmButtonColor: "#3085d6",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: data.message || "Correo o contraseña incorrectos.",
          });
        }
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al conectar con el servidor.",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-lg bg-neutral-900 p-8 shadow-md">
        <h2 className="mb-6 text-left text-3xl text-white">¡Bienvenido!</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-1 block text-gray-300">Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-neutral-700 bg-neutral-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu correo"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-gray-300">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-neutral-700 bg-neutral-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                className="mr-2"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Recordar contraseña
            </label>
            <Link
              to="/confirmarpassword"
              className="text-sm text-greenmusgo hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-greenmusgo py-2 text-white transition duration-300 hover:bg-softYellow hover:text-black"
          >
            Enviar información
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-greenmusgo">
            ¿No tienes una cuenta?{" "}
            <Link to="/registrate" className="hover:underline">
              Regístrate Ahora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
