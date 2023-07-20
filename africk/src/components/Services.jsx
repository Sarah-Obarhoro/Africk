import React from 'react';
import cloud from '../assets/cloud.jpg';
import construction from '../assets/construction.jpg';
import food from '../assets/food.jpg';
import IT from '../assets/IT.jpg';

const Article = ({ imgUrl, title, summary }) => {
    return (
      <div>
        <div>
          <img className='mb-8' src={imgUrl} alt='blog' />
        </div>
        <div>
          <div>
            <h3 className='font-bold uppercase my-5 text-[16px]'>{title}</h3>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    )
}

const Services = () => {
  return (
    <div className='h-'>
        <div className='bg-[#6b9122] h-40 grid justify-center flex-col content-center text-center  text-white leading-loose'>
        <h1 className='text-2xl uppercase  font-bold'>Our Services</h1>
        <h2 className='text-base capitalize font-medium'>What we provide</h2>
        </div>

        <div className='grid md:grid-cols-4 sm:grid-cols-2 justify-items-center mx-12 my-20 gap-8' id='services'>
            <div className='' style={{whiteSpace: "pre-line"}}>
                <Article imgUrl={IT} title={<span style={{color:'#6b9122'}}>Managed ICT Service</span>} summary={'Let Africk Solutions assume the operational tasks needed to ensure your infrastructure remains stable and secure. As an effective extension of your team, Africk Limited will manage your all IT services for optimal business productivity. \n  \n ICT services we provide include: Cloud Sloutions, IT Outsourcing and Hardware Procurement. \n'}   />
            </div>

            <div style={{whiteSpace: "pre-line"}}>
                <Article imgUrl={cloud} title={<span style={{color:'#6b9122'}}>Security Solutions</span>} summary={'Get 100% protection for your business as we provide Security Audits, Forensics, Rapid Response and Remediation, Training and Awareness. \n \n Africk Solutions offers Cloud and Mobile Security, Perimeter Security and Infrastructure Security. \n'} />
            </div>

            <div style={{whiteSpace: "pre-line"}}>
                <Article imgUrl={construction} title={<span style={{color:'#6b9122'}}>Procurement of Construction Equipment</span>}  summary={'Our primary objective is to provide quality construction materials and equipment that truly adds value.   Because it is our mandate to help construction companies deliver the best of every project, we have the best construction materials and equipment which include but are not limited to; Scaffolding materials, Plumbing materials, and Bolts, nuts and washers.'} />
            </div>

            <div style={{whiteSpace: "pre-line"}}>
                <Article imgUrl={food} title={<span style={{color:'#6b9122'}}>Africa's Food Products Supply</span>}  summary="Finding quality and affordable food items can be overwhelming sometimes. Africk makes sourcing, payments and delivery of these products easier for our customers." />
            </div>
        </div>

    </div>
  )
}

export default Services