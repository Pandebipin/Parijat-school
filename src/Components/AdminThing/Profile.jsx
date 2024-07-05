import React from "react";
import "../../App.css";
function Profile() {
  return (
    <div className="flex justify-between align-center items-start gap-4 p-4 mt-[90px] header">
      <div className="flex flex-col justify-startn gap-2 p-3 w-[80%]">
        <h1 className="font-bold text-xl">My details</h1>
        <span className="text-gray-700 p-2 font-bold border-b-[1.2px] border-gray-400">
          my information
        </span>
        <div className="flex flex-col gap-4 max-w-[600px] p-2">
          <input
            type="text"
            placeholder="First Name"
            className="px-4 w-full py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="pl-2 ">
          <input
            type="date"
            className="p-3 header rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            id=""
          />
        </div>
        <div className="pl-2">
          <input
            type="number"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="e.g. 977 298321"
            id=""
          />
        </div>
        <div className="py-2 px-2 pl-1">
          <button className="bg-blue-500 rounded-md text-white px-8 py-3 text-center focus:outline-none hover:bg-blue-600">
            Save
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-gray-700 p-2 font-bold border-b-[1.2px] border-gray-400">
            Email Address
          </span>
          <div className="flex flex-col lg:flex-row gap-4 p-2">
            <div className="w-full lg:w-[22%]">
              <span>
                Assertively utilize adaptive customer service for future-proof
                platforms
              </span>
            </div>
            <input
              type="text"
              placeholder="Email address"
              className="px-3 py-2 rounded-md lg:w-1/3"
            />
            <input
              type="text"
              placeholder="Password"
              className="px-2 py-2 rounded-md lg:w-1/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
