import ScrollTrigger from "react-scroll-trigger";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import "./Home.css";
import { FaCaretRight } from "react-icons/fa";
import Slider from "../Components/Slider";
import Testomonial from "../Components/testomonial";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, selectBuckets } from "../Store/bucketSlice";
import { useNavigate } from "react-router-dom";
import { fetchTeachers, selectAllTeachers } from "../Store/teacherInfoSlice";
import Contentmodal from "../Components/Contentmodal";
import Addmodal from "../Components/Addmodal";
import Nav from "../Components/Nav";

function Home() {
  const Blogs = useSelector(selectBuckets);

  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const navigate = useNavigate();
  const [counterOn, setcounterOn] = useState(false);
  const [paraOn, setparaOn] = useState(false);
  const tl = gsap.timeline();
  const AnimateOn = () => {
    gsap.from(".para", {
      y: -30,
      duration: 1,
      opacity: 0,
      delay: 0.0,
      stagger: 0.2,
    });
    tl.from(".images .img1", {
      opacity: 0,
      x: -50,
      duration: 1,
    });
    tl.from(".images .img2", {
      opacity: 0,
      x: 40,
      duration: 1,
    });
  };
  const AnimateOf = () => {
    tl.to(".images", {
      x: 0,
      opacity: 1,
    });
  };
  const { t } = useTranslation();
  const { line1, line2, line3, line4, line5, line6, line7, line11 } =
    t("description");
  return (
    <main className="max-w-[1900px]">
      <div className="page mt-0">
        <div className="flex justify-around p-6 flex-col md:flex-row lg:flex-row xl:flex-row gap-4 z-0">
          <div className="left flex flex-col justify-center object-cover  gap-3 w-[280px] md:w-[400px] lg:w-[400px] xl:w-[400px]">
            <h1 className="text-black text-xl md:text-2xl lg:text-2xl font-sans font-bold">
              Lets create a brilliant future with our school
            </h1>
            <span className="w-[260px] md:w-[400px] lg:w-[400px] xl:w-[400px] text-sm md:text-lg lg:text-lg xl:text-lg">
              up school is a technology high school that is committed to
              providing high quality education and implementing.
            </span>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-700 text-white font-sans w-[120px] rounded-lg p-2"
            >
              join with us
            </button>
          </div>

          <div className="right">
            <img
              className="w-[400px] h-[400px] z-10"
              src="https://png.pngtree.com/thumb_back/fw800/background/20231009/pngtree-3d-illustration-of-a-student-engaged-in-an-online-classroom-image_13559709.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="page2 z-9 flex flex-col flex-wrap p-5 bg-[#FFFFFF]">
        <h1 className="text-gray-900 text-4xl font-bold flex justify-center items-start p-8 tracking-tighter">
          {t("greetings")}
        </h1>
        <div className="flex justify-center ">
          <ScrollTrigger
            onEnter={() => setparaOn(true)}
            onExit={() => setparaOn(false)}
          >
            {paraOn && (
              <h1 className="para text-sm sm:text-sm md:text-lg lg:text-xl font-md w-[70vw] items-start text-center text-gray-700">
                {line1}
              </h1>
            )}
          </ScrollTrigger>
        </div>
        <div className="flex justify-center w-full p-3">
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-center gap-7 px-3 w-full pt-8 ">
            <ScrollTrigger
              onEnter={() => setcounterOn(true)}
              onExit={() => setcounterOn(false)}
            >
              <div className="increment flex justify-center gap-2 hover:scale-105 shadow-lg transform transition-transform sm:w-auto text-xl capitalize rounded-lg bg-blue-300 p-2 px-4">
                Students
                {counterOn && (
                  <CountUp start={0} end={1000} duration={1} delay={0} />
                )}
                +
              </div>
            </ScrollTrigger>
            <ScrollTrigger
              onEnter={() => setcounterOn(true)}
              onExit={() => setcounterOn(false)}
            >
              <div className="increment flex items-center justify-center sm:w-auto gap-2 hover:scale-105 shadow-lg transform transition-transform text-center text-xl capitalize rounded-lg bg-blue-300 p-2 px-4">
                Excellence
                {counterOn && (
                  <CountUp start={0} end={1000} duration={1} delay={0} />
                )}
                +
              </div>
            </ScrollTrigger>
            <ScrollTrigger
              onEnter={() => setcounterOn(true)}
              onExit={() => setcounterOn(false)}
            >
              <div className="increment flex justify-center gap-2 hover:scale-105 shadow-lg transform transition-transform text-xl capitalize rounded-lg bg-blue-300 p-2 px-4">
                Service
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                %
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>

      <div className="page3 w-full gap-5 min-h-[100vh] flex justify-center flex-col p-4 bg-white">
        <ScrollTrigger onEnter={AnimateOn} onExit={AnimateOf}>
          <div className="images flex flex-col md:flex-row lg:flex-row  justify-center gap-8 w-full">
            <img
              className="img1 w-full lg:w-[400px] md:w-[370px] xl:h-[450px] xl:w-[450px] rounded-lg object-cover"
              src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?cs=srgb&dl=pexels-cdc-library-3992949.jpg&fm=jpg"
              alt=""
            />
            <img
              className="img2 xl:w-[400px] md:w-[360px] lg:w-[400px] h-[300px] rounded-lg object-cover"
              src="https://www.shutterstock.com/image-vector/school-building-bus-front-yard-260nw-322015064.jpg"
              alt=""
            />
          </div>
          <div className="images flex flex-col pt-4  md:flex-row lg:flex-row justify-center gap-7 w-full">
            <img
              className="img3 xl:w-[400px] h-[300px] md:w-[370px] rounded-lg object-cover"
              src="https://img.freepik.com/premium-photo/learning-environment-school-pupils-actively-raising-their-hands-seek-teacher-attention_210545-2574.jpg"
              alt=""
            />
            <img
              className="lg:w-[400px] md:w-[360px] xl:h-[450px] xl:w-[450px] w-full object-cover rounded-lg "
              src="https://media.istockphoto.com/id/1178221232/photo/diverse-kids-in-a-classroom.jpg?s=612x612&w=0&k=20&c=ClTi4h6MBSRYfJTIwNJWGJPGUIfIlSxH1NeZ15Y_TyA="
              alt=""
            />
          </div>
        </ScrollTrigger>
      </div>

      <div className="page4 w-full min-h-[60vh] gap-8 p-4 pt-30 md:pt-50 lg:pt-50 xl:pt-60 flex justify-center">
        <div className="flex flex-col-reverse w-full md:flex-row gap-4 justify-between md:justify-around xl:justify-around lg:justify-around text-center lg:flex-row xl:flex-row">
          <div className="left w-full md:w-[45%] lg:w-[45%] xl:w-[45%] flex flex-col gap-3 p-4">
            <img
              className="rotate w-20 h-20"
              src="https://samriddhischool.edu.np/static/media/target.c5c449ad0d30cdde8c8988f9b06de9de.svg"
              alt=""
            />
            <h1 className="text-gray-800 flex flex-start pb-2 font-bold text-2xl capitalize ">
              {t("greetings2")}
            </h1>
            <p className="text-sm tracking-wide text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              {line2}
            </p>
            <p className="text-sm tracking-wide text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              {line3}
            </p>
          </div>
          <div className="right flex flex-start justify-center ">
            <div className="box">{/* images insert */}</div>
          </div>
        </div>
      </div>
      <div className="page5 w-full min-h-[50vh] gap-8 p-4 pt-30 md:pt-50 lg:pt-50 xl:pt-60 flex justify-center">
        <div className="flex w-full flex-col md:flex-row gap-4 justify-between md:justify-around xl:justify-around lg:justify-around text-center lg:flex-row xl:flex-row">
          <div className="left flex justify-center ">
            <div className="box2">{/* images insert */}</div>
          </div>
          <div className="left w-full md:w-[45%] lg:w-[45%] xl:w-[45%] flex flex-col gap-3 p-4">
            <img
              className="rotate w-20 h-20"
              src="https://samriddhischool.edu.np/static/media/vision.713bcd62959838335dc58f2f73848028.svg"
              alt=""
            />
            <h1 className="text-gray-800 flex flex-start pb-2 font-bold text-2xl capitalize ">
              {t("greetings3")}
            </h1>
            <p className="text-sm tracking-wide text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              {line4}
            </p>
            <p className="text-sm tracking-wide text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              {line5}
            </p>
          </div>
        </div>
      </div>

      <div className="page4 w-full mt-5 min-h-[70vh] gap-8 p-4 pt-30 md:pt-50 lg:pt-50 xl:pt-60 flex justify-center">
        <div className="flex flex-col-reverse w-full md:flex-row gap-4 justify-between md:justify-around xl:justify-around lg:justify-around text-center lg:flex-row xl:flex-row">
          <div className="left w-full md:w-[45%] lg:w-[45%] xl:w-[45%] flex flex-col gap-3 p-4">
            <div className="rotate w-[100px] h-[80px]">
              <img
                className="rotate w-20 h-20"
                src="https://samriddhischool.edu.np/static/media/value.ad5e348aed6ffa1745bdfaca9757d58c.svg"
                alt=""
              />
            </div>
            <h1 className="text-gray-800 flex flex-start pb-2 font-bold text-2xl capitalize ">
              {t("greetings4")}
            </h1>
            <h1 className="text-sm tracking-wide flex items-center text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              <FaCaretRight /> {t("values1")}
            </h1>
            <h1 className="text-sm tracking-wide flex  items-center text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              <FaCaretRight /> {t("values2")}
            </h1>
            <h1 className="text-sm tracking-wide flex  items-center text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              <FaCaretRight /> {t("values3")}
            </h1>
            <h1 className="text-sm tracking-wide flex  items-center text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              <FaCaretRight /> {t("values4")}
            </h1>
            <h1 className="text-sm tracking-wide flex  items-center text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              <FaCaretRight /> {t("values5")}
            </h1>
            <h1 className="text-sm tracking-wide flex  items-center text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              <FaCaretRight /> {t("values6")}
            </h1>
          </div>
          <div className="right flex flex-start justify-center ">
            <div className="w-[400px] h-full">
              <img
                className="w-full h-full object-cover mix-blend-multiply rounded-lg "
                src="https://www.swcciowa.edu/images/High_School/HighSchoolMainPage.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="page-5 w-full min-h-[40vh] gap-7 flex flex-col justify-center">
        <Slider />
      </div>
      <div className="page-6 relative w-full min-h-[60vh] gap-7 flex flex-col justify-center">
        <div className="bg-img w-full h-[50vh] text-white flex flex-col justify-center items-center">
          <h1 className="font font-bold text-[18px] lg:text-[28px] flex justify-center items-center px-2">
            {line6}
          </h1>
          <h2 className="font pl-2 text-[17px] lg:text-[22px] flex justify-center items-center px-2">
            {line7}
          </h2>
          <div className="pt-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-3 py-1 border border-blue-500 bg-cyan-400 text-white rounded-md shadow-sm"
            >
              {t("greetings5")}
            </button>
          </div>
        </div>
      </div>

      <div className="page-7 w-full min-h-[60vh] gap-7 flex flex-col justify-center">
        <Testomonial />
      </div>
      <div className="page-8 w-full min-h-[60vh] gap-7 flex flex-col justify-center">
        <div className="flex justify-between p-4 w-full">
          <h1 className=" text-blue-800 font-sans font-bold p-2 capitalize text-2xl border-b-2 border-blue-500">
            rescent blogs
          </h1>
          <h1
            className="text-gray-800 text-xl cursor-pointer"
            onClick={() => navigate("/blogposts")}
          >
            view more
          </h1>
        </div>
        <div className="grid p-3 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {Blogs.slice(0, 4).map((blog) => (
            <div
              key={blog.id}
              className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow"
            >
              <a href="#">
                {/* <img className="rounded-t-lg" src={blog.url} alt={blog.title} /> */}
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 p-1">
                    {blog.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 p-1">
                  {blog.desc}
                </p>
                <a
                  onClick={() => navigate(`/singlepost/${blog.id}`)}
                  href="#"
                  className="inline-flex w-full justify-center items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg bg-[#F59E0B] focus:ring-4 focus:outline-none"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="page-9  w-full min-h-[60vh] gap-7 flex flex-col justify-center p-4">
        <div className="flex justify-between p-4 w-full">
          <h1 className=" text-blue-800 font-sans font-bold p-2 capitalize text-2xl border-b-2 border-blue-500">
            our Teachers
          </h1>

          <h1
            className="text-gray-800 text-2xl cursor-pointer"
            onClick={() => navigate("/allteachers")}
          >
            view more
          </h1>
        </div>
        <div className="grid p-3 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {teachers.slice(0, 4).map((teacher) => (
            <div key={teacher.id} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 rounded-full object-cover mb-4"
                  src={teacher.url}
                  alt={teacher.teachername}
                />
                <h3 className="text-xl font-semibold mb-2">
                  Name:{teacher.teachername}
                </h3>
                <p className="text-gray-700 mb-2">
                  Qualification:{teacher.qualification}
                </p>
                <p className="text-gray-500 mb-2">
                  Experience: {teacher.experience} years
                </p>
                <p className="text-gray-500">Age: {teacher.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="page11 bg-gray-300 w-full min-h-[60vh] gap-8 p-4 pt-30 md:pt-50 lg:pt-50 xl:pt-60 flex justify-center">
        <div className="flex flex-col-reverse w-full md:flex-row gap-4 justify-between md:justify-around xl:justify-around lg:justify-around text-center lg:flex-row xl:flex-row">
          <div className="left w-full md:w-[45%] lg:w-[45%] xl:w-[45%] flex flex-col gap-3 p-4">
            <img
              className="rotate w-20 h-20"
              src="https://samriddhischool.edu.np/static/media/target.c5c449ad0d30cdde8c8988f9b06de9de.svg"
              alt=""
            />
            <h1 className="text-gray-800 flex flex-start pb-2 font-bold text-2xl capitalize ">
              {t("greetings10")}
            </h1>
            <p className="text-sm tracking-wide text-gray-600 md:text-md font-serif lg:text-lg xl:text-lg text-start align-center">
              {line11}
            </p>
          </div>
          <div className="right flex flex-start justify-center ">
            <div className="imagebox">
              <img
                className="h-[400px] w-[500px] object-cover mix-blend-multiply rounded-lg"
                src="https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/432773669_471666571885744_666171203973380415_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lMZuIzbJ2coQ7kNvgHCaWob&_nc_ht=scontent.fbwa5-1.fna&oh=00_AYCMXUTjC_qNz34cxNw9W0xx4H1O_yJ9YmkapmwQlBN0sg&oe=6661ABD5"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="page-10 w-full min-h-[60vh] gap-7 flex flex-col justify-center">
        <Contentmodal />
        <Addmodal />
      </div>
    </main>
  );
}

export default Home;
