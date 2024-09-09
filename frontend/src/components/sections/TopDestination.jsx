import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import img from '../../assets/img.jpg';

const TopDestination = () => {
  return (
    <div className="py-10 bg-black-to-green">
      <div className="flex flex-col gap-4 md:w-[1000px] md:mx-auto">
        <h1 className="text-lg text-white font-bold text-center lg:font-extrabold lg:text-3xl">
          Our Top Destinations
        </h1>
        <div className="grid grid-cols-fluid-sm gap-4 mt-5">
          <div className="p-4 rounded-lg border-zinc-600 border">
            <div className="h-50">
              <img src={img} alt="" className="object-cover rounded-xl" />
            </div>
            <h3 className="text-white lg:text:lg font-semibold my-3">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <a
              href="#"
              className="py-2 px-5 mt-3 bg-zinc-400 border block rounded-lg text-center"
            >
              view more
            </a>
          </div>
          <div className="p-4 rounded-lg border-zinc-600 border">
            <div className="h-50">
              <img src={img} alt="" className="object-cover rounded-xl" />
            </div>
            <h3 className="text-white lg:text:lg font-semibold my-3">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <a
              href="#"
              className="py-2 px-5 mt-3 bg-zinc-400 border block rounded-lg text-center"
            >
              view more
            </a>
          </div>
          <div className="p-4 rounded-lg border-zinc-600 border">
            <div className="h-50">
              <img src={img} alt="" className="object-cover rounded-xl" />
            </div>
            <h3 className="text-white lg:text:lg font-semibold my-3">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <a
              href="#"
              className="py-2 px-5 mt-3 bg-zinc-400 border block rounded-lg text-center"
            >
              view more
            </a>
          </div>
          <div className="p-4 rounded-lg border-zinc-600 border">
            <div className="h-50">
              <img src={img} alt="" className="object-cover rounded-xl" />
            </div>
            <h3 className="text-white lg:text:lg font-semibold my-3">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <a
              href="#"
              className="py-2 px-5 mt-3 bg-zinc-400 border block rounded-lg text-center"
            >
              view more
            </a>
          </div>
          <div className="p-4 rounded-lg border-zinc-600 border">
            <div className="h-50">
              <img src={img} alt="" className="object-cover rounded-xl" />
            </div>
            <h3 className="text-white lg:text:lg font-semibold my-3">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <a
              href="#"
              className="py-2 px-5 mt-3 bg-zinc-400 border block rounded-lg text-center"
            >
              view more
            </a>
          </div>
          <div className="p-4 rounded-lg border-zinc-600 border">
            <div className="h-50">
              <img src={img} alt="" className="object-cover rounded-xl" />
            </div>
            <h3 className="text-white lg:text:lg font-semibold my-3">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <a
              href="#"
              className="py-2 px-5 mt-3 bg-zinc-400 border block rounded-lg text-center"
            >
              view more
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center py-8">
          <a
            href="/package"
            className="py-3 px-10 rounded-md bg-white md:text-lg text-center"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
