import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../utils/apiRoute';
import Spinner from '../components/common/Spinner';
import { AuthContext } from '../providers/AuthProvider';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [contentBlocks, setContentBlocks] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleAddBlock = (type) => {
    setContentBlocks([
      ...contentBlocks,
      { type, content: '', order: contentBlocks.length + 1 },
    ]);
  };

  const handleContentChange = (index, value) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].content = value;
    setContentBlocks(updatedBlocks);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare form data for submission
    const formData = new FormData();
    formData.append('title', title);

    if (thumbnail) formData.append('thumbnail', thumbnail);
    formData.append('contentBlocks', JSON.stringify(contentBlocks));

    formData.append('userId', currentUser.id);

    // Submit the form data to the server
    try {
      const response = await apiRequest.post('/post/create', formData);
      setLoading(false);
      console.log(response.data);
      if (response.data.Ok) {
        setSuccessMsg('Blog post created successfully!');

        setTimeout(() => setSuccessMsg(null), 3000);
      } else {
        setError('Failed to create blog post.');

        setTimeout(() => setError(null), 3000);
      }
    } catch (error) {
      setError('Failed to create blog post.');

      setTimeout(() => setError(null), 3000);
      // console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-4 px-3">
      <div className="flex justify-end">
        <Link
          to={'/dashboard/posts'}
          className="py-2 px-5 text-white bg-green-500 rounded-lg"
        >
          Browse All Posts
        </Link>
      </div>
      <div className="md:h-[500px]">
        <form
          onSubmit={handleSubmit}
          className="w-full rounded-lg p-2 border shadow-sm mt-4 md:h-[450px] overflow-y-scroll flex flex-col gap-3"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className='after:content-["*"] after:text-orange-600'
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-md border border-zinc-400 p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="thumbnail"
              className='after:content-["*"] after:text-orange-600'
            >
              Thumbnail
            </label>
            <input
              type="file"
              onChange={handleThumbnailChange}
              className="w-full rounded-md border border-zinc-400 p-2"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold my-3">Blog post contents</h3>
            {contentBlocks.map((block, index) => (
              <div key={index}>
                {block.type === 'image' ? (
                  <input
                    type="file"
                    onChange={(e) =>
                      handleContentChange(index, e.target.files[0])
                    }
                    required
                  />
                ) : (
                  <textarea
                    placeholder={`Enter ${block.type} content`}
                    value={block.content}
                    onChange={(e) => handleContentChange(index, e.target.value)}
                    required
                    className="w-full rounded-lg h-[100px] overflow-x-auto border border-zinc-400 p-2"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleAddBlock('h1')}
              className="py-1 px-2 rounded-md text-white bg-orange-600"
            >
              Add H1
            </button>
            <button
              type="button"
              onClick={() => handleAddBlock('h2')}
              className="py-1 px-2 rounded-md text-white bg-orange-600"
            >
              Add H2
            </button>
            <button
              type="button"
              onClick={() => handleAddBlock('h3')}
              className="py-1 px-2 rounded-md text-white bg-orange-600"
            >
              Add H3
            </button>
            <button
              type="button"
              onClick={() => handleAddBlock('text')}
              className="py-1 px-2 rounded-md text-white bg-orange-600"
            >
              Add Text
            </button>
          </div>
          <button
            type="submit"
            className="py-2 px-6 bg-green-500 text-white rounded-lg my-4 w-[100px]"
          >
            {loading ? <Spinner /> : <span>Create</span>}
          </button>
          {successMsg && (
            <span className="block text-left text-green-500 py-2">
              {successMsg}
            </span>
          )}
          {error && (
            <span className="block text-left text-red-500 py-2">{error}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
