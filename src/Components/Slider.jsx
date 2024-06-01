import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <img
              src="https://www.greenshaw.co.uk/_site/data/files/images/slideshow/1/746861C19A308C0CA2A2605C10B091F1.jpg"
              alt=""
            />
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            </p>
            <p className="mt-4 font-semibold">Event on 2077-science research</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <img
              src="https://www.greenshaw.co.uk/_site/data/files/images/slideshow/1/746861C19A308C0CA2A2605C10B091F1.jpg"
              alt=""
            />
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            </p>
            <p className="mt-4 font-semibold">Event on 2079-Holi celebration</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <img
              src="https://static.toiimg.com/thumb/msid-104665854,width-1280,height-720,resizemode-4/104665854.jpg"
              alt=""
            />
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            </p>
            <p className="mt-4 font-semibold">Event on 2077-Dashain function</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <img
              src="https://static.toiimg.com/thumb/msid-104665854,width-1280,height-720,resizemode-4/104665854.jpg"
              alt=""
            />
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            </p>
            <p className="mt-4 font-semibold">Event on 2080-Annual program</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
