import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-4">
      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-3 h-32 bg-green-200 rounded-lg">
          1
        </div>
        <div className="col-span-1 h-24 bg-yellow-200 rounded-lg">2</div>
        <div className="col-span-1 md:col-span-2 h-24 bg-blue-200 rounded-lg">
          3
        </div>
        <div className="col-span-1 md:col-span-3 h-32 bg-white shadow rounded-lg">
          4
        </div>
        <div className="col-span-1 md:col-span-2 h-64 bg-white shadow rounded-lg">
          5
        </div>
        <div className="col-span-1 h-full bg-white shadow rounded-lg">6</div>
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white rounded-lg shadow p-4 h-full flex flex-col gap-4">
        <div className="h-32 bg-gray-300 rounded-lg mb-4"></div>
        <div className="h-16 bg-gray-300 rounded-lg mb-4"></div>
        <div className="h-64 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard;
