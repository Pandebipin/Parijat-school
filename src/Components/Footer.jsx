import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full gao-2 min-h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-orange-200">
      <div className="flex gap-3 flex-col w-full p-6 px-8">
        <img
          onClick={() => navigate("/")}
          className="w-[90px] h-[80px] object-cover mix-blend-multiply"
          src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/268089005_191938573137811_1623283280562633961_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ae1JA7tSSjUQ7kNvgG8NKCH&_nc_ht=scontent.fktm19-1.fna&oh=00_AYAEkgmORATXWFDgA0uqLqTQCH3ztwsQsCu93-tqvqiuyg&oe=665861B9"
          alt=""
        />
        <h1>"Helping Students Grow Into Leaders of Today and Tomorrow"</h1>
        <h1>Follow us</h1>
        <div className="icons flex gap-3">
          <FaFacebookF />
          <FaInstagram />
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4 px-8">
        <h1 className="text-gray-700 font-bold text-xl">useful links</h1>
        <ul className="p-3 flex flex-col gap-5">
          <li
            onClick={() => navigate("/Aboutus")}
            className=" cursor-pointer text-md capitalize font-sans hover:text-gray-600"
          >
            About us
          </li>
          <li className=" cursor-pointer text-md capitalize font-sans hover:text-gray-600">
            Programs
          </li>
          <li
            onClick={() => navigate("/addmision")}
            className=" cursor-pointer text-md capitalize font-sans hover:text-gray-600"
          >
            Admissions
          </li>
          <li
            onClick={() => navigate("/Form")}
            className=" cursor-pointer text-md capitalize font-sans hover:text-gray-600"
          >
            forms
          </li>
          <li
            onClick={() => navigate("/blogposts")}
            className=" cursor-pointer text-md capitalize font-sans hover:text-gray-600"
          >
            News/Articles
          </li>
          <li className=" cursor-pointer text-md capitalize font-sans"></li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 p-4 px-8">
        <h1>our aim to made students well guy</h1>
        <span>Roar towards the mission</span>
        <hr className="bg-gray-900 opacity-15" />
        <span>come here and join us for support: 9869537528</span>
      </div>
    </div>
  );
}

export default Footer;
