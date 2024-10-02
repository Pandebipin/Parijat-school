import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchstudents,
  selectAllstudents,
  removestudentInfo,
  updatestudent,
} from "../../Store/studentSlice";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "../../App.css";

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectAllstudents);
  const [editStudentId, setEditStudentId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    class: "",
    section: "",
    number: "",
    email: "",
  });
  const [open, setOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  useEffect(() => {
    dispatch(fetchstudents());
    window.scroll(0, 0);
  }, [dispatch]);

  const handleEditClick = (student) => {
    setEditStudentId(student.id);
    setFormData({
      name: student.name || "",
      age: student.age || "",
      class: student.class || "",
      section: student.section || "",
      number: student.number || "",
      email: student.email || "",
    });
    setOpen(true);
  };

  const handleDeleteClick = (id) => {
    dispatch(removestudentInfo(id));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value ?? "",
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updatestudent({ id: editStudentId, updatedata: formData }));
    setEditStudentId(null);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="p-6 space-y-6 min-h-screen max-w-[900px] mt-12 pt-10 header mx-auto text-2xl font-bold mb-6 text-center">
      <div className="mb-4 flex justify-between">
        <FormControl className="w-[45%]" size="small">
          <Select
            labelId="select-class-label"
            id="select-class"
            value={selectedClass}
            onChange={handleClassChange}
            displayEmpty
          >
            <MenuItem value="">All Classes</MenuItem>
            <MenuItem value="12">12</MenuItem>
            <MenuItem value="11">11</MenuItem>
            <MenuItem value="10">10</MenuItem>
            {/* Add more class options as needed */}
          </Select>
        </FormControl>
        <FormControl className="w-[45%]" size="small">
          <Select
            labelId="select-section-label"
            id="select-section"
            value={selectedSection}
            onChange={handleSectionChange}
            displayEmpty
          >
            <MenuItem value="">All Sections</MenuItem>
            <MenuItem value="Alpha">Alpha</MenuItem>
            <MenuItem value="Beta">Beta</MenuItem>
            <MenuItem value="Gamma">Gamma</MenuItem>
            {/* Add more section options as needed */}
          </Select>
        </FormControl>
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
                email
              </th>
              <th className="bg-[#1866ee] text-[14px] border-black">action</th>
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
                <td className="text-[13px]">{elem.email}</td>
                <td className="text-[13px]">
                  <div className="actions flex justify-center items-center w-full">
                    <Button color="secondary" className="w-[20px]">
                      <FaEye className="text-[22px]" />
                    </Button>
                    <Button
                      color="success"
                      className="w-[20px]"
                      onClick={() => handleEditClick(elem)}
                    >
                      <FaPencilAlt />
                    </Button>
                    <Button
                      color="error"
                      className="w-[20px]"
                      onClick={() => handleDeleteClick(elem.id)}
                    >
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2>Edit Student</h2>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Class"
              name="class"
              value={formData.class}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Section"
              name="section"
              value={formData.section}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone Number"
              name="number"
              value={formData.number}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default StudentList;
