// src/services/ReservationService.js
import axios from "axios";
import { APIURL } from "@/utils/api";

export const updateReserva = (id, estado) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const payload = { estado: estado.toLowerCase() };

  return axios.put(`${APIURL.reservas}/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
