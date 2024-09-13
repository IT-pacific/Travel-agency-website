import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { apiRequest } from '../../utils/apiRoute';

const PackageMain = ({ page, setPage }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch packages from the backend
    const fetchPackages = async () => {
      try {
        const response = await apiRequest.get('/package/all');
        setPackages(response.data.package);
        console.log(packages);
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
    <div className="my-20">
      <div className="p-3 md:w-[800px] md:mx-auto">
        <div className="flex flex-col gap-3">
          <p className="font-extralight mb-4">
            The Trips you ever needed{''}
            <span className="text-green-400 underline ml-2 underline-offset-4">
              we have got you covered.
            </span>
          </p>

          {/* Packages cards */}
          <div className="grid gap-3 md:grid-cols-3">
            {packages.map((pkg) => (
              <div className="group overflow-hidden flex flex-col justify-between gap-3">
                <div className="h-[150px]">
                  <img
                    src={`http://localhost:3000/uploads/${pkg.thumbnail}`}
                    alt=""
                    className="object-cover h-full w-full rounded-lg hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="">
                  <h1 className="font-bold">{pkg.title}</h1>
                  <a
                    href={`/package/${pkg.id}`}
                    className="block py-2 px-5 mt-3 text-white text-center rounded-sm my-2 bg-indigo-700"
                  >
                    Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* pagination */}
          <div className="py-4">
            <div>
              <div className="flex items-center justify-center">
                <span className="bg-zinc-300 py-2 px-5 rounded-md">
                  <FaAngleLeft className="text-slate-700 font-bold" />
                </span>
                <span className="py-2 px-5 text-slate-700 font-bold">
                  {page}
                </span>
                <span className="bg-zinc-300 py-2 px-5 rounded-md">
                  <FaAngleRight className="text-slate-700 font-bold" />
                </span>
              </div>
            </div>
          </div>
          {/* End of pagination */}
        </div>
      </div>
    </div>
  );
};

export default PackageMain;
