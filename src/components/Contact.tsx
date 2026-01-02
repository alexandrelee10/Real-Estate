import React from "react";
import assets from "../assets/assets";

export const Contact = () => {
  return (
    <section id="contact-us" className="bg-white py-20">
      {/* NOTE: Container */}
      <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white">
        {/* NOTE: Title */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl tracking-tight font-bold text-black">
            Connect{" "}
            <span className="font-extralight underline underline-offset-4 decoration-1 text-gray-600">
              With Us
            </span>
          </h3>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Ready to Find Your Home? Let&apos;s Build Your Future Together.
          </p>
        </div>

        {/* NOTE: Form */}
        <form className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
          {/* NOTE: Name */}
          <div>
            <p className="mb-2 text-sm font-medium">Your name</p>
            <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img src={assets.person_icon} alt="" className="w-5" />
              <input
                type="text"
                placeholder="Enter your name"
                className="text-black w-full p-3 text-sm outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* NOTE: Email */}
          <div>
            <p className="mb-2 text-sm font-medium">Email id</p>
            <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img src={assets.email_icon} alt="" className="w-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="text-black w-full p-3 text-sm outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* NOTE: Message */}
          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Message</p>
            <textarea
              rows={8}
              placeholder="Enter your message"
              className="text-black w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            />
          </div>

          {/* NOTE: Submit Button (Centered) */}
          <button
            type="submit"
            className="sm:col-span-2 justify-self-center flex items-center gap-2 bg-blue-400 text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all"
          >
            Submit
            <img src={assets.arrow_icon} className="w-4" alt="" />
          </button>
        </form>
      </div>
    </section>
  );
};
