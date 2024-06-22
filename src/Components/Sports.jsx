// src/SportsFacilities.js

import React from "react";

const Sports = () => {
  return (
    <div className="bg-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center p-2">
          Our Sports Facilities
        </h2>
        <img
          className="w-full h-[450px] object-cover"
          src="https://scontent.fktm13-1.fna.fbcdn.net/v/t39.30808-6/441971086_506391355079932_3032384378897902571_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bmGlEn6OdSUQ7kNvgEvVpNj&_nc_ht=scontent.fktm13-1.fna&oh=00_AYCm59QUPKFi7iFHAE4DBWXsYEqiR1LbUDIk02nTIjdmFA&oe=66624BB1"
          alt=""
        />
        <p className="mt-4 text-lg leading-6 text-gray-600 text-center">
          Our school offers top-notch sports facilities designed to promote
          physical fitness and teamwork among our students. From
          state-of-the-art equipment to spacious fields, we provide everything
          needed for a comprehensive sports education.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://www.shutterstock.com/image-photo/open-city-sports-grounds-playing-260nw-1767938552.jpg"
              alt="Sports Field"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              Spacious Sports Field
            </h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Our expansive sports field is perfect for outdoor activities
              including soccer, football, and track and field events,
              encouraging students to engage in various sports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
