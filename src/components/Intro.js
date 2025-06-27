import React from 'react'
import { BsChevronDoubleDown } from "react-icons/bs";

export default function Intro() {
  return (
    <div className="hero min-h-screen" id="intro">
      <div className="hero-bg-circle one" />
      <div className="hero-bg-circle two" />
      <div className="hero-bg-circle three" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="w-48 h-100 object-cover rounded-xl"
          src="images/avatar.png"
          alt="Nina Lui"
        />
        <div className="max-w-md flex flex-col">
          <h1 className="text-5xl font-bold fade-in-up">hi! i'm
            <span style={{ color: '#a5d6d2' }}> nina</span>
          </h1>
          <h3 className="text-xl font-semibold mb-1 fade-in-up" style={{ animationDelay: '0.2s' }}>aspiring software developer</h3>
          <p className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            passionate about user-first software and elegant solutions.
          </p>
        </div>

      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 fade-in-up" style={{ animationDelay: '0.6s' }}>
        <BsChevronDoubleDown className='text-2xl font-bold' />
      </div>

    </div>
  )
}