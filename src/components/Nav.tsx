import React, { useState } from 'react'
import assets from '../assets/assets'

export const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <nav className="
      absolute top-0 left-0 w-full z-30
      flex justify-between items-center
      px-4 sm:px-12 lg:px-24 xl:px-40
      py-5
      text-white
    ">
      {/* Logo */}
      <img src={assets.logo} className="w-32 sm:w-40" alt="Logo" />

      {/* Desktop Navigation */}
      <div className={`
        flex gap-6 text-sm font-medium
        max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:h-full
        max-sm:bg-black/90 max-sm:flex-col max-sm:pt-20
        transition-all
        ${sidebarOpen ? 'max-sm:w-60' : 'max-sm:w-0 overflow-hidden'}
      `}>
        <img
          src={assets.close_icon}
          className="w-5 absolute top-5 right-5 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a href="#hero" className="hover:opacity-80 sm:hover:border-b">Home</a>
        <a href="#about-us" className="hover:opacity-80 sm:hover:border-b">About</a>
        <a href="#properties" className="hover:opacity-80 sm:hover:border-b">Properties</a>
        <a href="#testimonials" className="hover:opacity-80 sm:hover:border-b">Testimonials</a>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <img
          src={assets.menu_icon_dark}
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
          alt=""
        />

        <a
          href="#contact-us"
          className="
            hidden sm:flex items-center gap-2
            bg-white/90 text-black
            px-6 py-2 rounded-full text-sm
            hover:bg-white transition
          "
        >
          Sign Up
        </a>
      </div>
    </nav>
  )
}
