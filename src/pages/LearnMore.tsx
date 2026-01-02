import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-white">
      {/* NOTE: Black navbar for this page */}
      <Nav variant="dark" />

      {/* NOTE: Padding-top so fixed nav doesn’t overlap content */}
      <section id="learn-more" className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-12 lg:px-24">
          {/* NOTE: Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              More Than Listings.{" "}
              <span className="font-light">A Better Way to Move.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We believe finding a home should feel exciting — not overwhelming.
              Our approach blends modern tools, real market insight, and a
              people-first mindset to guide you every step of the way.
            </p>
          </div>

          {/* NOTE: Hero image block */}
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={assets.hero_img_2}
                alt="Luxury home"
                className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* NOTE: Feature points */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-semibold">
                ✓
              </div>
              <p className="text-gray-700">
                Curated properties tailored to your lifestyle
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-semibold">
                ✓
              </div>
              <p className="text-gray-700">
                Transparent guidance with no pressure
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-semibold">
                ✓
              </div>
              <p className="text-gray-700">
                Local expertise backed by modern technology
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-semibold">
                ✓
              </div>
              <p className="text-gray-700">
                Support before, during, and after closing
              </p>
            </div>
          </div>

          {/* NOTE: Back to Home button */}
          <div className="mt-16 text-center">
            <Link
              to="/"
              className="
                inline-flex items-center gap-2
                text-sm text-gray-600 hover:text-gray-900
                underline underline-offset-4
                transition
              "
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* NOTE: Footer to finish page */}
      <Footer />
    </div>
  );
};

export default LearnMore;
