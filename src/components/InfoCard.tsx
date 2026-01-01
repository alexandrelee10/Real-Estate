import React from "react";

type InfoCardProps = {
  title: string;
  location: string;
  state: string;
  price: string | number;
  img: string;
};

export const InfoCard = ({ title, location, state, price, img }: InfoCardProps) => {
  return (
    <div className="group">
      {/* Image wrapper (relative so overlay can sit on it) */}
      <div className="relative overflow-visible transition-all rounded-2xl duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-xl">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src={img}
            alt={title}
            className=" w-full h-72 object-cover transition-transform duration-500 ease-out group-hover:scale-105"/>
        </div>

        {/* Overlapping white box */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            bottom-0 translate-y-1/2
            w-[82%]
            bg-white
            rounded-xl
            shadow-lg
            px-5 py-4
          "
        >
          <h3 className="text-lg font-semibold text-gray-900 leading-snug">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            ${price} <span className="mx-2">|</span> {location}, {state}
          </p>
        </div>
      </div>

      {/* Spacer so the overlay doesn’t get cut off by the next section */}
      <div className="h-14" />
    </div>
  );
};
