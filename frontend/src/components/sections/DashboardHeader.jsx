import React, { useState } from 'react';
import { FaAngleDown, FaBars, FaBell, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  const [userModelOpen, setUserModelOpen] = useState(false);
  return (
    <div className="flex items-center justify-between px-3 border-b border-zinc-300 py-2">
      <div className="sm:hidden">
        <FaBars onClick={() => setSidebarOpen((prev) => !prev)} />
      </div>

      <div className="flex items-center gap-2">
        <FaEnvelope className="text-slate-700 font-semibold" />
        <FaBell className="text-slate-700 font-semibold" />
      </div>

      <div className="relative flex items-center gap-1">
        <div className="h-8 w-8 rounded-full overflow-hidden border border-zinc-300">
          <img src="" alt="" className="object-cover object-center" />
        </div>
        <FaAngleDown
          className="font-semibold text-sm"
          onClick={() => setUserModelOpen((prev) => !prev)}
        />

        <div
          className={`absolute ${
            userModelOpen ? 'block' : 'hidden'
          } top-10 right-1 flex flex-col gap-2 p-3 w-[100px] rounded-md bg-slate-900 text-white`}
        >
          <Link
            to="/dashboard/setting"
            className="p-1 rounded-sm hover:bg-indigo-700"
            onClick={() => setUserModelOpen((prev) => !prev)}
          >
            setting
          </Link>
          <Link
            to="/dashboard/logout"
            className="p-1 rounded-sm hover:bg-red-500"
            onClick={() => setUserModelOpen((prev) => !prev)}
          >
            logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
