import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers, selectAllTeachers } from "../Store/teacherInfoSlice";
import Sidebar from "./Sidebar";

const TeacherBio = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);

  useEffect(() => {
    dispatch(fetchTeachers());
    window.scroll(0, 0);
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full mt-9 pt-12">
      {/* Sidebar */}
      <div className="w-full lg:w-1/5 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="p-4 bg-gray-100 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Teachers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <img
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-3"
                src={teacher.url}
                alt={teacher.teachername}
              />
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
