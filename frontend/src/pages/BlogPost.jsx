import React, { useState, useEffect } from 'react';
import img from '../assets/sunrise.jpg';
import { FaTrain } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { apiRequest } from '../utils/apiRoute';

const PackageInfo = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogPost, setBlogPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { slug } = useParams();
  console.log(slug);

  // Get all posts
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

  // Get single post
  useEffect(() => {
    //fetch package data
    const fetchPost = async () => {
      try {
        const response = await apiRequest.get(`/post/${slug}`);
        setBlogPost(response.data.post);
        // console.log(blogPost);
      } catch (err) {
        setError(err.message);

        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <>
      <div className="h-[300px] mt-[56px] bg-pink-500 mb-10 overflow-hidden">
        <div className="object-cover h-full">
          <img
            src={img}
            alt=""
            className="h-full object-cover w-full object-center"
          />
        </div>
      </div>

      <div>
        <div className="md:w-[700px] my-7 md:my-12 md:mx-auto">
          <div className="w-full h-[300px] rounded-2xl overflow-hidden hover:scale-[1.05] transition-transform duration-500">
            <img
              src={`http://localhost:3000/uploads/${blogPost.thumbnail}`}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-3 mt-5">
            {blogPost.contentBlocks ? (
              <div className="flex flex-col gap-3">
                {blogPost.contentBlocks.map((block) =>
                  block.contentType === 'h1' ? (
                    <h1 className="font-bold md:text-2xl">
                      {block.contentData}
                    </h1>
                  ) : block.contentType === 'h2' ? (
                    <h2 className="font-bold md:text-xl">
                      {block.contentData}
                    </h2>
                  ) : block.contentType === 'h3' ? (
                    <h3 className="font-bold md:text-lg">
                      {block.contentData}
                    </h3>
                  ) : (
                    <p className="text-justify">{block.contentData}</p>
                  )
                )}
              </div>
            ) : (
              <p>No content available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Recommended posts */}
      <div className="mb-8">
        <div className="md:w-[700px] md:mx-auto">
          <h1 className="border-l-4 border-slate-800 px-2 font-bold md:font-extrabold text-xl md:text-2xl mb-5 md:mb-10">
            Recent stories
          </h1>
          <div className="grid grid-cols-fluid-sm gap-3">
            {/* post start */}
            {blogs.map((post) => (
              <div className="border border-zinc-300 p-3 overflow-hidden rounded-xl">
                <img
                  src={`http://localhost:3000/uploads/${post.thumbnail}`}
                  alt=""
                />
                <h1 className="font-bold text-xl md:text-2xl my-3">
                  {post.title}
                </h1>
              </div>
            ))}
            {/* Post end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageInfo;
