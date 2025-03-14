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

  // Close sidebar when clicking outside
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
    <>
      {/* Menu Button (Fixed Position) */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon className="w-6 h-6" /> : <MenuAlt2Icon className="w-6 h-6" />}
      </button>

      {/* Sidebar Container */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen lg:h-full transition-all duration-300 ${
          isOpen ? "w-56" : "w-16"
        } lg:w-56 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl z-40`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className={`text-xl font-semibold ${isOpen ? "block" : "hidden"}`}>
            Menu
          </h2>
          <button
            className="lg:hidden p-1 bg-gray-700 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col mt-4">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false);
              }}
              className="flex items-center p-4 hover:bg-gray-700 cursor-pointer transition-all"
            >
              {item.icon}
              <span
                className={`ml-3 transition-opacity text-white ${
                  isOpen ? "opacity-100" : "opacity-0 lg:opacity-100"
                } lg:inline`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
