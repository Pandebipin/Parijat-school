// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Admindashboard = () => {
  return (
    <div className="flex">
      <div className="h-screen w-1/4 bg-gray-800 text-white flex flex-col">
        <h2 className="text-2xl font-bold p-4">Admin Dashboard</h2>
        <nav className="flex flex-col p-4">
          <Link to="/blogs" className="p-2 hover:bg-gray-700">
            Blogs
          </Link>
          <Link to="/news" className="p-2 hover:bg-gray-700">
            News
          </Link>
          <Link to="/teachers" className="p-2 hover:bg-gray-700">
            Teachers
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Admindashboard;
