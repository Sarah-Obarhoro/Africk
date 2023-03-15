import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className='hero-overlay flex justify-center items-center mb-4'>
        <p className='md:text-7xl sm:text-4xl text-2xl font-bold md:py-6'>Welcome to Africk</p>
        <p className='md:text-2xl sm:text-sm text-sm font-bold md:py-6'> Your one-stop solution for all your
          <Typed className='md:text-2xl sm:text-sm text-sm font-bold md:py-6 uppercase pl-2'strings={['ICT', 'Construction', 'Agriculture']} typeSpeed={50} backSpeed={60} loop /> needs.
        </p>
       <button className='bg-[#6b9122] text-[#d0d2d3] rounded px-6 py-2 uppercase mt-16'>Learn More</button>
      </div>
    </div>
  )
}


/* We are a company that is dedicated to providing our clients with the best solutions that cater to their unique needs.
        At Africk, we believe in the power of technology and innovation to transform industries and drive positive change. Whether you are a business owner, farmer, or construction professional, we are committed to helping you achieve your goals and succeed in today's fast-paced world. Contact us today to learn more about how we can help you.
        Welcome to Africk - a company committed to providing cutting-edge solutions in the fields of ICT, Construction, and Agriculture. Our team of experts are dedicated to delivering innovative and sustainable solutions that help our clients achieve their goals. */

export default Hero