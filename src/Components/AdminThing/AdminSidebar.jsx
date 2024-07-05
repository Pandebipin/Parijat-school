import React, { useState } from "react";
import {
  HomeIcon,
  AcademicCapIcon,
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
  const [authenticationdrop, setauthenticationdrop] = useState(false);
  const [TeacherssDropdownOpen, setTeachersdropdown] = useState(false);
  const [newsopen, setnewsopen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleStudentsDropdown = () => {
    setStudentsDropdownOpen(!studentsDropdownOpen);
  };
  const toggleTeachers = () => {
    setTeachersdropdown(!TeacherssDropdownOpen);
  };
  const toggleBlogsDropdown = () => {
    setBlogsDropdownOpen(!blogsDropdownOpen);
  };
  const togglenewsdown = () => {
    setnewsopen(!newsopen);
  };
  const toogleauthenticationdrop = () => {
    setauthenticationdrop(!authenticationdrop);
  };
  const navigate = useNavigate();

  return (
    <div className=" bg-[#112143] flex">
      <div className="lg:hidden fixed top-[100px] left-4 z-50">
        <button onClick={toggleSidebar}>
          {!isOpen && <MenuIcon className="icon w-8 h-8" />}
        </button>
      </div>
      <div
        className={`adminsidebar fixed inset-y-0 left-0 transform rounded-sm shadow-lg top-[84px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition duration-300 ease-in-out  bg-gray-100 w-64`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <button className="lg:hidden block" onClick={toggleSidebar}>
            {isOpen && <XIcon className="w-6 h-6" />}
          </button>
        </div>
        <nav className="mt-0 ">
          <Link
            // onClick={() => navigate("/admindashboard")}
            to={"/admin"}
            className="flex items-center px-4 py-3  font-[500]"
          >
            <HomeIcon className="w-5 h-5 mr-3" />
            Dashboard
          </Link>

          <div>
            <button
              onClick={toogleauthenticationdrop}
              className="flex items-center justify-between w-full px-4 py-2 "
            >
              <span className="flex items-center font-[500] gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                Authentication
              </span>
              {authenticationdrop ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {authenticationdrop && (
              <div className="pl-10">
                <Link to={"/adminSignup"} className="block px-4 py-2 ">
                  Registration
                </Link>
                <Link to={"/adminLogin"} className="block px-4 py-2 ">
                  login
                </Link>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={toggleStudentsDropdown}
              className="flex items-center justify-between w-full px-4 py-2 "
            >
              <span className="flex items-center font-[500]">
                <UserGroupIcon className="w-5 h-5 mr-3" />
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
                <Link to={"/studentList"} className="block px-4 py-2 ">
                  view List
                </Link>
                <Link to={"/Addstudents"} className="block px-4 py-2 ">
                  upload students
                </Link>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={toggleTeachers}
              className="flex items-center justify-between w-full px-4 py-2 "
            >
              <span className="flex items-center font-[500]">
                <UserGroupIcon className="w-5 h-5 mr-3" />
                Teachers
              </span>
              {TeacherssDropdownOpen ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {TeacherssDropdownOpen && (
              <div className="pl-10">
                <Link to={"/teacherlist"} className="block px-4 py-2 ">
                  Teachers List
                </Link>

                <Link to={"/Addteachers"} className="block px-4 py-2 ">
                  upload Teachers
                </Link>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={toggleBlogsDropdown}
              className="flex items-center justify-between w-full px-4 py-2 "
            >
              <span className="flex items-center gap-3 font-[500]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
              <div className="pl-10 ">
                <Link to={"/bloglist"} className="block px-4 py-2 ">
                  Blogs List
                </Link>

                <Link to={"/Addblog"} className="block px-4 py-2 ">
                  upload Blogs
                </Link>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={togglenewsdown}
              className="flex items-center justify-between w-full px-4 py-2 "
            >
              <span className="flex items-center gap-3 font-[500]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
                News
              </span>
              {newsopen ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </button>
            {newsopen && (
              <div className="pl-10 ">
                <a href="#course-list" className="block px-4 py-2 ">
                  news List
                </a>
                <a href="#course-list" className="block px-4 py-2 ">
                  view List
                </a>
                <a href="#add-course" className="block px-4 py-2 ">
                  upload news
                </a>
              </div>
            )}
          </div>
          <Link className="flex items-center px-4 py-2  font-[500]">
            <CogIcon className="w-5 h-5 mr-3" />
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
