import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../components/common/Spinner';
import { apiRequest } from '../utils/apiRoute';

const CreatePackage = () => {
  const [itineraries, setItineraries] = useState([]);
  const [tourDetails, setTourDetails] = useState({
    title: '',
    description: '',
    departure: '',
    time: '',
    duration: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [thumbnail, setThumbnail] = useState(null); // State for the thumbnail file

  const handleTourDetailsChange = (e) => {
    const { name, value } = e.target;
    setTourDetails({ ...tourDetails, [name]: value });
  };

  const handleItineraryChange = (index, e) => {
    const { name, value } = e.target;
    const newItineraries = [...itineraries];
    newItineraries[index] = { ...newItineraries[index], [name]: value };
    setItineraries(newItineraries);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]); // Set the file to state
  };

  const addItinerary = () => {
    setItineraries([...itineraries, { title: '', description: '', day: '' }]);
  };

  const removeItinerary = (index) => {
    const newItineraries = itineraries.filter((_, i) => i !== index);
    setItineraries(newItineraries);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData to send both text and file data
    const formData = new FormData();
    formData.append('thumbnail', thumbnail); // Append thumbnail file

    // Append tour details
    Object.keys(tourDetails).forEach((key) =>
      formData.append(key, tourDetails[key])
    );

    // Append itineraries as a JSON string
    formData.append('itineraries', JSON.stringify(itineraries));

    // Send the request to the backend
    try {
      const res = await apiRequest.post('/package/create', formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto">
      <div className="my-5 flex items-center justify-end">
        <Link
          to={'/dashboard/packages'}
          className="text-center py-2 px-5 rounded-lg bg-green-700 text-white"
        >
          Browse All package
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border rounded-lg p-5 flex flex-col gap-3 md:h-[450px] overflow-y-scroll"
      >
        <div className="flex items-center gap-4 text-green-600">
          <span>Create new package</span>{' '}
          <span className="h-[30px] w-[30px] rounded-full border border-zinc-300 flex items-center justify-center">
            <FaThumbsUp />
          </span>
        </div>
        <div className="py-2 font-semibold text-xl">General information</div>
        {/* title */}
        <div className="flex flex-col justify-center gap-1">
          <label
            htmlFor="title"
            className='after:content-["*"] after:text-orange-600'
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required=""
            onChange={handleTourDetailsChange}
            className="py-2 pl-2 border border-zinc-400 rounded-md w-full"
          />
        </div>

        {/* description */}
        <div className="flex flex-col justify-center gap-1">
          <label
            htmlFor="description"
            className='after:content-["*"] after:text-orange-600'
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            required=""
            onChange={handleTourDetailsChange}
            className="py-2 pl-2 border border-zinc-400 rounded-md w-full h-[100px]"
          />
        </div>

        {/* thumbnail */}
        <div className="flex flex-col justify-center gap-1">
          <label
            htmlFor="thumbnail"
            className='after:content-["*"] after:text-orange-600'
          >
            Thumbnail
          </label>
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            required=""
            onChange={handleThumbnailChange}
            className="py-2 pl-2 border border-zinc-400 rounded-md w-full"
          />
        </div>

        {/* departure location */}
        <div className="flex flex-col justify-center gap-1">
          <label
            htmlFor="departure"
            className='after:content-["*"] after:text-orange-600'
          >
            Departure Location
          </label>
          <input
            type="text"
            name="departure"
            id="departure"
            required=""
            onChange={handleTourDetailsChange}
            className="py-2 pl-2 border border-zinc-400 rounded-md w-full"
          />
        </div>

        {/* departure time*/}
        <div className="flex flex-col justify-center gap-1">
          <label
            htmlFor="time"
            className='after:content-["*"] after:text-orange-600'
          >
            Departure Time
          </label>
          <input
            type="text"
            name="time"
            id="time"
            required=""
            onChange={handleTourDetailsChange}
            className="py-2 pl-2 border border-zinc-400 rounded-md w-full"
          />
        </div>

        {/* duration*/}
        <div className="flex flex-col justify-center gap-1">
          <label
            htmlFor="duration"
            className='after:content-["*"] after:text-orange-600'
          >
            Days
          </label>
          <input
            type="text"
            name="duration"
            id="duration"
            required=""
            onChange={handleTourDetailsChange}
            className="py-2 pl-2 border border-zinc-400 rounded-md w-full"
          />
        </div>

        {/* Itineraries */}
        <h3 className="font-semibold text-xl my-2">Iteneraries</h3>

        {itineraries.map((itinerary, index) => (
          <div key={index} className="flex flex-col gap-2">
            <input
              type="number"
              name="day"
              placeholder="Day"
              onChange={(e) => handleItineraryChange(index, e)}
              className="py-2 pl-2 border border-zinc-400 rounded-md w-full"
            />
            <input
              type="text"
              name="title"
              placeholder="Itinerary Title"
              onChange={(e) => handleItineraryChange(index, e)}
              required
              className="py-2 pl-2 border border-zinc-400 rounded-md w-full"
            />
            <textarea
              name="description"
              placeholder="Description"
              onChange={(e) => handleItineraryChange(index, e)}
              className="py-2 pl-2 border border-zinc-400 rounded-md w-full h-[100px]"
            ></textarea>
            <button
              type="button"
              onClick={() => removeItinerary(index)}
              className="text-red-500 font-semibold my-1 text-right"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addItinerary}
          className="py-2 px-5 bg-orange-600 text-white rounded-lg inline-block w-[200px]"
        >
          Add Itinerary
        </button>
        <button
          type="submit"
          className="py-2 px-5 bg-green-600 text-white rounded-lg inline-block w-[200px]"
        >
          {loading ? <Spinner /> : <span>Create package</span>}
        </button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
};

export default CreatePackage;
