import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const { setState } = props;

  return (
    <>
      <div className="sidebar_container lg:block hidden w-[160px] flex-col h-[100vh]  gap-7 rounded-md shadow-md pt-5">
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
            className=" hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/social");
              setState(true);
            }}
          >
            social{" "}
          </li>
          <li
            className=" hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/compterscience");
              setState(true);
            }}
          >
            computerscience{" "}
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
      <div className="sidebar_container lg:hidden block w-[160px] flex-col h-[100vh]  gap-7 rounded-md shadow-md pt-5">
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
            eng{" "}
          </li>
          <li
            className=" hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/nepali");
              setState(true);
            }}
          >
            nep{" "}
          </li>
          <li
            className=" hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/social");
              setState(true);
            }}
          >
            soc{" "}
          </li>
          <li
            className=" hover:text-gray-600"
            onClick={() => {
              navigate("/teachers/compterscience");
              setState(true);
            }}
          >
            computer{" "}
          </li>
          <li
            onClick={() => {
              navigate("/teachers/science");
              setState(true);
            }}
            className=" hover:text-gray-600"
          >
            {" "}
            sci{" "}
          </li>

          <li
            onClick={() => {
              navigate("/teachers/economics");
              setState(true);
            }}
            className=" hover:text-gray-600"
          >
            {" "}
            eco{" "}
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
            opt{" "}
          </li>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
