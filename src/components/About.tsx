import React from 'react'
import assets from '../assets/assets'

export const About = () => {
  return (
    <section id="about" className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-24 py-16 sm:py-24">
        
        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — Image */}
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[640px] overflow-hidden rounded-2xl">
            <img
              src={assets.brand_img}
              alt="Our Brand"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* RIGHT — Content */}
          <div className="flex flex-col">

            {/* Header */}
            <div className="max-w-2xl flex flex-col items-center">
              <h3 className="text-3xl sm:text-4xl tracking-tight text-gray-90">
                About <span className="underline font-extralight">Our Brand</span>
              </h3>
              <p className="mt-3 text-base sm:text-lg text-gray-600">
                Passionate About Properties, Dedicated to Your Vision
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl  bg-white p-6 hover:shadow-md transition">
                <h3 className="text-3xl font-semibold text-blue-800 bottom-0">10+</h3>
                <p className="mt-2 text-sm text-gray-600 font-light">Years of Excellence</p>
              </div>

              <div className="rounded-xl bg-white p-6 hover:shadow-md transition">
                <h3 className="text-3xl font-semibold text-blue-800">12+</h3>
                <p className="mt-2 text-sm text-gray-600">Projects Completed</p>
              </div>

              <div className="rounded-xl bg-white p-6 hover:shadow-md transition">
                <h3 className="text-3xl font-semibold text-blue-800">20+</h3>
                <p className="mt-2 text-sm text-gray-600">Mn Sq. Ft. Delivered</p>
              </div>

              <div className="rounded-xl bg-white p-6 hover:shadow-md transition">
                <h3 className="text-3xl font-semibold text-blue-800">25+</h3>
                <p className="mt-2 text-sm text-gray-600">Ongoing Projects</p>
              </div>
            </div>

            {/* Text + CTA */}
            <div className="mt-10 rounded-2xl bg-gray-50 p-7 sm:p-10 flex items-center flex-col">
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet explicabo,
                pariatur consequatur et laboriosam ab corporis accusantium temporibus beatae
                aperiam magni velit adipisci a, ratione error ex. Ipsam, a suscipit.
              </p>

              <div className="mt-6">
                <a
                  href="#contact-us"
                  className="inline-flex items-center justify-center border border-gray-900 text-gray-900 px-6 py-2.5 rounded-md text-sm font-medium hover:bg-blue-500 hover:text-white transition">Learn more</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}


