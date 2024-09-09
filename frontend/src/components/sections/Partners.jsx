import React from 'react';
import { useRef, useEffect } from 'react';
import logo from '../../assets/vite.svg';

const Partners = () => {
  const scrollerRef = useRef(null);

  // useEffect(() => {
  //   const scroller = scrollerRef.current;

  //   if (!window.matchMedia('(prefer-reduced-motion: reduce)').matches) {
  //     scroller.dataset.animated = true;

  //     const innerScroller = scroller.querySelector('.scroller__inner');
  //     const scrollerContent = Array.from(innerScroller.children);

  //     scrollerContent.forEach((item) => {
  //       const duplicateItem = item.cloneNode(true);
  //       duplicateItem.setAttribute('aria-hidden', true);
  //       innerScroller.appendChild(duplicateItem);
  //     });
  //   }
  // }, []);

  return (
    <div className="mb-10">
      <div>
        <h2 className="text-xl font-semibold text-center py-10 md:text-3xl md:font-extrabold">
          Our Partners
        </h2>
        <div ref={scrollerRef}>
          <div className="flex items-center justify-center flex-wrap gap-2 scroller__inner">
            <div className="flex flex-col gap-3 w-[12rem] aspect-square">
              <img src="./assets/logo-1.jpg" alt="partner logo" />
              <h3>Organization name</h3>
            </div>
            <div className="flex flex-col gap-3 w-[12rem] aspect-square">
              <img src="./assets/logo-1.jpg" alt="partner logo" />
              <h3>Organization name</h3>
            </div>
            <div className="flex flex-col gap-3 w-[12rem] aspect-square">
              <img src="./assets/logo-1.jpg" alt="partner logo" />
              <h3>Organization name</h3>
            </div>
            <div className="flex flex-col gap-3 w-[12rem] aspect-square">
              <img src="./assets/logo-1.jpg" alt="partner logo" />
              <h3>Organization name</h3>
            </div>
            <div className="flex flex-col gap-3 w-[12rem] aspect-square">
              <img src="./assets/logo-1.jpg" alt="partner logo" />
              <h3>Organization name</h3>
            </div>
            <div className="flex flex-col gap-3 w-[12rem] aspect-square">
              <img src="./assets/logo-1.jpg" alt="partner logo" />
              <h3>Organization name</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
