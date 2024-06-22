// src/BlogList.js
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Store/bucketSlice";

const BlogList = ({ editBlog }) => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBuckets);

  const deleteBlog = async (id) => {
    const firestoreref = getFirestore();
    await deleteDoc(doc(firestoreref, "Blogdata", id));
    dispatch(fetchBlogs());
  };

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <p>{blog.desc}</p>
          {blog.url && (
            <img
              src={blog.url}
              alt={blog.title}
              className="mt-2 w-full h-auto"
            />
          )}
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => editBlog(blog)}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => deleteBlog(blog.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
