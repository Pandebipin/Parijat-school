// src/components/Sidebar.js
import React from "react";
import AdminSidebar from "../Components/AdminThing/AdminSidebar";
import Dashboard from "../Components/AdminThing/Dashboard";

const Admindashboard = () => {
  return (
    <div className="min-h-[80vh] z-10">
      <div className="flex">
        <div className="sidebar mt-12 px-3 z-0 w-[20%]">
          <AdminSidebar />
        </div>
        <div className="content">
          {" "}
          <Dashboard />{" "}
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
