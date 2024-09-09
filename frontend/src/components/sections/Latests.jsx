import React from 'react';
import img from '../../assets/img.jpg';
import { FaArrowRight, FaHornbill } from 'react-icons/fa';

const Latests = () => {
  return (
    <div className="py-10">
      <div className="p-4 md:w-[1000px] md:mx-auto">
        <div className="h-10 w-10 md:h-15 md:w-15 md:text-2xl rounded-full flex items-center justify-center text-base my-7  bg-slate-800 text-white">
          <FaHornbill />
        </div>
        <h1 className="text-xl font-bold mt-15 border-l-8 border-slate-800 pl-3 md:text-4xl md:font-extrabold">
          What New Here.
        </h1>
        <div className="grid grid-cols-fluid-sm gap-4 mt-8">
          <div className="transition-transform duration-300 hover:scale-[1.05]">
            <a href="/blog/1">
              <div className="relative rounded-md ">
                <div className="h-50">
                  <img
                    src={img}
                    alt=""
                    className="object-cover rounded-xl grayscale"
                  />
                </div>
                <h3 className="absolute flex justify-between items-end left-2 bottom-3 right-2 text-green-800 lg:text:lg font-semibold my-3">
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor
                    sit amet consectetur adipisicing elit. Ipsa, cum.
                  </span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h3>
              </div>
            </a>
          </div>
          <div className="transition-transform duration-300 hover:scale-[1.05]">
            <a href="/blog/1">
              <div className="relative rounded-md ">
                <div className="h-50">
                  <img
                    src={img}
                    alt=""
                    className="object-cover rounded-xl grayscale"
                  />
                </div>
                <h3 className="absolute flex justify-between items-end left-2 bottom-3 right-2 text-green-800 lg:text:lg font-semibold my-3">
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor
                    sit amet consectetur adipisicing elit. Ipsa, cum.
                  </span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h3>
              </div>
            </a>
          </div>
          <div className="transition-transform duration-300 hover:scale-[1.05]">
            <a href="/blog/1">
              <div className="relative rounded-md ">
                <div className="h-50">
                  <img
                    src={img}
                    alt=""
                    className="object-cover rounded-xl grayscale"
                  />
                </div>
                <h3 className="absolute flex justify-between items-end left-2 bottom-3 right-2 text-green-800 lg:text:lg font-semibold my-3">
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor
                    sit amet consectetur adipisicing elit. Ipsa, cum.
                  </span>
                  <span>
                    <FaArrowRight />
                  </span>
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latests;
