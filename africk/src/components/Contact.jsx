import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  const [data, setData] = useState([
    { name: "", email: "", designation: "", phone: "", company: "", message: "" },
  ]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-16" id="contact">
      <div className="contact h-11">
        <div className="contact-overlay px-16">
          <h2 className="text-center sm:text-left font-bold text-3xl">GET IN TOUCH</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 mr-20 ml-10 mt-20 gap-10">
        <div className="col-span-2">
        <form className="w-full" action="mailto:Info@africktech.com" method="post" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-full-name">
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-full-name" type="text" name="fullname" required onChange={handleChange} value={data.name} />
            </div>

            <div className="w-full md:w-1/3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"> Email </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email" type="email" name="email" onChange={handleChange} value={data.email} />
            </div>

            <div className="w-full md:w-1/3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-designation"> Designation </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-designation" type="text" name="designation" onChange={handleChange} value={data.designation} />
            </div>

            <div className="w-full md:w-1/3 px-3 mt-8">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-phone"> Phone Number </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-phone" type="number" name="phone" onChange={handleChange} value={data.phone} />
            </div>

            <div className="w-full md:w-1/3 px-3 mt-8">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-company"> Company </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-company" type="text" name="company" onChange={handleChange} value={data.company} />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-8">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-need">
              Need
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-need">
                <option>Select Options</option>
                <option>Book a Meeting</option>
                <option>Talk to a Sales Agent</option>
                <option>Request a POC</option>
                <option>Others</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="w-full px-3 mb-6 md:mb-0 mt-8">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-message">
                Message
              </label>
              <textarea
                className="label appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-message" name="message" required onChange={handleChange} value={data.message} cols="30" rows="10" />
            </div>
          </div>

          <button type="submit" className="bg-[#6b9122] rounded py-3 px-6 text-[#d0d2d3] font-bold">Send Message</button>
        </form>
        </div>

        <div className="grid md:grid-cols-1 w-full ">
        <div className=" w-full rounded shadow-lg bg-gray-200 text-gray-700 border border-gray-200 leading-tight h-[456px] mb-6">
          <div className="px-6 py-4">
            <div>
            <p className="font-bold text-l mb-2">Email:</p>
            <p className="mb-6">Info@africktech.com</p>
            </div>
            <div>
            <p className="font-bold text-l mb-2">Phone:</p>
            <p className="mb-6">+234-8104652226</p>
            </div>
            <div>
            <p className="font-bold text-l mb-2">Office Address:</p>
            <p className="mb-6">No. 4 Adana Lane Surulere Lagos</p>
            </div>
            <div>
            <p className="font-bold text-l mb-2">Business Hours:</p>
            <p className="mb-6">Monday - Friday: 9am to 5pm <br /> <br />
              Saturday: 9am to 2pm <br /> <br />
              Sunday: Closed</p>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col">
          <h2 className="uppercase font-bold text-sm mb-3">Social Media</h2>
          <div className="flex gap-5 text-[#6b9122] font-bold">
            <FaFacebook size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
