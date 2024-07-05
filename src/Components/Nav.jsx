import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { auth } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LanguageSelector from "./LanguageSelector";

function Nav() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();

  const handlesubmit = (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      setIsAuthenticated(false);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        if (
          user.email === import.meta.env.VITE_Email_key ||
          import.meta.env.VITE_AnotherEmail_key
        ) {
          setIsAdmin(true);
        }
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogin = () => {
    navigate("/signup");
  };
  const [showCategory, setshowCategory] = useState(false);
  const category = [
    {
      name: "Events",
      id: "1",
      children: [
        { name: "January" },
        { name: "February" },
        { name: "March" },
        { name: "April" },
      ],
    },
    {
      name: "Faculty",
      id: "2",
      children: [
        { name: "math" },
        { name: "science" },
        { name: "english" },
        { name: "social" },
        { name: "nepali" },
        { name: "computer science" },
        { name: "opt math" },
        { name: "economics" },
      ],
    },
    {
      name: "Others activities",
      id: "4",
      children: [
        { name: "Dance" },
        { name: "Drawing" },
        { name: "sports" },
        { name: "conference(skill development)" },
      ],
    },
    {
      name: "Admission",
      id: "5",
      children: [{ name: "Form" }],
    },
  ];

  const tl = gsap.timeline();
  const ref = useRef();
  useGSAP(() => {
    tl.from("img,.heading,.nav, span,button", {
      y: -30,
      duration: 1,
      opacity: 0,
      delay: 0.3,
      stagger: 0.2,
    });
  });

  const navigate = useNavigate();
  return (
    <nav className="w-full z-50 top-0 bg-white shadow-lg backdrop-blur-[30px] nav fixed h-[100px] mb-4">
      <div className="nav relative gap-8 flex justify-around items-center mb-2 w-full">
        <div className="flex gap-2 mt-2">
          <img
            onClick={() => navigate("/")}
            className="w-[80px] h-[70px] object-cover mix-blend-multiply cursor-pointer mt-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT395yE39XXN0Sn7F5H_R3xruAW6KY_bXVzg&s"
            alt=""
          />
        </div>
        <div className="nav font-bold text-md flex gap-4 items-center py-1 text-gray-900 cursor-pointer">
          <span
            onClick={() => navigate("blogposts")}
            className="lg:block hidden cursor-pointer text-lg"
          >
            News|events
          </span>
          <span
            onClick={() => navigate("/addmision")}
            className="lg:block hidden cursor-pointer text-lg"
          >
            Addmisions
          </span>
          <span
            onClick={() => navigate("/teachers/Form")}
            className="lg:block hidden cursor-pointer text-lg"
          >
            Forms
          </span>
          {isAdmin ? (
            <span
              onClick={() => navigate("/admindashborad")}
              className="lg:block hidden cursor-pointer text-lg"
            >
              dashboard
            </span>
          ) : null}

          {!isAuthenticated ? (
            <button
              onClick={handleLogin}
              className="border-1 rounded-md bg-blue-600 px-4 outline-none py-2 text-white"
            >
              Login
            </button>
          ) : (
            <Link
              onClick={handlesubmit}
              className="border-1 rounded-md bg-blue-600 px-4 outline-none py-2 text-white"
            >
              Logout
            </Link>
          )}

          <LanguageSelector />
          <button onClick={() => setshowCategory(!showCategory)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient${
                showCategory ? "gradient" : ""
              } hidden lg:block border-b-4`}
            />
          </button>
          <button onClick={() => setshowCategory(!showCategory)}>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>
        {showCategory && (
          <div className="absolute top-14 right-0 gradient w-[100%] pt-6 p-4 pb-4 z-50 opacity-100">
            <span className="text-white pl-2">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 px-8">
              {category.map((elm) => (
                <div key={elm.id}>
                  <div className="text-white">{elm.name}</div>
                  <div className="py-2">
                    {elm.children.map((child, index) => (
                      <div key={index} className="text-white cursor-pointer">
                        <Link
                          to={`/teachers/${child.name}`}
                          className="text-white"
                        >
                          &#8627; {child.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
