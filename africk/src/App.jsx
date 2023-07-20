import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Whyus from './components/Whyus';
import Partners from './components/Partners';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
      <div className='bg-primary w-full overflow-hidden'>
        <Navbar />
        <Hero />
        <About />
        <Whyus />
        <Partners />
        <Services />
        <Contact />
        <Footer />
      </div>
  )
}


export default App
