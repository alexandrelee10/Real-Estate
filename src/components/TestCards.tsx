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
      {/* NOTE: Card container */}
      <div
        className="
          h-full min-h-[360px]               /* NOTE: Taller card */
          bg-white
          border border-gray-200            /* NOTE: Light border like screenshot */
          rounded-xl
          shadow-md                         /* NOTE: Soft shadow */
          px-10 py-10
          flex flex-col items-center        /* NOTE: Center everything */
          text-center
          transition-all duration-300
          group-hover:-translate-y-2
          group-hover:shadow-xl
        "
      >
        {/* NOTE: Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden mb-5">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* NOTE: Name */}
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

        {/* NOTE: Title */}
        <p className="text-sm text-gray-500 mt-1">{title}</p>

        {/* NOTE: Stars (under name/title) */}
        <div className="flex gap-1 mt-4 text-orange-500 text-sm">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>

        {/* NOTE: Comment */}
        <p className="mt-6 text-sm leading-7 text-gray-600">
          {comment}
        </p>
      </div>
    </div>
  );
};
