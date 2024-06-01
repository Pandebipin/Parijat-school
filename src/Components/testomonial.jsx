import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testomonail.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Testomonial() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="rounded-lg w-[600px] sm:w-[700px] shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-4 font-semibold">Bipin pandey</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-4 font-semibold">Karlex pandey</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-4 font-semibold">bishow pandey</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-4 font-semibold">basant bhushal</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-4 font-semibold">Adam smith</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="mt-4 font-semibold">karl marks</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
