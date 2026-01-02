import React, { useState } from "react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

type NavProps = {
  variant?: "light" | "dark";
};

export const Nav = ({ variant = "light" }: NavProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDark = variant === "dark";

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-30
        flex justify-between items-center
        px-4 sm:px-12 lg:px-24 xl:px-40
        py-5
        transition-colors duration-300
        ${isDark ? "bg-black text-white" : "bg-transparent text-white"}
      `}
    >
      {/* Logo */}
      <Link to="/" onClick={() => setSidebarOpen(false)}>
        <img
          src={assets.logo}
          className="w-32 sm:w-40"
          alt="Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:opacity-80 hover:underline">Home</Link>
        <a href="/#about-us" className="hover:opacity-80 hover:underline">About</a>
        <a href="/#properties" className="hover:opacity-80 hover:underline">Properties</a>
        <a href="/#testimonials" className="hover:opacity-80 hover:underline">Testimonials</a>
        <a href="/#contact-us" className="hover:opacity-80 hover:underline">Contact</a>
      </div>

      {/* Right Actions */}
      <div className="hidden sm:flex">
        <Link
          to="/signup"
          className={`
            px-6 py-2 rounded-full text-sm transition
            ${isDark
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-white/90 text-black hover:bg-white"}
          `}
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <img
        src={assets.menu_icon_dark}
        onClick={() => setSidebarOpen(true)}
        className="w-8 sm:hidden cursor-pointer"
        alt="Menu"
      />

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full
          bg-black text-white
          w-60 p-6
          flex flex-col gap-6
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <img
          src={assets.close_icon}
          className="w-5 self-end cursor-pointer"
          onClick={() => setSidebarOpen(false)}
          alt="Close"
        />

        <Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link>
        <a href="/#about-us" onClick={() => setSidebarOpen(false)}>About</a>
        <a href="/#properties" onClick={() => setSidebarOpen(false)}>Properties</a>
        <a href="/#testimonials" onClick={() => setSidebarOpen(false)}>Testimonials</a>
        <a href="/#contact-us" onClick={() => setSidebarOpen(false)}>Contact</a>
        <Link to="/signup" onClick={() => setSidebarOpen(false)}>Sign Up</Link>
      </div>
    </nav>
  );
};
