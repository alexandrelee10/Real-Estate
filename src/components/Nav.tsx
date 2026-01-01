import React, { useState } from 'react'
import assets from '../assets/assets'
import { ThemeButton } from './ThemeButton'
import { Title } from './Title'

export const Nav = ({theme, setTheme}:{theme: any, setTheme: any}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    // Navigation Container
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 font-medium bg-white dark:bg-gray-900 bg-transparent'>
      <img src={assets.logo_dark} alt="" className='w-32 sm:w-60'/>
      <div className='flex gap-5 max-sm:fixed'>
        <a href="#hero">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">Testimonials</a>
        {/* Theme Button */}
        <div>
          <ThemeButton theme={theme} setTheme={setTheme}/>
        </div>
        {/* Sign up Button */}
        <div>
          <a href="#sign-up">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  )
}
