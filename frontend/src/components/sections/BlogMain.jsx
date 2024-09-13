import React, { useState, useEffect } from 'react';
import {
  FaAngleLeft,
  FaAngleRight,
  FaCalendar,
  FaUserAlt,
} from 'react-icons/fa';
import img from '../../assets/img.jpg';
import { apiRequest } from '../../utils/apiRoute';

const BlogMain = ({ page, setPage }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blogs from the backend
    const fetchBlogs = async () => {
      try {
        const response = await apiRequest.get('/post/all');
        setBlogs(response.data.posts);
        // console.log(blogs);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Error fetching blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="my-20">
      <div className="p-3 md:w-[800px] md:mx-auto">
        <div className="flex flex-col gap-3">
          <p className="font-extralight mb-4">
            eco_consciousLife Publications{''}
            <span className="text-green-400 underline ml-2 underline-offset-4">
              All about us here.
            </span>
          </p>

          {/* Packages cards */}
          <div className="grid gap-3 md:grid-cols-3">
            {/* Blog post start */}
            {blogs.map((post) => (
              <div className="group overflow-hidden border p-4 shadow-md hover:scale-[1.04] transition-all duration-500 cursor-pointer">
                <img
                  src={`http://localhost:3000/uploads/${post.thumbnail}`}
                  alt=""
                  className="object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="mt-4">
                  <span className="text-slate-400 text-sm flex items-center">
                    <FaCalendar className="mr-2 text-sm" /> 21-jun-2024
                  </span>
                  <span className="text-slate-400 text-sm flex items-center">
                    <FaUserAlt className="mr-2 text-sm" /> MUGISHA Fred
                  </span>
                  <h1 className="font-bold mt-3">{post.title}</h1>
                  <a
                    href={`/blog/${post.slug}`}
                    className="block py-2 px-5 mt-3 text-white text-center rounded-sm my-2 bg-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
            {/* Blog post card end */}
          </div>

          {/* pagination */}
          <div className="py-4">
            <div>
              <div className="flex items-center justify-center">
                <span className="bg-zinc-300 py-2 px-5 rounded-md">
                  <FaAngleLeft className="text-slate-700 font-bold" />
                </span>
                <span className="py-2 px-5 text-slate-700 font-bold">
                  {page}
                </span>
                <span className="bg-zinc-300 py-2 px-5 rounded-md">
                  <FaAngleRight className="text-slate-700 font-bold" />
                </span>
              </div>
            </div>
          </div>
          {/* End of pagination */}
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
