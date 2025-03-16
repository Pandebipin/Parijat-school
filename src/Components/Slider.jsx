import React from "react";
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
        slidesPerView={1} // default to 1
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNR1nsUNCfcp--WWLLcYfcrvBpF9-w-g0Zw&s"
              alt=""
            />
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            </p>
            <p className="mt-4 font-semibold">Event on 2077-science research</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white w-[600px] rounded-lg shadow-lg p-6">
            <img
              src="https://media.istockphoto.com/id/1189351718/photo/christmas-preschool-instant-print-transfer-activities.jpg?s=612x612&w=0&k=20&c=PHblIbxMGcOkhO0qwd9f9Og-VDRn60823juYQZDO1wk="
              alt=""
            />
            <p className="text-gray-800 text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            </p>
            <p className="mt-4 font-semibold">Event on 2079-Holi celebration</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
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
