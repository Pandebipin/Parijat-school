import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
import LanguageSelector from "./LanguageSelector";

function Nav() {
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = getAuth();
  const handlesubmit = (e) => {
    // e.preventDefault();
    if (auth) {
      auth.signOut();
    }
  };
  // auth.onAuthStateChanged((user) => {
  //   if (user.email === "admindas@gmail.com") {
  //     setIsAdmin(true);
  //   } else return;
  // });

  const [showCategory, setshowCategory] = useState(false);

  const handleLogin = () => {
    navigate("/signup");
  };

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
        { name: "Math" },
        { name: "science" },
        { name: "English" },
        { name: "Social" },
        { name: "nepali" },
        { name: "computer science" },
        { name: "opt math" },
        { name: "health" },
        { name: "economics" },
        { name: "Gk" },
      ],
    },
    {
      name: "Others activitie",
      id: "4",
      children: [
        { name: "Dance" },
        { name: "Drawing" },
        { name: "sports" },
        { name: "conference(skill development)" },
      ],
    },
    {
      name: "Admissons",
      id: "5",
      children: [{ name: "forms" }],
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
    gsap.to(".nav", {
      backgroundColor: "lightblue",
      height: "90px",
      scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
      },
    });
  });
  const navigate = useNavigate();
  return (
    <nav className="w-full fixed z-10">
      <div className="nav  relative gap-8 flex justify-around items-center mb-2 w-full">
        <div className="flex gap-2">
          <img
            onClick={() => navigate("/")}
            className="w-[90px] h-[80px] object-cover mix-blend-multiply cursor-pointer"
            src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/268089005_191938573137811_1623283280562633961_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ae1JA7tSSjUQ7kNvgG8NKCH&_nc_ht=scontent.fktm19-1.fna&oh=00_AYAEkgmORATXWFDgA0uqLqTQCH3ztwsQsCu93-tqvqiuyg&oe=665861B9"
            alt="jj"
          />
        </div>
        <div className="nav font-bold text-md flex gap-4 items-center py-1 text-white cursor-pointer">
          <span
            onClick={() => navigate("/blogposts")}
            className="lg:block  hidden cursor-pointer text-lg"
          >
            News|events
          </span>
          <span
            onClick={() => navigate("addmision")}
            className="lg:block  hidden cursor-pointer text-lg"
          >
            {" "}
            Addmisions
          </span>
          <span
            onClick={() => navigate("Form")}
            className="lg:block  hidden cursor-pointer text-lg"
          >
            {" "}
            Forms
          </span>
          {isAdmin ? (
            <span
              onClick={() => navigate("admindashborad")}
              className="lg:block  hidden cursor-pointer text-lg"
            >
              {" "}
              dashboard{" "}
            </span>
          ) : null}

          {!auth.currentUser ? (
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
              Logut
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
          <div className="absolute top-14 right-0 gradient  w-[100%] pt-6 p-4 pb-4 z-20">
            <span className="text-white pl-2">catogroise</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 px-8">
              {category.map((elm) => (
                <div key={elm.id}>
                  <div className="text-white">{elm.name}</div>
                  <div className="py-2 ">
                    {elm.children.map((child, index) => (
                      <div key={index} className="text-white cursor-pointer">
                        &#8627; {child.name}
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
