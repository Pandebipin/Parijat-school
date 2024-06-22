import React, { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaUserTie,
  FaBlog,
  FaNewspaper,
  FaDollarSign,
  FaEye,
  FaPencilAlt,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchstudents, selectAllstudents } from "../../Store/studentSlice";
import "../../App.css";
import Linechart from "./Linechart";

const Dashboard = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const dispatch = useDispatch();
  const students = useSelector(selectAllstudents);

  useEffect(() => {
    dispatch(fetchstudents());
    window.scroll(0, 0);
  }, [dispatch]);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const filteredStudents = students.filter(
    (student) =>
      (selectedClass === "" || student.class1 === selectedClass) &&
      (selectedSection === "" || student.section === selectedSection)
  );

  return (
    <div className="p-6 space-y-6 mt-20 min-h-screen bg-cover bg-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-100 shadow-lg rounded-lg flex items-center">
            <FaUserGraduate className="text-blue-600 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-700">
                Total Students
              </h3>
              <p className="text-2xl text-blue-600">150</p>
            </div>
          </div>
          <div className="p-6 bg-green-100 shadow-lg rounded-lg flex items-center">
            <FaUserTie className="text-green-600 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-700">
                Total Teachers
              </h3>
              <p className="text-2xl text-green-600">30</p>
            </div>
          </div>
          <div className="p-6 bg-purple-100 shadow-lg rounded-lg flex items-center">
            <FaBlog className="text-purple-600 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-700">
                New Blog Posts
              </h3>
              <p className="text-2xl text-purple-600">5</p>
            </div>
          </div>
          <div className="p-6 bg-red-100 shadow-lg rounded-lg flex items-center">
            <FaNewspaper className="text-red-600 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-red-700">
                New News Articles
              </h3>
              <p className="text-2xl text-red-600">8</p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-blue-300 shadow-lg rounded-lg flex items-center space-x-6">
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-1 text-blue-800">
              Total Income
            </h3>
            <div className="flex gap-2">
              <FaDollarSign className="text-blue-500 text-4xl" />
              <p className="text-3xl font-semibold text-blue-700">150</p>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-lg dashboard mt-6 p-2">
        <h3 className="font-bold text-[18px]">Total students</h3>

        <div className="row filtercards">
          <div className="col">
            <h4 className="font-[700] text-[14px] mt-3">Class</h4>
            <FormControl className="w-full" size="small">
              <Select
                labelId="select-class-label"
                id="select-class"
                value={selectedClass}
                onChange={handleClassChange}
                label="Class"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="12">12</MenuItem>
                <MenuItem value="11">11</MenuItem>
                <MenuItem value="10">10</MenuItem>
                {/* Add more class options as needed */}
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <h4 className="font-[700] text-[14px] mt-3">Section</h4>
            <FormControl className="w-full" size="small">
              <Select
                labelId="select-section-label"
                id="select-section"
                value={selectedSection}
                onChange={handleSectionChange}
                label="Section"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Alpha">Alpha</MenuItem>
                <MenuItem value="Beta">Beta</MenuItem>
                <MenuItem value="Gamma">Gamma</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="table-responsive mt-4">
          <table className="table table-bordered dashboard">
            <thead>
              <tr>
                <th className="bg-[#1866ee] text-[14px] border-none border-black">
                  uid
                </th>
                <th className="bg-[#1866ee] text-[14px] border-none border-black">
                  name
                </th>
                <th className="bg-[#1866ee] text-[14px] border-none border-black">
                  phoneNumber
                </th>
                <th className="bg-[#1866ee] text-[14px] border-none border-black">
                  class
                </th>
                <th className="bg-[#1866ee] text-[14px] border-none border-black">
                  section
                </th>
                <th className="bg-[#1866ee] text-[14px] border-none border-black">
                  Rating
                </th>
                <th className="bg-[#1866ee] text-[14px] border-black">
                  action
                </th>
              </tr>
            </thead>
            <tbody className="dashboard">
              {filteredStudents.map((elem, index) => (
                <tr key={elem.id}>
                  <td className="text-[13px]">{index}</td>
                  <td className="text-[13px]">{elem.name}</td>
                  <td className="text-[13px]">{elem.number}</td>
                  <td className="text-[13px]">{elem.class1}</td>
                  <td className="text-[13px]">{elem.section}</td>
                  <td className="text-[13px]">5(5)</td>
                  <td className="text-[13px]">
                    <div className="actions flex justify-center items-center w-full">
                      <Button color="secondary" className="w-[20px]">
                        <FaEye className="text-[22px]" />
                      </Button>
                      <Button color="success" className="w-[20px]">
                        <FaPencilAlt />
                      </Button>
                      <Button color="error" className="w-[20px]">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <Linechart />
      </div>
    </div>
  );
};

export default Dashboard;
