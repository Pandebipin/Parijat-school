import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Sidebar = (props) => {
  const navigate = useNavigate();
  // Optionally, if you plan to control a state from the parent, you can destructure setState from props.
  const { setState } = props || {};
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Each link click will close the sidebar on mobile if setState function is provided
  const handleNav = (path, value = false) => {
    navigate(path);
    if (setState) setState(value);
    setIsOpen(false); // Close sidebar on mobile
  };

  return (
    <>
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-gray-200">
        <h2 className="text-gray-800 text-xl">Category</h2>
        <button onClick={toggleSidebar}>
          {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-md transition-transform duration-300 ease-in-out z-40 p-5 w-64
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:relative lg:translate-x-0 lg:block lg:w-64`}
      >
        <h2 className="text-center text-xl text-gray-800 mb-4">Category</h2>
        <ul className="flex flex-col gap-4 text-gray-900 font-semibold text-md list-none">
          <li onClick={() => handleNav("/allteachers", false)} className="cursor-pointer hover:text-gray-600">
            All
          </li>
          <li onClick={() => handleNav("/teachers/english", true)} className="cursor-pointer hover:text-gray-600">
            English
          </li>
          <li onClick={() => handleNav("/teachers/nepali", true)} className="cursor-pointer hover:text-gray-600">
            Nepali
          </li>
          <li onClick={() => handleNav("/teachers/social", true)} className="cursor-pointer hover:text-gray-600">
            Social
          </li>
          <li onClick={() => handleNav("/teachers/computerscience", true)} className="cursor-pointer hover:text-gray-600">
            Computer Science
          </li>
          <li onClick={() => handleNav("/teachers/science", true)} className="cursor-pointer hover:text-gray-600">
            Science
          </li>
          <li onClick={() => handleNav("/teachers/economics", true)} className="cursor-pointer hover:text-gray-600">
            Economics
          </li>
          <li onClick={() => handleNav("/teachers/math", true)} className="cursor-pointer hover:text-gray-600">
            Math
          </li>
          <li onClick={() => handleNav("/teachers/optmath", true)} className="cursor-pointer hover:text-gray-600">
            Optional Math
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
