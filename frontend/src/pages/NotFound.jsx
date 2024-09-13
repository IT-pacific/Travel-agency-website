import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen grid place-content-center">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-zinc-700 text-xl font-semibold md:font-bold">
          404
        </h2>
        <h3 className="text-zinc-500">Page was not Found.</h3>
      </div>
    </div>
  );
};

export default NotFound;
