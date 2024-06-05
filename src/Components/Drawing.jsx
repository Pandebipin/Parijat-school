// src/Drawing.js

import React from "react";

const Drawing = () => {
  return (
    <div className="bg-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Our Drawing Facilities
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600 text-center">
          Our school is committed to nurturing creativity and artistic skills
          through our exceptional drawing facilities. From well-equipped studios
          to inspiring environments, we provide students with everything they
          need to excel in the visual arts.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1606819717115-9159c900370b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D"
              alt="Art Gallery"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-4 text-xl font-medium text-gray-900">
              Inspiring Art Gallery
            </h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Our art gallery showcases student works and provides an inspiring
              space for students to appreciate and learn from each other's
              creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawing;
