import React from 'react';
import {
  FaArrowLeft,
  FaBook,
  FaHouseUser,
  FaLeaf,
  FaLocationArrow,
  FaMotorcycle,
  FaTree,
} from 'react-icons/fa';

const Services = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-4 md:w-[1000px] md:mx-auto">
        <div>
          <h2 className="text-green-600 text-md lg:text-xl lg:font-semibold">
            Save the future life of the planet
          </h2>
          <h1 className="py-3 text-xl font-semibold lg:font-extrabold lg:text-3xl lg:py-4">
            What We Do.
          </h1>
        </div>
        <div className="grid grid-cols-fluid-sm gap-4 mt-5">
          <div className="p-4 rounded-lg border shadow-md">
            <div className="flex items-center justify-center h-10 w-10 text-md bg-green-700 rounded-full mb-4">
              <FaLeaf className="font-extrabold text-2xl text-white" />
            </div>
            <h2 className="text-green-600 text-xl font-semibold">
              Eco-Friendly Experience
            </h2>
            <p className="text-justify py-3">
              We partner with tourism lover to experience eco- friendly tourism
              products and participate in conservation inputs generations and
              implement practices that conserve natural resources and
              environments through interacting with new places.
            </p>
          </div>
          <div className="p-4 rounded-lg border shadow-md">
            <div className="flex items-center justify-center h-10 w-10 text-md bg-green-700 rounded-full mb-4">
              <FaMotorcycle className="font-extrabold text-2xl text-white" />
            </div>
            <h2 className="text-green-600 text-xl font-semibold">
              Discover Sustainable Tourism Destinations
            </h2>
            <p className="text-justify py-3">
              As tourism connects people with nature, it has the unique ability
              to spur environmental responsibility and conservation. But when
              tourism is not sustainable, it can have the opposite effect and
              devastate the environments it relies on.
            </p>
          </div>
          <div className="p-4 rounded-lg border shadow-md">
            <div className="flex items-center justify-center h-10 w-10 text-md bg-green-700 rounded-full mb-4">
              <FaHouseUser className="font-extrabold text-2xl text-white" />
            </div>
            <h2 className="text-green-600 text-xl font-semibold">
              Scientific Reasearch and Studies
            </h2>
            <p className="text-justify py-3">
              Science is a critical part of our work, because it provides
              important information about the animals and plants in the forest
              ecosystems they all share.we do organize groups and individual
              research and studies travel, in order to participate in long life
              of our planet.
            </p>
          </div>
          <div className="p-4 rounded-lg border shadow-md">
            <div className="flex items-center justify-center h-10 w-10 text-md bg-green-700 rounded-full mb-4">
              <FaTree className="font-extrabold text-2xl text-white" />
            </div>
            <h2 className="text-green-600 text-xl font-semibold">
              Environmental Awareness
            </h2>
            <p className="text-justify py-3">
              As we are traveling, educate tourists and communities on the
              importance of conservation and how to protect the world’s natural
              treasures. in order to reduce single plastic use at the
              destination, we encourage all travelers to curry their own
              refillable bottles.
            </p>
          </div>
          <div className="p-4 rounded-lg border shadow-md">
            <div className="flex items-center justify-center h-10 w-10 text-md bg-green-700 rounded-full mb-4">
              <FaBook className="font-extrabold text-2xl text-white" />
            </div>
            <h2 className="text-green-600 text-xl font-semibold">
              Training future Conservationists
            </h2>
            <p className="text-justify py-3">
              successful conservation story requires investing in the future
              generation to prepare them for the conservation challenges of the
              future, and keep the planet better than it was. Contact us to
              organize a moment with Communities surrounding tourism
              destinations and engage your self in their home daily living
              activities.
            </p>
          </div>
          <div className="p-4 rounded-lg border shadow-md">
            <div className="flex items-center justify-center h-10 w-10 text-md bg-green-700 rounded-full mb-4">
              <FaLocationArrow className="font-extrabold text-2xl text-white" />
            </div>
            <h2 className="text-green-600 text-xl font-semibold">
              Local Experiences and Guided Tours
            </h2>
            <p className="text-justify py-3">
              Our local tours offer a deeper connection to your destination,
              guided by local experts who reveal hidden gems, vibrant markets,
              and cultural highlights. From tasting local flavors to exploring
              historic sites, we provide authentic experiences that make your
              journey unforgettable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
