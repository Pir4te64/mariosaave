import { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "@/utils/api";

const useReservas = () => {
  const [reservas, setReservas] = useState([]);

  // Obtención del token desde localStorage o sessionStorage
  const token =
    sessionStorage.getItem("token");

  // Obtiene el token decodificado (almacenado como string) y lo parsea
  const userString = sessionStorage.getItem("decodedToken");
  const user = userString ? JSON.parse(userString) : null;

  // Selecciona el endpoint en función del role_id (o perfil_id)
  // Si role_id es 4, se usa APIURL.reservasprofesor; si no, APIURL.reservas.
  const endpoint =
    user && user.role_id === 4 ? APIURL.reservasprofesor : APIURL.reservas;

  // Función para obtener las reservas desde el endpoint correspondiente
  const fetchReservas = () => {
    axios
      .get(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Si la respuesta tiene una propiedad "reservas", la usamos;
        // de lo contrario, usamos response.data.
        setReservas(response.data.reservas || response.data);
      })
      .catch((error) => {
        console.error("Error al obtener reservas:", error);
      });
  };

  // Se consulta la lista de reservas al montar el componente
  useEffect(() => {
    fetchReservas();
  }, []);

  return { reservas, fetchReservas };
};

export default useReservas;
