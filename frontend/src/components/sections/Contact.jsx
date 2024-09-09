import React from 'react';
import {
  FaPhone,
  FaMapMarker,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-slate-950" id="contact">
      <div className="grid gap-8 p-4 md:grid-cols-2 md:w-[1000px] md:mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center text-white md:items-start">
          <div className="flex gap-2 items-center">
            <span>
              <FaMapMarker />
            </span>
            <span>Lorem, ipsum dolor.</span>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <span>
              <FaEnvelope />
            </span>
            <span>Lorem, ipsum dolor.</span>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <span>
              <FaPhone />
            </span>
            <span>Lorem ipsum dolor sit.</span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <span>
              <a href="#">
                <FaLinkedin />
              </a>
            </span>
            <span>
              <a href="#">
                <FaTwitter />
              </a>
            </span>
            <span>
              <a href="#">
                <FaFacebook />
              </a>
            </span>
            <span>
              <FaInstagram />
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-center text-white font-semibold my-6 md:text-start">
            Send Us Message
          </h3>
          <div>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                id="name"
                className="p-3 rounded-md border"
                placeholder="Names"
                required
              />
              <input
                type="text"
                name="email"
                id="email"
                className="p-3 rounded-md border"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="country"
                id="country"
                className="p-3 rounded-md border"
                placeholder="Country"
                required
              />
              <textarea
                name="message"
                id="message"
                className="h-36 border rounded-md p-3"
                placeholder="Message"
                required
              ></textarea>
              <button className="py-2 px-6 rounded-lg bg-green-700 text-white">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
