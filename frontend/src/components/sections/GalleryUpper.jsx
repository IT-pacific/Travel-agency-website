import React from 'react';
import { FaArrowRight, FaMountain } from 'react-icons/fa';

const GalleryUpper = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col gap-4 p-4 md:w-[800px] md:mx-auto">
        <div className="h-8 w-8 shadow rounded-full flex items-center justify-center bg-pink-600 lg:h-14 lg:w-14">
          <FaMountain className="text-white text-xl md:text-2xl" />
        </div>
        <h3 className="font-bold">Lorem ipsum dolor sit.</h3>
        <p className="max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          maxime suscipit, a possimus iure, quis, delectus repellendus esse
          commodi doloremque error. Consectetur accusamus voluptas, eveniet
          assumenda in fugit itaque ducimus?
        </p>
        <button className="flex items-center justify-center w-32 bg-indigo-700 py-2 gap-3 rounded-lg text-white">
          <span className="mr-1">Contact Us</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default GalleryUpper;
