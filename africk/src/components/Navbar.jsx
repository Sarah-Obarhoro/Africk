import React, { useState } from 'react';
import logo from '../assets/africk-logo.png';
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='font-bold flex sticky top-0 justify-between items-center h-20 max-w-[1240px] mx-auto uppercase px-4 body-font font-montserrat'>
      <img className='h-20' src={logo} alt="logo" />

      <ul className='hidden md:flex sticky top-0'>
        <li className='p-4 mt-3 cursor-pointer'><a href='#home'>Home</a></li>
        <li className='p-4 mt-3 cursor-pointer'><a href='#about'>About</a></li>
        <li className='p-4 mt-3 cursor-pointer'><a href='#partners'>Partners</a></li>
        <li className='p-4 mt-3 cursor-pointer'><a href='#services'>Services</a></li>
        <li className='p-4 mt-3 cursor-pointer'><a href='#careers'>Careers</a></li>
        <li className='p-4 cursor-pointer'><a href='#contact'><button className='bg-[#6b9122] text-[#d0d2d3] rounded px-6 py-2 uppercase'>Get In Touch</button></a></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={24} /> : <RiMenu3Line size={24} />}
      </div>

      <div className= {!nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-[#6b912280] bg-[#d0d2d3] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <img className='h-20 m-4' src={logo} alt="logo" />

        <ul className='uppercase p-4'>
        <li className='p-4  cursor-pointer border-b border-[#6b9122]'> <a href="#home"> Home </a></li>
        <li className='p-4  cursor-pointer border-b border-[#6b9122]'> <a href="#about"> About </a></li >
        <li className='p-4  cursor-pointer border-b border-[#6b9122]'> <a href="#partners"> Partners </a></li>
        <li className='p-4  cursor-pointer border-b border-[#6b9122]'> <a href="#services"> Services </a></li>
        <li className='p-4  cursor-pointer border-b border-[#6b9122]'> <a href="#careers"> Careers </a></li>
        <li className='p-4 cursor-pointer '><a href="#contact"><button className='bg-[#6b9122] text-[#d0d2d3] rounded px-6 py-2 uppercase'>Get In Touch</button></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar