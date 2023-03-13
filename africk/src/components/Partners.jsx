import React from 'react'
import barracuda from '../assets/barracuda.png';
import checkpoint from '../assets/checkpoint.png';
import cisco from '../assets/cisco.png';
import google from '../assets/google-partner.png';
import microsoft from '../assets/microsoft.png';
import sophos from '../assets/sophos.png';


const Partners = () => {
  return (
    <div className='justify-center content-center grid grid-rows-2'>
        <div className='mb-16'>
            <h1 className='mt-16 ml-[70px] text-xl uppercase font-bold'>Our Partners</h1>
        </div>
        <div className='flex flex-1 flex-wrap md:flex-nowrap justify-center items-center m-4 mt-[-220px]    md:mt-0 md:mx-16 max-w-[150px] min-w-[120px]'>
            <img className='max-w-[250px] max-h-24 ml-6' src={barracuda} alt="barracuda logo" />
            <img className='max-w-[350px] max-h-28 ml-6' src={checkpoint} alt="checkpoint logo" />
            <img className='max-w-[130px] max-h-24 ml-6 mb-8' src={cisco} alt="cisco logo" />
            <img className='max-w-[130px] max-h-24 ml-6 mb-8' src={google} alt="google logo" />
            <img className='max-w-[220px] max-h-24 ml-6' src={microsoft} alt="microsoft logo" />
            <img className='max-w-[150px] max-h-24 ml-6' src={sophos} alt="sophos logo" />
        </div>
    </div>
  )
}

export default Partners