import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { name: "Home", path: "/", icon: <HomeIcon className="w-6 h-6" /> },
    { name: "All Teachers", path: "/allteachers", icon: <UserGroupIcon className="w-6 h-6" /> },
    { name: "English", path: "/teachers/english", icon: <AcademicCapIcon className="w-6 h-6" /> },
    { name: "Nepali", path: "/teachers/nepali", icon: <AcademicCapIcon className="w-6 h-6" /> },
    { name: "Settings", path: "/settings", icon: <CogIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-5 left-5 z-50 bg-gray-800 text-white p-2 rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon className="w-6 h-6" /> : <MenuAlt2Icon className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ease-in-out ${
          isOpen ? "w-56" : "w-16"
        } lg:w-56`}
      >
        <div className="flex flex-col mt-10">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false); // Close sidebar on mobile after navigation
              }}
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
            >
              {item.icon}
              <span className={`ml-3 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 lg:opacity-100"} lg:inline`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
