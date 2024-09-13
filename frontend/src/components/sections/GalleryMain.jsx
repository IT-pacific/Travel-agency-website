import React from 'react';
import gallery1 from '../../assets/gallery-1.jpg';
import gallery2 from '../../assets/gallery-2.jpg';
import gallery3 from '../../assets/gallery-3.jpg';
import gallery4 from '../../assets/gallery-4.jpg';
import gallery5 from '../../assets/gallery-5.jpg';
import gallery6 from '../../assets/gallery-6.jpg';
import gallery7 from '../../assets/gallery-7.jpg';
import gallery8 from '../../assets/gallery-8.jpg';
import gallery9 from '../../assets/gallery-9.jpg';

const GalleryMain = () => {
  return (
    <div className="my-20">
      <div className="p-3 md:w-[800px] md:mx-auto">
        <div className="flex flex-col gap-3">
          <p className="font-extralight mb-4">
            Embark the beauty with eco_conscious{' '}
            <span className="text-green-400 underline underline-offset-4">
              Life
            </span>
          </p>
          <div className="grid gap-3 md:max-h-[600px] md:grid-cols-3 md:grid-rows-4">
            <div className="row-span-3 overflow-hidden">
              <img
                src={gallery1}
                alt=""
                className="h-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src={gallery2}
                alt=""
                className="h-full w-full object-center object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src={gallery3}
                alt=""
                className="h-full w-full object-center object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src={gallery4}
                alt=""
                className="h-full w-full object-center object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src={gallery5}
                alt=""
                className="h-full w-full object-center object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src={gallery6}
                alt=""
                className="h-full w-full object-center object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="relative row-span-2">
              <img
                src={gallery9}
                alt=""
                className="h-full w-full object-center object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src={gallery7}
                alt=""
                className="h-full w-full object-top object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div>
              <img
                src={gallery8}
                alt=""
                className="h-full w-full object-center object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryMain;
