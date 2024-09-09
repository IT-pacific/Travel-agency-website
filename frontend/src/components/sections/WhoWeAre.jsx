import React from 'react';
import food from '../../assets/food.jpg';
import onTrip1 from '../../assets/on-trip-1.jpg';
import onTrip2 from '../../assets/on-trip-2.jpg';
import gorillas from '../../assets/gorillas.jpg';

const WhoWeAre = () => {
  return (
    <div className="my-8">
      <div className="md:w-[1000px] md:mx-auto">
        <div className="grid md:items-center md:grid-cols-2 gap-8 p-4 ">
          <h1 className="text-2xl text-center font-bold mb-2 md:hidden">
            Who We are.
          </h1>
          <div className="grid md:grid-cols-12 md:grid-rows-2 md:h-[300px] gap-4">
            <div className="rounded-3xl overflow-hidden col-span-9">
              <img src={onTrip1} alt="" className="object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden hidden md:block col-span-3 h-full">
              <img src={onTrip1} alt="" className="object-cover h-full" />
            </div>
            <div className="rounded-3xl overflow-hidden hidden md:block col-span-3">
              <img src={gorillas} alt="" className="object-cover h-full" />
            </div>
            <div className="rounded-3xl overflow-hidden hidden md:block col-span-9">
              <img src={food} alt="" className="object-cover" />
            </div>
          </div>
          <div>
            <h1 className="hidden md:block text-3xl font-extrabold">
              Who We Are.
            </h1>
            <p className="text-slate-600 mt-3">
              Eco-Conscious travel is a conservation family from Rwanda,
              committed to change the world a better place than it was. As days
              go by, it needs everyone’s concern to consider future life of the
              planet. We save biodiversity not for me, not for you, but for the
              generations of all time through traveling and discovering new
              places in different corners of the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
