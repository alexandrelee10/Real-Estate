import React from "react";
import assets from "../assets/assets";
import { Star } from "lucide-react";

type TestCardProps = {
  name: string;
  title: string;
  comment: string;
  img: string;
  rating: number;
};

export const TestCard = ({ name, title, comment, img, rating }: TestCardProps) => {
  return (
    <div className="group h-full px-4"> {/* ⬅️ spacing between cards */}
      
      {/* MAIN CARD */}
      <div
        className="h-full min-h-[620px] max-w-md w-full bg-white rounded-3xl p-12 flex flex-col justify-between gap-12 border border-gray-200 leading-loose transition-all
        duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl shrink-0
        ">
        {/* HEADER */}
        <div className="flex items-center gap-6">
          <img src={img} alt={name} className="w-20 h-20 rounded-full object-cover"/>

          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {name}
            </h3>
            <p className="text-lg text-gray-500">
              {title}
            </p>
            {/* Star Icons */}
            <div className="mt-1 flex gap-1">
              {[...Array(5)].map((_, i) => (
              <Star
              key={i}
              className={`w-[18px] h-[18px] ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}/>
              ))}
            </div>
          </div>
        </div>

        {/* COMMENT */}
        <p className="text-xl text-gray-600 leading-relaxed flex-1">
          “{comment}”
        </p>
      </div>
    </div>
  );
};
