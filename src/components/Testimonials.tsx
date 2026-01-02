import React from "react";
import assets from "../assets/assets";
import { TestCard } from "./TestCards";


export const Testimonials = () => {
  // NOTE: testimonial data
  const testimonial = [
    {
      id: 1,
      name: "Michael Anderson",
      title: "Software Engineer",
      comment:
        "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
      img: assets.profile_img_1,
    },
    {
      id: 2,
      name: "Andrew Nelson",
      title: "Semi-truck Driver",
      comment:
        "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
      img: assets.profile_img_2,
    },
    {
      id: 3,
      name: "Maria Hernandez",
      title: "UI/UX Designer",
      comment:
        "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
      img: assets.profile_img_3,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      {/* NOTE: Outer container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-12 lg:px-24">
        
        {/* NOTE: Heading (centered like screenshot) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Customer <span className="font-extralight underline underline-offset-5 decoration-1 text-gray-600">Testimonials</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Real Stories from Those Who Found Home <br className="hidden sm:block" /> with Us
          </p>
        </div>

        {/* NOTE: 3 cards in one row on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonial.map((person) => (
            <TestCard
              key={person.id}
              name={person.name}
              title={person.title}
              comment={person.comment}
              img={person.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
