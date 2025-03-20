// TeacherBio.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers, selectAllTeachers } from "../Store/teacherInfoSlice";
import Sidebar from "./Sidebar";

const TeacherBio = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);
  
  useEffect(() => {
    dispatch(fetchTeachers());
    window.scrollTo(0, 0);
  }, [dispatch]);
  
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full mt-18 lg:mt-9 pt-4 lg:pt-12">
      <div className="w-full lg:w-1/3 lg:block flex-shrink-0">
        <Sidebar />
      </div>
      
     
      <div className="p-4 bg-gray-100 w-full min-h-screen">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Teachers</h2>
        {teachers.length === 0 && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-pulse text-gray-500">Loading teachers...</div>
          </div>
        )}
        
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-3">
                <img
                  className="w-full h-full object-cover"
                  src={teacher.url}
                  alt={teacher.teachername}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150?text=Teacher";
                  }}
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-1">{teacher.teachername}</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Qualification: {teacher.qualification}
              </p>
              <p className="text-gray-500 text-sm md:text-base">
                Experience: {teacher.experience} years
              </p>
              <p className="text-gray-500 text-sm md:text-base">Age: {teacher.age}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherBio;
