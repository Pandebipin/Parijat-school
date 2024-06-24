// src/Dancingsection.js

import React from "react";

const Dancingsection = () => {
  return (
    <div className="bg-white py-12 mt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Our Dancing Facilities
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600 text-center">
          At our school, we are proud to offer exceptional dancing facilities
          that support the growth and development of our students. From
          beginners to advanced dancers, our facilities provide the perfect
          environment for learning, practicing, and performing.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://www.shutterstock.com/image-photo/group-energetic-hiphop-dancers-focused-600nw-702288490.jpg"
              alt="Dance Studio"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              State-of-the-art Dance Studio
            </h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Our dance studio is equipped with modern flooring, full-length
              mirrors, and sound systems to provide the best environment for our
              students.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://res.cloudinary.com/yaffa-publishing/image/fetch/q_auto:best,c_fit,w_630,f_auto/http%3A%2F%2Fyaffa-cdn.s3.amazonaws.com%2Fyaffadsp%2Fimages%2FdmImage%2FSourceImage%2FJOSEPHINE-studio-shot-resized.jpg"
              alt="Performance Hall"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              Spacious Performance Hall
            </h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Our performance hall allows students to showcase their talent with
              professional lighting and ample seating for an audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dancingsection;
