import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, selectBuckets } from "../Store/bucketSlice";

const Singleblogpost = () => {
  const blogs = useSelector(selectBuckets);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">
        By Jane Doe | {new Date(blog.date).toLocaleDateString()}
      </p>
      <img
        src={blog.url}
        alt="Blog Post"
        className="w-full h-auto mb-6 rounded-lg object-cover"
      />
      <div className="prose prose-lg">
        <p>{blog.desc}</p>
      </div>
    </div>
  );
};

export default Singleblogpost;
