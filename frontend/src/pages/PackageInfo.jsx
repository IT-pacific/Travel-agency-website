import React from 'react';
import img from '../assets/img.jpg';
import { FaArrowAltCircleRight, FaTrain } from 'react-icons/fa';

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
        <div className="p-3 md:w-[1000px] md:mx-auto">
          <h1 className="font-bold text-xl mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            quisquam necessitatibus accusamus commodi temporibus est a,
            veritatis maxime doloremque officia non aperiam ea itaque excepturi
            repellat impedit ducimus inventore quasi.
          </p>

          <div className="my-4">
            <div
              className="flex items-center justify-between border-b border-neutral-300
            py-3 md:w-[400px] "
            >
              <span className="text-emerald-600 font-bold">Duration</span>
              <span className="text-zinc-400">8 days</span>
            </div>
            <div
              className="flex items-center justify-between border-b border-neutral-300
            py-3 md:w-[400px] "
            >
              <span className="text-emerald-600 font-bold">
                Departure location
              </span>
              <span className="text-zinc-400">Kigali</span>
            </div>
            <div
              className="flex items-center justify-between border-b border-neutral-300
            py-3 md:w-[400px] "
            >
              <span className="text-emerald-600 font-bold">Departure Hour</span>
              <span className="text-zinc-400">8:00 AM</span>
            </div>
          </div>

          <h2 className="flex items-center gap-3 my-5 md:my-8">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-400">
              <FaTrain className="text-slate-950" />
            </div>
            <span className="font-bold text-xl">Iteneraries</span>
          </h2>

          <div className="my-4">
            <div className="bg-zinc-200 border border-zinc-400 p-5 rounded-xl mb-4 flex gap-3 items-center">
              <span className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-700 border-slate-600 border text-white">
                1
              </span>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <p className="ml-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              alias consequatur mollitia, nobis aliquam deserunt praesentium aut
              nulla pariatur quod.lorem10 Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Inventore, dolores? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ad, aperiam.
            </p>
          </div>
          <div className="my-4">
            <div className="bg-zinc-200 border border-zinc-400 p-5 rounded-xl mb-4 flex gap-3 items-center">
              <span className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-700 border-slate-600 border text-white">
                1
              </span>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <p className="ml-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              alias consequatur mollitia, nobis aliquam deserunt praesentium aut
              nulla pariatur quod.lorem10 Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Inventore, dolores? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ad, aperiam.
            </p>
          </div>
          <div className="my-4">
            <div className="bg-zinc-200 border border-zinc-400 p-5 rounded-xl mb-4 flex gap-3 items-center">
              <span className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-700 border-slate-600 border text-white">
                1
              </span>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <p className="ml-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              alias consequatur mollitia, nobis aliquam deserunt praesentium aut
              nulla pariatur quod.lorem10 Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Inventore, dolores? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ad, aperiam.
            </p>
          </div>
          <div className="my-4">
            <div className="bg-zinc-200 border border-zinc-400 p-5 rounded-xl mb-4 flex gap-3 items-center">
              <span className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-700 border-slate-600 border text-white">
                1
              </span>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <p className="ml-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              alias consequatur mollitia, nobis aliquam deserunt praesentium aut
              nulla pariatur quod.lorem10 Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Inventore, dolores? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ad, aperiam.
            </p>
          </div>
          <div className="my-4">
            <div className="bg-zinc-200 border border-zinc-400 p-5 rounded-xl mb-4 flex gap-3 items-center">
              <span className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-700 border-slate-600 border text-white">
                1
              </span>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <p className="ml-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              alias consequatur mollitia, nobis aliquam deserunt praesentium aut
              nulla pariatur quod.lorem10 Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Inventore, dolores? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ad, aperiam.
            </p>
          </div>
          <div className="my-4">
            <div className="bg-zinc-200 border border-zinc-400 p-5 rounded-xl mb-4 flex gap-3 items-center">
              <span className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-700 border-slate-600 border text-white">
                1
              </span>
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <p className="ml-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              alias consequatur mollitia, nobis aliquam deserunt praesentium aut
              nulla pariatur quod.lorem10 Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Inventore, dolores? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Ad, aperiam.
            </p>
          </div>
          <button className="my-6 py-2 px-10 bg-green-500 flex items-center justify-center rounded-lg border font-bold gap-4 text-white ml-4">
            <span>Book </span>
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default PackageInfo;
