import React from 'react'

const Whyus = () => {
  return (
    <div className='whyus border-t-2'>
        <div className="whyus-overlay py-32">
          <div className=' px-8 sm:px-30 md:px-40'>
            <h1 className='text-3xl uppercase mb-10 font-bold'>Why Choose Us</h1>
            <p className=' border-b pb-5'> At Africk Solution, we discuss specific business requirements, rather than simply selling a product or service. Through our experience with use cases, we are able to provide our customers with effective solutions that enable maximum productivity and growth for their ICT, Construction and Manufacturing teams.</p>
          </div>

          <div className='grid sm:grid-cols-2 px-9 gap-36 mt-12'>
            <div className='text-start ml-14'>
              <h2 className='uppercase text-lg mb-4'>Technical Know-How</h2>
              <p>Our partnerships with seasoned companies ensures that we have a base of highly qualified professionals to deliver timely value-based solutions, services and support to our Customers.</p>
            </div>

            <div className=' text-start ml-14'>
              <h2 className='uppercase text-lg mb-4'>Our Core Values</h2>
              <p> 	Customer-centric </p>
              <p> 	Create value </p> 
              <p> 	Innovation </p>
              <p> 	Integrity </p>
              <p> 	Excellence </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Whyus