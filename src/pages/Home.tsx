import React from 'react'
import { Nav } from '../components/Nav'
import { useState } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Properties } from '../components/Properties';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  return (
    <div className='relative min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white'>
      <Nav />
      <Hero />
      <About />
      <Properties />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
