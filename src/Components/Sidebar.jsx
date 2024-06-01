import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const { setState } = props;

  return (
    <>
      <div className="sidebar_container w-[150px] flex-col h-[100vh] flex  gap-7 rounded-md shadow-md">
        <h2 className="catogery text-gray-800 text-center pl-0 pt-2 text-xl">
          {" "}
          Catogery{" "}
        </h2>
        <div className="sidebar flex flex-col gap-4 pl-4 text-gray-900 font-semi-bold cursor-pointer text-md list-none font-sans ">
          <li
            onClick={() => {
              navigate("/allteachers");
              setState(false);
            }}
            className=" hover:text-gray-600 "
          >
            {" "}
            All{" "}
          </li>
          <li
            className=" hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/english");
              setState(true);
            }}
          >
            english{" "}
          </li>
          <li
            className=" hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/nepali");
              setState(true);
            }}
          >
            nepali{" "}
          </li>
          <li
            onClick={() => {
              navigate("/teachers/science");
              setState(true);
            }}
            className=" hover:text-gray-600"
          >
            {" "}
            science{" "}
          </li>

          <li
            onClick={() => {
              navigate("/teachers/economics");
              setState(true);
            }}
            className=" hover:text-gray-600"
          >
            {" "}
            economics{" "}
          </li>
          <li
            onClick={() => {
              navigate("/teachers/math");
              setState(true);
            }}
            className=" hover:text-gray-600"
          >
            {" "}
            math{" "}
          </li>
          <li
            className=" hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/optmath");
              setState(true);
            }}
          >
            {" "}
            optmath{" "}
          </li>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
