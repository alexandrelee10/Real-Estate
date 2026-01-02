import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'

export const Hero = () => {
  const images = [
    assets.hero_img_2,
    assets.hero_img_3,
    assets.hero_img_4
  ]

  const [current, setCurrent] = useState(0)

  // Auto switch images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000) // 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      
      {/* Background Images */}
      {images.map((img, index) => (
        <img key={index} src={img} alt="Luxury Property" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'} brightness-50` }/>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-12 lg:px-24 xl:px-40 text-white items-center">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold max-w-3xl">
          Find Your Perfect Home
        </h1>

        <p className="mt-4 max-w-xl text-lg text-white/90">
          Luxury properties curated for modern living.
        </p>

        <div className="mt-8">
          <a href="#contact-us" className="inline-block border border-white text-white px-8 py-3 rounded-md font-medium transition hover:bg-white hover:text-black">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
