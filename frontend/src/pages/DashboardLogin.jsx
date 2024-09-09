import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaAngleRight, FaEnvelope, FaLock } from 'react-icons/fa';
import { apiRequest } from '../utils/apiRoute.jsx';

const DashboardLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const userCredentials = {
      email,
      password,
    };

    try {
      const res = await apiRequest.post('/auth/login', userCredentials, {
        Headers: { 'Content-Type': 'application/json' },
      });

      console.log(res.data);
    } catch (error) {
      console.log('Error: ' + error);
    }
  };
  return (
    <div className="bg-zinc-200 h-screen flex items-center justify-center">
      <div className="flex flex-col gap-10 border bg-white border-zinc-300 sm:w-[500px]  sm:rounded-lg  overflow-hidden">
        <div className="bg-slate-900 text-white py-6">
          <span className="text-center block">eco_consciousLife...</span>
        </div>
        <div className="p-4">
          <form
            onSubmit={handleSubmitLogin}
            className="w-full flex flex-col gap-4"
          >
            <div className="relative rounded-md">
              <FaEnvelope className="absolute left-2 top-[17px] sm:text-xl text-emerald-900" />
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                className="py-3 pl-9 rounded-md w-full border border-zinc-300"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative rounded-md">
              <FaLock className="absolute left-2 top-[17px] sm:text-xl text-emerald-900" />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
                className="py-3 pl-9 rounded-md w-full border border-zinc-300"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 bg-emerald-600 text-white font-bold py-3 rounded-lg"
            >
              login <FaAngleRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardLogin;
