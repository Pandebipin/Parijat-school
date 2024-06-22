import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTeachers,
  selectAllTeachers,
  removeTeacherInfo,
  updateTeacher,
} from "../../Store/teacherInfoSlice";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "../../App.css";
const TeacherList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);
  const [editTeacherId, setEditTeacherId] = useState(null);
  const [formData, setFormData] = useState({
    teachername: "",
    experience: "",
    qualification: "",
    age: "",
    category: "",
    number: "",
    email: "",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTeachers());
    window.scroll(0, 0);
  }, [dispatch]);

  const handleEditClick = (teacher) => {
    setEditTeacherId(teacher.id);
    setFormData({
      teachername: teacher.teachername || "",
      experience: teacher.experience || "",
      qualification: teacher.qualification || "",
      age: teacher.age || "",
      category: teacher.category || "",
      number: teacher.number || "",
      email: teacher.email || "",
    });
    setOpen(true);
  };

  const handleDeleteClick = (id) => {
    dispatch(removeTeacherInfo(id));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value ?? "", // Ensure the value is never null or undefined
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTeacher({ id: editTeacherId, updatedata: formData }));
    setEditTeacherId(null);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <div className="p-6 space-y-6 min-h-screen  max-w-[900px] mt-12 header mx-auto text-2xl font-bold mb-6 text-center">
      <div className="table-responsive mt-4">
        <table className="table table-bordered dashboard">
          <thead>
            <tr>
              {" "}
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
                qualification
              </th>
              <th className="bg-[#1866ee] text-[14px] border-none border-black">
                email
              </th>
              <th className="bg-[#1866ee] text-[14px] border-none border-black">
                profession
              </th>
              <th className="bg-[#1866ee] text-[14px] border-none border-black">
                Rating
              </th>
              <th className="bg-[#1866ee] text-[14px] border-black">action</th>
            </tr>
          </thead>
          <tbody className="dashboard">
            {teachers.map((elem, index) => (
              <tr key={elem.id}>
                <td className="text-[13px]">{index}</td>
                <td className="text-[13px]">{elem.teachername}</td>
                <td className="text-[13px]">{elem.number}</td>
                <td className="text-[13px]">{elem.qualification}</td>
                <td className="text-[13px]">{elem.email}</td>
                <td className="text-[13px]">{elem.category}</td>
                <td className="text-[13px]">5(5)</td>
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
                </td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2>Edit Teacher</h2>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Name"
              name="teachername"
              value={formData.teachername}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Experience"
              name="experience"
              value={formData.experience}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Qualification"
              name="qualification"
              value={formData.qualification}
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
              label="Category"
              name="category"
              value={formData.category}
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

export default TeacherList;
