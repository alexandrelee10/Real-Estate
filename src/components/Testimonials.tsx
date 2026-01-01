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
      rating: 4
    },
    {
      id: 2,
      name: "Andrew Nelson",
      title: "Semi-truck Driver",
      comment:
        "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
      img: assets.profile_img_2,
      rating: 5
    },
    {
      id: 3,
      name: "Maria Hernandez",
      title: "UI/UX Designer",
      comment:
        "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
      img: assets.profile_img_3,
      rating: 4
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      {/* NOTE: Width container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 ">
        {/* Title and Description */}
        <div className="text-center max-w-3xl mx-auto py-7">
            <h3 className="text-3xl sm:text-4xl tracking-tight text-gray-900 font-normal">Our{" "}
            <span className="underline font-light text-gray-600">Customers</span></h3>
            <p className="font-light text-gray-600">Real stories from customers who found their home with us</p>
        </div>

        
        {/* NOTE: ONE ROW – 3 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonial.map((person) => (
            <TestCard
              key={person.id}
              name={person.name}
              title={person.title}
              comment={person.comment}
              img={person.img}
              rating={person.rating}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
