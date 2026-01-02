import React from "react";
import assets from "../assets/assets";

export const Footer = () => {
  return (
    <footer className="bg-black pt-10 px-4 sm:px-10 lg:px-24 xl:px-40">
      {/* NOTE: Footer Top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        {/* NOTE: Left */}
        <div className="space-y-5 text-sm text-gray-300">
          <img src={assets.logo} className="w-32 sm:w-44" alt="" />
          <p className="max-w-md">
            Built on trust. Designed for living
          </p>

          <ul className="flex gap-8 flex-wrap">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#about-us">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#properties">
                Properties
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#testimonials">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* NOTE: Right */}
        <div className="text-gray-300">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6 text-gray-400">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>

          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded bg-transparent border border-gray-600 text-gray-200"
            />
          <button type="submit" className="sm:col-span-2 justify-self-center flex items-center gap-2 bg-blue-400 text-white text-sm px-10 py-3 rounded-xl cursor-pointer hover:scale-105 transition-all"
          >Subscribe</button>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      {/* NOTE: Footer Bottom */}
      <div className="pb-6 text-sm text-gray-400 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright 2025 &copy; Harmoney | Real Estate.</p>
        <div className="flex items-center gap-4">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
    </footer>
  );
};
