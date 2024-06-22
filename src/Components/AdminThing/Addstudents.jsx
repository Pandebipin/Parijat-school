import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "../../App.css";
import { Addstudentinfo } from "../../Store/studentSlice";

function Addstudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [section, setSection] = useState("");
  const [class1, setClass] = useState("");
  const [image, setImgFile] = useState(null);

  const dispatch = useDispatch();

  const addStudent = (e) => {
    e.preventDefault();
    dispatch(
      Addstudentinfo({
        name,
        age,
        number,
        email,
        section,
        image,
        class1,
      })
    );
    console.log("Student bio data submitted");
  };

  return (
    <form
      onSubmit={addStudent}
      className="max-w-sm mt-12 header pt-10 mx-auto p-6 text-2xl font-bold mb-6 text-center"
    >
      <h2 className="text-xl font-bold mb-6 text-center">
        Upload Student Bio Data
      </h2>

      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="age">
          Age:
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="number">
          Phone Number:
        </label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="section">
          Section:
        </label>
        <input
          type="text"
          id="section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="section">
          Class:
        </label>
        <input
          type="text"
          id="section"
          value={section}
          onChange={(e) => setClass(e.target.value)}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="mb-4">
        <label className="block text-md font-bold mb-2" htmlFor="imgFile">
          Image:
        </label>
        <input
          type="file"
          id="imgFile"
          accept="image/*"
          onChange={(e) => setImgFile(e.target.files[0])}
          required
          className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
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

export default Addstudent;
