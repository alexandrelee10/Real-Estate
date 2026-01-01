import React from 'react'
import { Nav } from './components/Nav'
import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';

export const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  return (
    <div className='relative min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white'>
      <Nav />
      <Hero />
      <About />
    </div>
  )
}
