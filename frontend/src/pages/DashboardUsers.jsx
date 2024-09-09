import React from 'react';
import { apiRequest } from '../utils/apiRoute';

const DashboardUsers = () => {
  const handleCreateUserSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = await apiRequest.post('/auth/register', formData, {
      headers: {
        'Content-Type': 'application/form-data',
      },
    });
  };
  return (
    <div>
      <div className="border shadow-md p-5 sm:max-w-[400px] sm:mx-auto mt-8">
        <h3 className="text-center font-semibold py-3">Create New User</h3>
        <form onSubmit={handleCreateUserSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="names"
            id="names"
            placeholder="Names"
            className="w-full py-1 px-1 border border-zinc-300 rounded-lg text-indigo-700 outline-offset-1 outline-indigo-700 caret:text-indigo-700"
          />
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            className="w-full py-1 px-1 border border-zinc-300 rounded-lg text-indigo-700 outline-offset-1 outline-indigo-700 caret:text-indigo-700"
          />
          <input
            type="file"
            name="avatar"
            id="avatar"
            placeholder="Profile picture"
            className="w-full py-1 px-1 border border-zinc-300 rounded-lg text-indigo-700 outline-offset-1 outline-indigo-700 caret:text-indigo-700"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full py-1 px-1 border border-zinc-300 rounded-lg text-indigo-700 outline-offset-1 outline-indigo-700 caret:text-indigo-700"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full py-1 px-1 border border-zinc-300 rounded-lg text-indigo-700 outline-offset-1 outline-indigo-700 caret:text-indigo-700"
          />
          <button
            type="submit"
            className="bg-green-600 text-white rounded-md py-1"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardUsers;
