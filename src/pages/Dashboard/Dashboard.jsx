import React, { useEffect } from "react";
import axios from "axios";
import GreetingCard from "@/pages/Dashboard/Dash/GreetingCard";
import UserProfileSidebar from "@/pages/Dashboard/Dash/UserProfileSidebar ";
import PesoCard from "@/pages/Dashboard/Dash/PesoCard";
import Grasa from "@/pages/Dashboard/Dash/GrasaCorporal";
import BodyMeasurements from "@/pages/Dashboard/Dash/BodyMeasurements";
import ActivityChart from "@/pages/Dashboard/Dash/ActivityChart";
import ScheduledClasses from "@/pages/Dashboard/Dash/ScheduledClasses";
import ProcessPhotos from "@/pages/Dashboard/Dash/ProcessPhotos";
import useProfileStore from "@/pages/Dashboard/Profile/useProfileStore";
import { APIURL } from "@/utils/api";

const Dashboard = () => {
  // Obtén la función para actualizar el perfil desde el store
  const setProfile = useProfileStore((state) => state.setProfile);

  useEffect(() => {
    // Obtén el token del localStorage
    const token = localStorage.getItem("token");

    // Realiza la petición GET al endpoint, enviando el token en los headers
    axios
      .get(APIURL.perfil_me, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Guarda los datos del perfil en el estado global usando zustand
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener el perfil:", error);
      });
  }, [setProfile]);

  return (
    <div className='min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-4'>
      {/* Main Content */}
      <div className='flex-1 grid grid-cols-1 md:grid-cols-3 gap-4'>
        {/* Caja 1: Componente de bienvenida */}
        <div className='col-span-1 md:col-span-3'>
          <GreetingCard />
        </div>

        {/* Caja 2 */}
        <div className='col-span-1 bg-white rounded-md shadow-lg flex-row flex justify-around items-center'>
          <PesoCard />
          <Grasa />
        </div>

        {/* Caja 3 */}
        <div className='col-span-1 md:col-span-2 rounded-lg'>
          <BodyMeasurements />
        </div>

        {/* Caja 4 */}

        {/* Caja 5 */}
        <div className='col-span-1 md:col-span-2'>
          <ScheduledClasses />
        </div>

        {/* Caja 6 */}
        <div className='col-span-1 h-full bg-white shadow-sm rounded-lg'>
          <ProcessPhotos />
        </div>
      </div>

      {/* Sidebar */}
      <UserProfileSidebar />
    </div>
  );
};

export default Dashboard;
