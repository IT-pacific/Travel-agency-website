import React from 'react';
import { FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import img from '../../assets/img.jpg';

const PackageMain = ({ page, setPage }) => {
  return (
    <div className="my-10">
      <div className="p-3 md:w-[800px] md:mx-auto">
        <div className="flex flex-col gap-3">
          <p className="font-extralight mb-4">
            The Trips you ever needed{''}
            <span className="text-green-400 underline ml-2 underline-offset-4">
              we have got you.
            </span>
          </p>

          {/* Packages cards */}
          <div className="grid gap-3 md:grid-cols-3">
            <div className="group overflow-hidden">
              <img
                src={img}
                alt=""
                className="object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="mt-4">
                <h3 className="text-slate-400 flex items-center">
                  <FaAngleDoubleRight className="mr-2" /> category
                </h3>
                <h1 className="font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <a
                  href="/package/1"
                  className="block py-2 px-5 mt-3 text-white text-center rounded-sm my-2 bg-indigo-700"
                >
                  Details
                </a>
              </div>
            </div>
            <div className="group overflow-hidden">
              <img
                src={img}
                alt=""
                className="object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="mt-4">
                <h3 className="text-slate-400 flex items-center">
                  <FaAngleDoubleRight className="mr-2" /> category
                </h3>
                <h1 className="font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <a
                  href="/package/1"
                  className="block py-2 px-5 mt-3 text-white text-center rounded-sm my-2 bg-indigo-700"
                >
                  Details
                </a>
              </div>
            </div>
            <div className="group overflow-hidden">
              <img
                src={img}
                alt=""
                className="object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="mt-4">
                <h3 className="text-slate-400 flex items-center">
                  <FaAngleDoubleRight className="mr-2" /> category
                </h3>
                <h1 className="font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <a
                  href="/package/1"
                  className="block py-2 px-5 mt-3 text-white text-center rounded-sm my-2 bg-indigo-700"
                >
                  Details
                </a>
              </div>
            </div>
            <div className="group overflow-hidden">
              <img
                src={img}
                alt=""
                className="object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="mt-4">
                <h3 className="text-slate-400 flex items-center">
                  <FaAngleDoubleRight className="mr-2" /> category
                </h3>
                <h1 className="font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <a
                  href="/package/1"
                  className="block py-2 px-5 mt-3 text-white text-center rounded-sm my-2 bg-indigo-700"
                >
                  Details
                </a>
              </div>
            </div>
            <div className="group overflow-hidden">
              <img
                src={img}
                alt=""
                className="object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="mt-4">
                <h3 className="text-slate-400 flex items-center">
                  <FaAngleDoubleRight className="mr-2" /> category
                </h3>
                <h1 className="font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <a
                  href="/package/1"
                  className="block py-2 px-5 mt-3 text-white text-center rounded-sm my-2 bg-indigo-700"
                >
                  Details
                </a>
              </div>
            </div>
            <div className="group overflow-hidden">
              <img
                src={img}
                alt=""
                className="object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="mt-4">
                <h3 className="text-slate-400 flex items-center">
                  <FaAngleDoubleRight className="mr-2" /> category
                </h3>
                <h1 className="font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h1>
                <a
                  href="/package/1"
                  className="block py-2 px-5 mt-3 text-white text-center rounded-sm my-2 bg-indigo-700"
                >
                  Details
                </a>
              </div>
            </div>
          </div>

          {/* pagination */}
          <div className="py-4">
            <div>
              <div className="flex items-center justify-center">
                <span className="bg-zinc-300 py-2 px-5 rounded-md">
                  <FaAngleLeft className="text-slate-700 font-bold" />
                </span>
                <span className="py-2 px-5 text-slate-700 font-bold">
                  {page}
                </span>
                <span className="bg-zinc-300 py-2 px-5 rounded-md">
                  <FaAngleRight className="text-slate-700 font-bold" />
                </span>
              </div>
            </div>
          </div>
          {/* End of pagination */}
        </div>
      </div>
    </div>
  );
};

export default PackageMain;
