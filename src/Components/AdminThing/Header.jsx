// Header.jsx

import React, { useState, useEffect } from "react";
import {
  SunIcon,
  MoonIcon,
  BellIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../../App.css";
const notifications = [
  "Notification 1",
  "Notification 2",
  "Notification 3",
  "Notification 4",
  "Notification 5",
  "Notification 6",
  "Notification 7",
  "Notification 8",
  "Notification 9",
  "Notification 10",
];

const Header = ({ themeMode, setThemeMode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setIsAdmin(user.email === "admin12@gmail.com");
      } else {
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      setIsAuthenticated(false);
      setIsAdmin(false);
      navigate("/login");
    });
  };

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => !prevMode);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="header first-letter:bg-white fixed z-1000 w-full shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <img
          src="https://wms.edigitalnepal.com/wms/files/ws-profile/1683883386147_753f2dc5-5c4d-4e46-a2cd-1e7837fb5876.png"
          alt="School Logo"
          className="h-10 object-contain w-[100px]"
        />
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full bg-gray-100 pl-10 pr-4 py-2 focus:outline-none dark:text-white"
          />
          <SearchIcon className="w-5 h-5 text-gray-500 absolute left-3 top-2.5 " />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleThemeMode}
          className="p-2 rounded-full lg:block hidden"
        >
          {themeMode ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          )}
        </button>
        <button className="lg:hidden p-2 rounded-full">
          <MenuIcon className="w-6 h-6 text-gray-800" />
        </button>
        <div className="relative inline-block text-left">
          <div className="lg:block hidden">
            <button
              onClick={toggleNotification}
              className="relative p-2 rounded-full"
            >
              <BellIcon className="icon w-6 h-6 text-gray-800 " />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white"></span>
            </button>
          </div>

          {notificationOpen && (
            <div className="z-50 origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1 max-h-56 overflow-y-auto"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {notifications.map((notification, index) => (
                  <a
                    href="#"
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-800 "
                    role="menuitem"
                  >
                    {notification}
                  </a>
                ))}
              </div>
              <div className="py-1 border-t border-gray-200 dark:border-gray-600">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-800  ">
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="relative lg:inline-block hidden text-left">
          {!isAuthenticated ? (
            <button
              onClick={handleLogin}
              className="border-1 rounded-md bg-blue-600 px-4 outline-none py-2 text-white"
            >
              Login
            </button>
          ) : (
            <div>
              <button
                onClick={toggleDropdown}
                className="icon inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-gray-800  focus:outline-none"
              >
                User
                <svg
                  className="icon -mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.117 1.993L10 5H5a1 1 0 01-.117-1.993L5 3h5zm5 4a1 1 0 01.117 1.993L15 9H5a1 1 0 01-.117-1.993L5 7h10zm0 4a1 1 0 01.117 1.993L15 13H5a1 1 0 01-.117-1.993L5 11h10zm0 4a1 1 0 01.117 1.993L15 17H5a1 1 0 01-.117-1.993L5 15h10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  no-underline"
                  role="menuitem"
                  onClick={handleClose}
                >
                  Account Settings
                </Link>
                <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  no-underline"
                  role="menuitem"
                  onClick={handleClose}
                >
                  Profile
                </Link>
                <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  no-underline"
                  role="menuitem"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
