import React from "react";
import Footer from "../../components/Footer";
import DashboardNavbar from "./Navbardashboard";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <DashboardNavbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
