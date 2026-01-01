import React from "react";

type TestCardProps = {
  name: string;
  title: string;
  comment: string;
  img: string;
};

export const TestCard = ({ name, title, comment, img }: TestCardProps) => {
  return (
    <div className="group h-full">
      
      {/* MAIN CARD */}
      <div className="h-full min-h-[540px] bg-white rounded-3xl p-10 flex flex-col justify-between transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl">

        {/* HEADER */}
        <div className="flex items-center gap-5 ">
          <img
            src={img}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {name}
            </h3>
            <p className="text-base text-gray-500">
              {title}
            </p>
          </div>
        </div>

        {/* COMMENT */}
        <p className="mt-6 text-lg text-gray-600 leading-relaxed flex-1">
          “{comment}”
        </p>

      </div>
    </div>
  );
};
