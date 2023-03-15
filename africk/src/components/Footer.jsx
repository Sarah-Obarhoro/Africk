import React from 'react';
import logo from '../assets/africk.jpg';

const Footer = () => {
  return (    
    <>
        <div className='bg-[#6b9122] grid sm:grid-cols-4 gap-4 sm:justify-items-center py-10 px-6 sm:py-40 sm:px-20'>
            <img className='w-36' src={logo} alt='logo' />

            <div className='sm:grid-cols-2'>
            <h4 className='font-bold uppercase mb-4'>Company</h4>
            <p className='cursor-pointer'> Services</p>
            <p className='cursor'>Partners</p>
            <p className='cursor'>Career</p>
            </div>

            <div className=''>
            <h4 className='font-bold uppercase mb-4'>Site Map</h4>
            <p className='cursor'>Home</p>
            <p className='cursor'>About</p>
            <p className='cursor'>Profile</p>
            </div>

            <div className=''>
            <h4 className='font-bold uppercase mb-4'>About Us</h4>
            <p>Africk Solution is a leading solutions provider, administering a wide range of professional services across the Tech, Construction and Agriculture industries.</p>
            </div>
        </div>

        <div>
            <div className='text-[#6b9122] relative text-center pt-4'>
                <p>© 2023 Africk Solutions. All rights reserved.</p>
            </div>
        </div>
    </>
  )
}

export default Footer