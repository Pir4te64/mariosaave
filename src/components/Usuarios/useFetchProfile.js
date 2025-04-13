// useFetchProfile.js
import { useEffect } from "react";
import axios from "axios";
import { APIURL } from "@/utils/api";
import { defaultUserData } from "@/components/Usuarios/initialValues";

const useFetchProfile = (userId, userIndex, setUserData) => {
  useEffect(() => {
    if (userId) {
      const token = localStorage.getItem("token");
      axios
        .get(`${APIURL.perfil}/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserData(userIndex, { ...defaultUserData, ...response.data });
        })
        .catch((error) => {
          console.error("Error al obtener perfil:", error);
        });
    }
  }, [userId, userIndex, setUserData]);
};

export default useFetchProfile;
