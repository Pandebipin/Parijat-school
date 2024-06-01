import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { AddteacherInfo } from "../Store/teacherInfoSlice";

function AddTeacherInfo() {
  const [teachername, setTeachername] = useState("");
  const [qualification, setQualification] = useState("");
  const [age, setAge] = useState(0);
  const [experience, setExperience] = useState("");
  const [image, setImgFile] = useState();
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
        image,
        category,
      })
    );
    console.log("kjhs");
  };
  return (
    <form
      onSubmit={AddItems}
      className="max-w-sm mx-auto p-6 bg-white text-2xl font-bold mb-6 text-center text-gray-800"
    >
      <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
        Add Teacher Information
      </h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-md font-bold mb-2"
          htmlFor="teachername"
        >
          Teacher Name:
        </label>
        <input
          type="text"
          id="teachername"
          value={teachername}
          onChange={(e) => setTeachername(e.target.value)}
          required
          className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
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
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="qualification"
        >
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
        <label className="block text-gray-700 font-bold mb-2" htmlFor="imgFile">
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
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="experience"
        >
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
          className="block cursor-pointer  w-full bg-white border border-gray-300 pr-8 rounded shadow "
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="math">math</option>
          <option value="english">english</option>
          <option value="science">science</option>
          <option value="nepali">nepali</option>
          <option value="nepali">opt math</option>
          <option value="nepali">economics</option>
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
