import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
