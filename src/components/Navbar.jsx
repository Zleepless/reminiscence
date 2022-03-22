import React from 'react'
import { Fabars, Fatimes } from 'react-icons'
import Logo from '../assets/34.png'

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
      </div>

      {/* Navbar */}
      <div>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className='hidden'>
        <Fabars />
      </div>

      {/* Mobile Menu */}
      <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Social Icons */}
      <div></div>
    </div>
  )
}

export default Navbar
