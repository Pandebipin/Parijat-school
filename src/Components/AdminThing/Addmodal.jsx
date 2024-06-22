import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addcontentmodal } from "../../Store/modalSlice";

function Addmodal() {
  const [title, setTitle] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();
    if (imgFile && title) {
      dispatch(Addcontentmodal({ title, image: imgFile, date: currentDate }));
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add New Item
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Add modal
      </button>
    </form>
  );
}

export default Addmodal;
