import React, { useState, useEffect } from 'react';
import img from '../../assets/img.jpg';
import { FaArrowRight, FaHornbill } from 'react-icons/fa';
import { apiRequest } from '../../utils/apiRoute';

const Latests = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blogs from the backend
    const fetchBlogs = async () => {
      try {
        const response = await apiRequest.get('/post/all');
        setBlogs(response.data.posts);
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
    <div className="py-10">
      <div className="p-4 md:w-[1000px] md:mx-auto">
        <div className="h-10 w-10 md:h-15 md:w-15 md:text-2xl rounded-full flex items-center justify-center text-base my-7  bg-slate-800 text-white">
          <FaHornbill />
        </div>
        <h1 className="text-xl font-bold mt-15 border-l-8 border-slate-800 pl-3 md:text-4xl md:font-extrabold">
          What New Here.
        </h1>
        <div className="grid grid-cols-fluid-sm gap-4 mt-8">
          {/* Blog post */}
          {blogs.map((post) => (
            <div className="transition-transform duration-300 hover:scale-[1.05]">
              <a href={`/blog/${post.slug}`}>
                <div className="relative rounded-md ">
                  <div className="h-50">
                    <img
                      src={`http://localhost:3000/uploads/${post.thumbnail}`}
                      alt=""
                      className="object-cover h-full w-full rounded-xl"
                    />
                  </div>
                  <h3 className="absolute flex justify-between items-end left-2 bottom-3 right-2 text-white lg:text:lg font-semibold my-3 bg-zinc-800/75 rounded-lg p-2">
                    <span>{post.title}</span>
                    <span>
                      <FaArrowRight />
                    </span>
                  </h3>
                </div>
              </a>
            </div>
          ))}
          {/* End of blog post */}
        </div>
      </div>
    </div>
  );
};

export default Latests;
