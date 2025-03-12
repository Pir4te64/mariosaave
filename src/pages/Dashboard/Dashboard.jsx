import React from "react";
import GreetingCard from "./Dash/GreetingCard";
import UserProfileSidebar from "./Dash/UserProfileSidebar ";
import PesoCard from "./Dash/PesoCard";
import Grasa from "./Dash/GrasaCorporal";
import BodyMeasurements from "./Dash/BodyMeasurements";
import ActivityChart from "./Dash/ActivityChart";
import ScheduledClasses from "./Dash/ScheduledClasses";
import ProcessPhotos from "./Dash/ProcessPhotos";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-4">
      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Caja 1: Componente de bienvenida */}
        <div className="col-span-1 md:col-span-3">
          <GreetingCard />
        </div>

        {/* Caja 2 */}
        <div className="col-span-1 bg-white rounded-md shadow-lg flex-row flex justify-around items-center">
          <PesoCard />
          <Grasa />
        </div>

        {/* Caja 3 */}
        <div className="col-span-1 md:col-span-2  bg-blue-200 rounded-lg">
          <BodyMeasurements />
        </div>

        <div className="col-span-1 md:col-span-3">
          <ActivityChart />
        </div>
        {/* Caja 5 */}
        <div className="col-span-1 md:col-span-2">
          <ScheduledClasses />
        </div>

        {/* Caja 6 */}
        <div className="col-span-1 h-full bg-white shadow-sm  rounded-lg">
          <ProcessPhotos />
        </div>
      </div>

      {/* Sidebar */}
      <UserProfileSidebar />
    </div>
  );
};

export default Dashboard;
