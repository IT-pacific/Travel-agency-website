import React from 'react';
import { FaAd, FaPlusCircle } from 'react-icons/fa';

const DashboardHome = () => {
  return (
    <div className="mt-3">
      <div className="md:w-[600px] md:mx-auto">
        <div className="flex items-center justify-between gap-7">
          <div className="flex justify-between items-center rounded-lg border p-3 flex-1">
            <div className="flex flex-col gap-4">
              <span>Total packages</span>
              <span className="text-green-500 font-bold">45</span>
            </div>
            <div className="flex items-center justify-center h-10 w-12 rounded-sm bg-slate-900">
              <FaAd className="text-white" />
            </div>
          </div>
          <div className="flex justify-between items-center rounded-lg border p-3 flex-1">
            <div className="flex flex-col gap-4">
              <span>Total users</span>
              <span className="text-indigo-600  font-bold">380</span>
            </div>
            <div className="flex items-center justify-center h-10 w-12 rounded-sm bg-slate-900">
              <FaAd className="text-white" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="font-bold text-xl flex items-center gap-2">
            <span>
              <FaPlusCircle />
            </span>
            <span>
              Newest <span className="text-green-500">Packages</span>
            </span>
          </h1>
          <div className="mt-4">
            <table className="w-full bg-zinc-200">
              <thead>
                <tr className="*:text-start">
                  <th></th>
                  <th>Name</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>Name</td>
                  <td>Duration</td>
                  <td>Date</td>
                  <td>Action</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
