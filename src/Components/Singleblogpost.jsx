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
    window.scroll(0, 0);
  }, [dispatch]);

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto h-full p-8 bg-white shadow-md rounded-lg py-12 mt-[100px]">
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
