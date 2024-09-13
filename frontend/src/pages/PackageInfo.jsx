import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaTrain } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { apiRequest } from '../utils/apiRoute';

const PackageInfo = () => {
  const [packageInfo, setPackageInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    // Function to fetch package data
    const fetchPackage = async () => {
      try {
        const response = await apiRequest.get(`/package/${id}`);
        setPackageInfo(response.data.package);
      } catch (err) {
        setError(err.message);

        console.error('Error fetching package:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [id]);

  return (
    <>
      <div className="h-[300px] mt-[56px] bg-pink-500 mb-10 overflow-hidden">
        <div className="object-cover h-full">
          <img
            src={`http://localhost:3000/uploads/${packageInfo.thumbnail}`}
            alt=""
            className="h-full object-cover w-full object-center"
          />
        </div>
      </div>

      <div>
        <div className="p-3 md:w-[1000px] md:mx-auto">
          <h1 className="font-bold text-xl mb-3">{`hey`}</h1>
          <p>{packageInfo.description}</p>
          <div className="my-4">
            <div
              className="flex items-center justify-between border-b border-neutral-300
            py-3 md:w-[400px] "
            >
              <span className="text-emerald-600 font-bold">Duration</span>
              <span className="text-zinc-400">{packageInfo.duration} Days</span>
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
          {packageInfo.itineraries ? (
            <div>
              {packageInfo.itineraries.map((itinerary) => (
                <div className="my-4">
                  <div className="bg-zinc-200 border border-zinc-400 p-5 rounded-xl mb-4 flex gap-3 items-center">
                    <span className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-700 border-slate-600 border text-white">
                      {itinerary.dayNumber}
                    </span>
                    <span>{itinerary.title}</span>
                  </div>
                  <p className="ml-5">{itinerary.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No itineraries available for this package.</p>
          )}
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
