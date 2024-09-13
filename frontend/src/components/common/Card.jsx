import React from 'react';

const Card = ({ name, image }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden w-48 mx-auto">
      <img src={image} alt={name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
};

export default Card;
