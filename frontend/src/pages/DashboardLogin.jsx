import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FaAngleRight, FaEnvelope, FaLock } from 'react-icons/fa';
import { apiRequest } from '../utils/apiRoute.jsx';
import Spinner from '../components/common/Spinner.jsx';
import { AuthContext } from '../providers/AuthProvider.jsx';

const DashboardLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);
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

      // redirect to dashboard
      setLoading(false);
      if (!res.data.Ok) {
        setLoading(false);
        setResponse(res.data.msg);
        return setTimeout(() => setResponse(null), 3000);
      }

      // Redirect user to dashboard on login success
      updateUser(res.data.userInfo);
      navigate('/dashboard');
    } catch (error) {
      // Set failure message
      setLoading(false);
      setResponse('Something went wrong try again');
      setTimeout(() => setResponse(null), 3000);
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
                id="email"
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
                id="password"
                placeholder="Password"
                className="py-3 pl-9 rounded-md w-full border border-zinc-300"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 bg-emerald-600 text-white font-bold py-1 rounded-lg"
            >
              {loading ? <Spinner /> : <span>login</span>}
            </button>
            {response && (
              <div className="text-center text-red-500">{response}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardLogin;
