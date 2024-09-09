import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-800 text-white px-3">
      <div className="flex flex-col gap-5 md:w-[1000px] md:mx-auto">
        <div className="flex flex-col gap-5 md:gap-10 lg:gap-20 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="mb-4 md:text-2xl">
              <strong className="text-indigo-500 tex-bold">
                eco-consciouslife
              </strong>
            </div>
            <p className="max-w-[25rem]">
              There is no better time than now, through discovering new places
              on the planet, interact with surround biodiversity and leave the
              place healthier than it was found.Make a commitment and join our
              mission of saving the planet for future generations.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl">Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/package">Package</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Contacts</h3>
            <div className="flex flex-col gap-3 mb-3">
              <p>
                <bold>Adress: </bold>Remera, Kigali. Airport roads
              </p>
              <p>
                <bold>Phone: </bold>+1 619-880-8856
              </p>
              <p>
                <bold>Email: </bold>info@eco-consciouslife.com
              </p>
            </div>
            <div className="flex-1 flex gap-3">
              <a href="#" target="blank">
                <FaFacebook classNameName="fa fa-facebook" />
              </a>
              <a href="#" target="blank">
                <FaInstagram classNameName="fa fa-instagram" />
              </a>
              <a href="#">
                <FaLinkedin classNameName="fa fa-linkedin" />
              </a>
              <a href="#" target="blank">
                <FaTwitter classNameName="fa fa-linkedin" />
              </a>
              <a href="#" target="blank">
                <FaWhatsapp classNameName="fa fa-whatapp" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-400 p-5 mt-4">
          <p className="text-center">
            Copyright 2023 eco-conscious, All Right Reserved. Developed &
            Designed by CB-LINK Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
