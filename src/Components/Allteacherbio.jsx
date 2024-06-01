import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers, selectAllTeachers } from "../Store/teacherInfoSlice";
import Sidebar from "./Sidebar";

const TeacherBio = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);

  useEffect(() => {
    dispatch(fetchTeachers());
    // window.scroll(0, 0);
  }, [dispatch]);

  return (
    <div className="flex gap-8 w-full">
      <Sidebar />
      <div className="p-6 bg-gray-100 w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Our Teachers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
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
    </div>
  );
};

export default TeacherBio;
