import React from 'react';

const About = () => {
  return (
    <div className='about mx-auto grid sm:grid-cols-2' id='about'>
        <div className='px-20 pt-20 py-20'>
        <h1 className='w-36 border-b-2 border-[#6b9122] text-xl uppercase mb-10 font-bold'>Who We Are</h1>
        <p className='font-semibold text-lg leading-8'>Africk solutions limited offers a wide range of services across Tech, construction industries, and Africa's food supply that directly contribute to the significant growth of individuals and businesses (SMEs and large organizations). <br /> <br /> 
        We aim to build a trustworthy relationship by partnering with our clients and customers to achieve their goals and objectives. <br /> <br />
        Our growth and consistency in the industry are based on our structured strategies when delivering our services. This has enabled our competent team and partners to effectively deliver what is required of them.
        </p>
        </div>

        <div className='grid sm:grid-rows-2 bg-[#6b9122] px-20 py-20'>
            <div className='mb-10'>
            <h1 className='w-36 border-b-2 border-[#d0d2d3] text-xl uppercase mb-10 font-bold'>Our Mission</h1>
            <p className='font-semibold text-lg leading-8'>To be recognized as a reputable brand, providing exceptional information communication technology value for business across Africa and to be recognized for our incredible delivery of agricultural produce across Nigeria and beyond. </p>
            </div>
            
            <div>
            <h1 className='w-36 border-b-2 border-[#d0d2d3] text-xl uppercase mb-10 font-bold'>Our Vision</h1>
            <p className='font-semibold text-lg leading-8'>
                - To contribute significantly to the growth of businesses in various sectors through strategic and innovative information communication technology solutions. <br />
                - To provide value in the quality of construction materials. <br />
                - To provide outstanding food products and delivery of agricultural products across the African economy and beyond
            </p>
            </div>
        </div>
    </div>
  )
}

export default About