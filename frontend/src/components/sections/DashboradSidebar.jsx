import React from 'react';
import {
  FaAngleDoubleLeft,
  FaCubes,
  FaHouseUser,
  FaNewspaper,
  FaPlus,
  FaUser,
} from 'react-icons/fa';

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
          <a
            href="/dashboard"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaHouseUser className=" text-slate-950" />
            </span>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <a
            href="/dashboard/company"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaHouseUser className=" text-slate-950" />
            </span>
            <span>company</span>
          </a>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <a
            href="/dashboard/package/create"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              {' '}
              <FaPlus className=" text-slate-950" />
            </span>
            <span>create package</span>
          </a>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <a
            href="/dashboard/package"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaHouseUser className=" text-slate-950" />
            </span>
            <span>packages</span>
          </a>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <a
            href="/dashboard/post/create"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaPlus className=" text-slate-950" />
            </span>
            <span>create post</span>
          </a>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <a
            href="/dashboard/posts"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaNewspaper className=" text-slate-950" />
            </span>
            <span>blog posts</span>
          </a>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <a
            href="/dashboard/users"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaUser className=" text-slate-950" />
            </span>
            <span>users</span>
          </a>
        </li>
        <li className="p-2 w-full hover:bg-zinc-400">
          <a
            href="/dashboard/setting"
            className="flex items-center justify-start gap-2"
          >
            <span className="h-6 w-6 rounded-full bg-emerald-200 flex items-center justify-center">
              <FaAngleDoubleLeft className=" text-slate-950" />
            </span>
            <span>setting</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DashboradSidebar;
