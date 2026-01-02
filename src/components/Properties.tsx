import React, { useMemo, useState } from "react";
import { InfoCard } from "./InfoCard";
import assets from "../assets/assets";

export const Properties = () => {
  const propertyInfo = useMemo(
    () => [
      {
        id: 1,
        title: "San Nicholas Estate",
        location: "Tampa",
        state: "FL",
        price: "2,200,000",
        img: assets.Tampa_Home,
      },
      {
        id: 2,
        title: "Berkshire Reserve",
        location: "Southwest Rances",
        state: "FL",
        price: "14,000,000",
        img: assets.Southwest_Ranches_Home,
      },
      {
        id: 3,
        title: "Windermere Crest",
        location: "Windermere",
        state: "FL",
        price: "7,750,000",
        img: assets.Orlando_Home,
      },
      {
        id: 4,
        title: "Annapolis Grande",
        location: "Jacksonville",
        state: "FL",
        price: "15,000,000",
        img: assets.Jacksonville_Home_1,
      },
      {
        id: 5,
        title: "Ponte Vedra Vista",
        location: "Jacksonville",
        state: "FL",
        price: "10,600,000",
        img: assets.Jacksonville_Home_2,
      },
      {
        id: 6,
        title: "Leilani Shores",
        location: "St Petersburg",
        state: "FL",
        price: "6,000,000",
        img: assets.StPete_Home,
      },
      {
        id: 7,
        title: "Lakeview Luxe",
        location: "Miami Beach",
        state: "FL",
        price: "10,750,000",
        img: assets.Miami_Home_1,
      },
      {
        id: 8,
        title: "The Banyan Estate",
        location: "Pinecrest",
        state: "FL",
        price: "17,000,000",
        img: assets.Pinecrest_Home,
      },
    ],
    []
  );

  // index = first visible card (on desktop it advances by 4, mobile by 1)
  const [index, setIndex] = useState(0);

  const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

const getVisibleCount = () => {
  if (typeof window === "undefined") return 1;
  return window.innerWidth >= 1024 ? 4 : 1;
};

const slideRight = () => {
  const visible = getVisibleCount();
  const maxIndex = Math.max(0, propertyInfo.length - visible);

  setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
};

const slideLeft = () => {
  const visible = getVisibleCount();
  const maxIndex = Math.max(0, propertyInfo.length - visible);

  setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
};



  return (
    <section id="properties" className="px-4 sm:px-12 lg:px-24 xl:px-40 py-16 bg-white">
{/* Header */}
<div className="text-center max-w-3xl mx-auto ">
  <h3 className="text-3xl sm:text-4xl tracking-tight text-gray-900 font-bold">
    Properties <span className="font-extralight underline underline-offset-5 decoration-1 text-gray-600">Completed</span>
  </h3>

  <p className="mt-2 text-gray-600">
    Crafting spaces and building legacies — take a look at our portfolio.
  </p>

  {/* Arrow Buttons */}
  <div className="mt-6 flex justify-center gap-4">
    <button
      type="button"
      onClick={slideLeft}
      className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow transition"
      aria-label="Previous"
    >
      <img src={assets.move_left} alt="" className="h-5 w-5" />
    </button>

    <button
      type="button"
      onClick={slideRight}
      className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow transition"
      aria-label="Next"
    >
      <img src={assets.move_right} alt="" className="h-5 w-5" />
    </button>
  </div>
</div>


      {/* Slider */}
      <div className="mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {propertyInfo.map((property) => (
            <div
              key={property.id}
              // This is the “grid fix”:
              // - mobile: each slide is 100% width (1 card)
              // - desktop (lg): each slide is 25% width (4 cards)
              className="w-full shrink-0 lg:w-1/4 lg:px-3"
            >
              <InfoCard
                title={property.title}
                location={property.location}
                state={property.state}
                price={property.price}
                img={property.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
