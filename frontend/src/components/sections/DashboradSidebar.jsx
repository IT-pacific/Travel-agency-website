import React from 'react';
import {
  FaAngleDoubleLeft,
  FaCubes,
  FaHouseUser,
  FaNewspaper,
  FaPlus,
  FaUser,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashboradSidebar = () => {
  return (
    <div className="p-4 bg-slate-900 text-white">
      <div className="flex items-start justify-center flex-col my-5">
        <span className="text-xl">
          eco_conscious <span className="text-green-500">Life</span>
        </span>
      </div>

      <ul className="flex flex-col items-center gap-4">
        <li className="p-2 w-full hover:bg-zinc-400">
          <Link
            to="/dashboard"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaHouseUser className=" text-slate-950" />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <Link
            to="/dashboard/company"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaHouseUser className=" text-slate-950" />
            </span>
            <span>company</span>
          </Link>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <Link
            to="/dashboard/package/create"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              {' '}
              <FaPlus className=" text-slate-950" />
            </span>
            <span>create package</span>
          </Link>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <Link
            to="/dashboard/packages"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaHouseUser className=" text-slate-950" />
            </span>
            <span>packages</span>
          </Link>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <Link
            to="/dashboard/post/create"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaPlus className=" text-slate-950" />
            </span>
            <span>create post</span>
          </Link>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <Link
            to="/dashboard/posts"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaNewspaper className=" text-slate-950" />
            </span>
            <span>blog posts</span>
          </Link>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <Link
            to="/dashboard/users"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaUser className=" text-slate-950" />
            </span>
            <span>users</span>
          </Link>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <Link
            to="/dashboard/setting"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaAngleDoubleLeft className=" text-slate-950" />
            </span>
            <span>setting</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboradSidebar;
