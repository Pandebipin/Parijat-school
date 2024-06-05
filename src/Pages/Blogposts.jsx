import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, selectBuckets } from "../Store/bucketSlice";
import { useNavigate } from "react-router-dom";

function Blogposts() {
  const Blogs = useSelector(selectBuckets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const navigate = useNavigate();
  console.log(Blogs);

  return (
    <div className="grid p-3 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Blogs.map((blog) => (
        <div
          key={blog.id}
          className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow "
        >
          <a href="#">
            {/* <img className="rounded-t-lg" src={blog.url} alt={blog.title} /> */}
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {blog.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {blog.desc}
            </p>
            <a
              onClick={() => navigate(`/singlepost/${blog.id}`)}
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogposts;
