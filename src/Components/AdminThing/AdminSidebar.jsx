import React, { useState } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  CogIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [studentsDropdownOpen, setStudentsDropdownOpen] = useState(false);
  const [blogsDropdownOpen, setBlogsDropdownOpen] = useState(false);
  const [authenticationDrop, setAuthenticationDrop] = useState(false);
  const [teachersDropdownOpen, setTeachersDropdownOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (setter) => {
    setter((prev) => !prev);
  };

  const navigate = useNavigate();

  return (
    <div className="bg-[#112143] flex flex-col lg:flex-row">
  <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="p-2 bg-gray-800 text-white rounded">
          {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
        </button>
      </div>
  <div
        className={`fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out bg-gray-900 text-white w-64 shadow-lg p-5 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:w-72`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Admin Panel</h2>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-0">
          <Link to={"/admin"} className="flex items-center px-4 py-3 font-[500]">
            <HomeIcon className="w-5 h-5 mr-3" />
            Dashboard
          </Link>

          <div>
            <button
              onClick={() => toggleDropdown(setAuthenticationDrop)}
              className="flex items-center justify-between w-full px-4 py-2"
            >
              <span className="flex items-center font-[500] gap-4">
                <User GroupIcon className="w-5 h-5" />
                Authentication
              </span>
              {authenticationDrop ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {authenticationDrop && (
              <div className="pl-10">
                <Link to={"/adminSignup"} className="block px-4 py-2">
                  Registration
                </Link>
                <Link to={"/adminLogin"} className="block px-4 py-2">
                  Login
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown(setStudentsDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-2"
            >
              <span className="flex items-center font-[500]">
                <User GroupIcon className="w-5 h-5 mr-3" />
                Students
              </span>
              {studentsDropdownOpen ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {studentsDropdownOpen && (
              <div className="pl-10">
                <Link to={"/studentList"} className="block px-4 py-2">
                  View List
                </Link>
                <Link to={"/Addstudents"} className="block px-4 py-2">
                  Upload Students
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown(setTeachersDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-2"
            >
              <span className="flex items-center font-[500]">
                <User GroupIcon className="w-5 h-5 mr-3" />
                Teachers
              </span>
              {teachersDropdownOpen ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {teachersDropdownOpen && (
              <div className="pl-10">
                <Link to={"/teacherlist"} className="block px-4 py-2">
                  Teachers List
                </Link>
                <Link to={"/Addteachers"} className="block px-4 py-2">
                  Upload Teachers
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown(setBlogsDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-2"
            >
              <span className="flex items-center gap-3 font-[500]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                Blogs/Events
              </span>
              {blogsDropdownOpen ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {blogsDropdownOpen && (
              <div className="pl-10">
                <Link to={"/bloglist"} className="block px-4 py-2">
                  Blogs List
                </Link>
                <Link to={"/Addblog"} className="block px-4 py-2">
                  Upload Blogs
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown(setNewsOpen)}
              className="flex items-center justify-between w-full px-4 py-2"
            >
              <span className="flex items-center gap-3 font-[500]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
                News
              </span>
              {newsOpen ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {newsOpen && (
              <div className="pl-10">
                <Link to={"/newsList"} className="block px-4 py-2">
                  News List
                </Link>
                <Link to={"/Addnews"} className="block px-4 py-2">
                  Upload News
                </Link>
              </div>
            )}
          </div>

          <Link className="flex items-center px-4 py-2 font-[500]">
            <CogIcon className="w-5 h-5 mr-3" />
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
