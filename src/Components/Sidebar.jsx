import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CogIcon,
  MenuAlt2Icon,
  XIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && 
          !event.target.classList.contains('sidebar-toggle')) {
        setIsOpen(false);
      }
    }
    
   
    setIsOpen(false);
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [location.pathname]);
  
  const menuItems = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: "All Teachers", path: "/allteachers", icon: <UserGroupIcon className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: "English", path: "/teachers/english", icon: <AcademicCapIcon className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: "Nepali", path: "/teachers/nepali", icon: <AcademicCapIcon className="w-5 h-5 md:w-6 md:h-6" /> },
    { name: "Settings", path: "/settings", icon: <CogIcon className="w-5 h-5 md:w-6 md:h-6" /> },
  ];

  return (
    <>
     
      <button
        className="sidebar-toggle lg:hidden mt-12 fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <XIcon className="w-5 h-5" /> : <MenuAlt2Icon className="w-5 h-5" />}
      </button>
      
   
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
      
    
      <div
        ref={sidebarRef}
        className={`fixed lg:relative md:w-[400px] top-6 left-0 h-screen lg:h-auto transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          w-64 sm:w-72  bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl z-40`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">cat-G</h2>
          <button
            className="lg:hidden p-1 bg-gray-700 rounded-md focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
          >
            <XIcon className="w-5 h-5 text-white" />
          </button>
        </div>
        
       
        <div className="flex flex-col mt-6 md:mt-10">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={`flex md:w-[400px] items-center p-3 md:p-4 hover:bg-gray-700 cursor-pointer transition-all
                  ${isActive ? "bg-gray-700" : ""}`}
              >
                <div className={`${isActive ? "text-blue-400" : "text-white"}`}>
                  {item.icon}
                </div>
                <span className="ml-3 text-white">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
