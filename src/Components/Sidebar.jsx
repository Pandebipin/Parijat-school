import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const { setState } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-gray-200">
        <h2 className="text-gray-800 text-xl">Category</h2>
        <button onClick={toggleSidebar}>
          {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`sidebar_container fixed inset-y-0 left-0 bg-white shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block w-64 h-full p-5`}
      >
        <h2 className="category text-gray-800 text-center text-xl mb-4">Category</h2>
        <ul className="sidebar flex flex-col gap-4 text-gray-900 font-semibold cursor-pointer text-md list-none">
          <li
            onClick={() => {
              navigate("/allteachers");
              setState(false);
            }}
            className="hover:text-gray-600"
          >
            All
          </li>
          <li
            className="hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/english");
              setState(true);
            }}
          >
            English
          </li>
          <li
            className="hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/nepali");
              setState(true);
            }}
          >
            Nepali
          </li>
          <li
            className="hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/social");
              setState(true);
            }}
          >
            Social
          </li>
          <li
            className="hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/computerscience");
              setState(true);
            }}
          >
            Computer Science
          </li>
          <li
            onClick={() => {
              navigate("/teachers/science");
              setState(true);
            }}
            className="hover:text-gray-600"
          >
            Science
          </li>
          <li
            onClick={() => {
              navigate("/teachers/economics");
              setState(true);
            }}
            className="hover:text-gray-600"
          >
            Economics
          </li>
          <li
            onClick={() => {
              navigate("/teachers/math");
              setState(true);
            }}
            className="hover:text-gray-600"
          >
            Math
          </li>
          <li
            className="hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/optmath");
              setState(true);
            }}
          >
            Optional Math
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
