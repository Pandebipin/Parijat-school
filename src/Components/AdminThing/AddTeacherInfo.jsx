import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { AddteacherInfo } from "../../Store/teacherInfoSlice";
import "../../App.css";
function AddTeacherInfo() {
  const [teachername, setTeachername] = useState("");
  const [qualification, setQualification] = useState("");
  const [age, setAge] = useState(0);
  const [experience, setExperience] = useState("");
  const [image, setImgFile] = useState();
  const [number, setNumber] = useState(0);
  const [email, setemail] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const AddItems = (e) => {
    e.preventDefault();
    dispatch(
      AddteacherInfo({
        teachername,
        qualification,
        age,
        experience,
        number,
        email,
        image,
        category,
      })
    );
    console.log("kjhs");
  };
  return (
    <form
      onSubmit={AddItems}
      className="max-w-sm mt-12 header pt-10 mx-auto p-6  text-2xl font-bold mb-6 text-center "
    >
      <h2 className="text-xl font-bold mb-6 text-center ">
        Add Teacher Information
      </h2>

      <div className="mb-4">
        <label className="block  text-md font-bold mb-2" htmlFor="teachername">
          Teacher Name:
        </label>
        <input
          type="text"
          id="teachername"
          value={teachername}
          onChange={(e) => setTeachername(e.target.value)}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="teachername">
          Email:
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
          className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="teachername">
          phone number:
        </label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="age">
          Age:
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="qualification">
          Qualification:
        </label>
        <input
          type="text"
          id="qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          required
          className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="imgFile">
          Image:
        </label>
        <input
          type="file"
          id="imgFile"
          accept="image/*"
          onChange={(e) => setImgFile(e.target.files[0])}
          required
          className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="experience">
          Experience:
        </label>
        <input
          type="text"
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
          className="w-full px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="relative pb-7">
        <select
          className="block cursor-pointer  w-full  border border-gray-300 pr-8 rounded shadow "
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="math">math</option>
          <option value="english">english</option>
          <option value="science">science</option>
          <option value="nepali">nepali</option>
          <option value="opt math">opt math</option>
          <option value="economics">economics</option>
          <option value="economics">computerscience</option>
          <option value="social">social</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default AddTeacherInfo;
