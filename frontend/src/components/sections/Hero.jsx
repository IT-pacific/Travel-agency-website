import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../assets/img.jpg';
import blueSky from '../../assets/blue-sky.jpg';
import fog from '../../assets/fog.jpg';
import tourists from '../../assets/tourists.jpg';
import peopleInTrip from '../../assets/people-in-trip.jpg';
import peopleInTripSitting from '../../assets/on-trip-sitting.jpg';
import sunrise from '../../assets/sunrise.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function HeroSlider() {
  return (
    <div>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="block h-screen bg-pink-500 z-0"
      >
        <SwiperSlide className="flex items-end justify-center h-full">
          <img
            src={blueSky}
            alt="Hero1"
            className="w-screen h-screen object-cover bg-no-repeat"
          />
          <div className="absolute bottom-10 left-4 bg-slate-900 p-4 rounded-lg mx-3">
            <h1 className="font-bold lg:font-extrabold text-lg lg:text-2xl  text-white">
              Tailored Just for You
            </h1>
            <p className="text-emerald-500  md:w-[700px]">
              Whether you crave adventure or relaxation, we create personalized
              itineraries that fit your desires. Your perfect getaway is just a
              click away.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-end justify-center">
          <img
            src={peopleInTrip}
            alt="Hero1"
            className="w-screen h-screen object-cover bg-no-repeat"
          />
          <div className="absolute bottom-10 left-4 bg-slate-900 p-4 rounded-lg mx-3">
            <h1 className="font-bold lg:font-extrabold text-lg lg:text-2xl  text-white">
              Create Lasting Memories
            </h1>
            <p className="text-emerald-500  md:w-[700px]">
              Make unforgettable memories with loved ones. Whether it’s a
              romantic getaway or a family adventure, we have the perfect
              destination for you.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-end justify-center">
          <img
            src={peopleInTripSitting}
            alt="Hero1"
            className="w-screen h-screen object-cover bg-no-repeat"
          />
          <div className="absolute bottom-10 left-4 bg-slate-900 p-4 rounded-lg mx-3">
            <h1 className="font-bold lg:font-extrabold text-lg lg:text-2xl  text-white">
              Embrace New Cultures
            </h1>
            <p className="text-emerald-500  md:w-[700px]">
              Dive into the rich tapestry of diverse cultures and traditions.
              Every destination offers a unique story, ready for you to explore
              and cherish forever.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-end justify-center">
          <img
            src={sunrise}
            alt="Hero1"
            className="w-screen h-screen object-cover bg-no-repeat"
          />
          <div className="absolute bottom-10 left-4 bg-slate-900 p-4 rounded-lg mx-3">
            <h1 className="font-bold lg:font-extrabold text-lg lg:text-2xl  text-white">
              Savor Every Moment
            </h1>
            <p className="text-emerald-500  md:w-[700px]">
              Embark on a culinary journey that tantalizes your taste buds. From
              street food to gourmet dining, savor the flavors of every
              destination.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-end justify-center">
          <img
            src={tourists}
            alt="Hero1"
            className="w-screen h-screen object-cover bg-no-repeat"
          />
          <div className="absolute bottom-10 left-4 bg-slate-900 p-4 rounded-lg mx-3">
            <h1 className="font-bold lg:font-extrabold text-lg lg:text-2xl  text-white">
              Make Every Moment Count
            </h1>
            <p className="text-emerald-500  md:w-[700px]">
              Create precious memories with your loved ones on an
              adventure-packed family vacation. Laugh, explore, and bond like
              never before.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
