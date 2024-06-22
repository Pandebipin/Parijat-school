import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminSidebar from "./AdminThing/AdminSidebar";

const Test = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="container`  "></div>
    </>
  );
};

export default Test;
