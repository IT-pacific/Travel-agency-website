import React from 'react';
import img from '../assets/img.jpg';
import { FaTrain } from 'react-icons/fa';

const PackageInfo = () => {
  return (
    <>
      <div className="h-[300px] mt-[56px] bg-pink-500 mb-10 overflow-hidden">
        <div className="object-cover h-full">
          <img
            src={img}
            alt=""
            className="h-full object-cover w-full object-center"
          />
        </div>
      </div>

      <div>
        <div className="md:w-[700px] my-7 md:my-12 md:mx-auto">
          <div className="w-full h-[300px] rounded-2xl overflow-hidden hover:scale-[1.05] transition-transform duration-500">
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <h1 className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              rerum?
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              accusamus animi libero quod aliquam nihil voluptatibus,
              necessitatibus omnis nobis. Libero eius iure eum sapiente. Est
              repellendus enim, nam quo expedita omnis consequatur a id possimus
              voluptatibus dolore nesciunt dolorem beatae.
            </p>
            <h2 className="font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam animi est nemo.
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              voluptatibus consequatur{' '}
              <span className="font-bold">inventore</span> porro facilis. Sed
              consequuntur mollitia voluptates quod tempora exercitationem natus
              cumque veniam quos?
            </p>
            <h2 className="font-bold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus, consequatur.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              molestias sit perspiciatis magnam eum! Optio{' '}
              <a href="" className="text-indigo-600">
                delectus ipsum
              </a>{' '}
              in doloremque enim. At delectus quas eius nesciunt saepe placeat
              sunt optio quod.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="md:w-[700px] md:mx-auto">
          <h1 className="border-l-4 border-slate-800 px-2 font-bold md:font-extrabold text-xl md:text-2xl mb-5 md:mb-10">
            Recent stories
          </h1>
          <div className="grid grid-cols-fluid-sm gap-3">
            <div className="border border-zinc-300 p-3 overflow-hidden rounded-xl">
              <img src={img} alt="" />
              <h1 className="font-bold text-xl md:text-2xl my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
            <div className="border border-zinc-300 p-3 overflow-hidden rounded-xl">
              <img src={img} alt="" />
              <h1 className="font-bold text-xl md:text-2xl my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
            <div className="border border-zinc-300 p-3 overflow-hidden rounded-xl">
              <img src={img} alt="" />
              <h1 className="font-bold text-xl my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
            <div className="border border-zinc-300 p-3 overflow-hidden rounded-xl">
              <img src={img} alt="" />
              <h1 className="font-bold text-xl my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageInfo;
