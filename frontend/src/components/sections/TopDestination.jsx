import React, { useEffect, useState } from 'react';
import { apiRequest } from '../../utils/apiRoute';

const TopDestination = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch packages from the backend
    const fetchPackages = async () => {
      try {
        const response = await apiRequest.get('/package/all');
        setPackages(response.data.package);
        // console.log(packages);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching packages:', err);
        setError('Error fetching packages');
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="py-10 bg-black-to-green">
      <div className="flex flex-col gap-4 md:w-[1000px] md:mx-auto">
        <h1 className="text-lg text-white font-bold text-center lg:font-extrabold lg:text-3xl">
          Our Top Destinations
        </h1>
        <div className="grid grid-cols-fluid-sm gap-4 mt-5">
          {/* Destinations */}
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="p-4 rounded-lg border-zinc-600 border flex flex-col justify-between"
            >
              <div className="h-[150px]">
                <img
                  src={`http://localhost:3000/uploads/${pkg.thumbnail}`}
                  alt=""
                  className="object-cover h-full w-full rounded-xl"
                />
              </div>
              <h3 className="text-white lg:text:lg font-semibold my-3">
                {pkg.title}
              </h3>
              <a
                href={`/package/${pkg.id}`}
                className="py-2 px-5 mt-3 bg-zinc-400 border block rounded-lg text-center"
              >
                view more
              </a>
            </div>
          ))}
        </div>
        {/* Destinations */}
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
