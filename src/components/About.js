import React from 'react'
import Title from './Title'
import Skills from './Skills'


export default function About() {
  return (
    <div id='about' className='scroll-mt-24'>
      <Title title='about me' />

      <div className="flex flex-row gap-4 mx-auto p-3 card mb-10 items-start">

        <div className="flex flex-col w-full mx-auto max-w-2xl pt-3">
          <p className='text-left'>
            I'm a recent Computer Science graduate with a passion for creating
            <span style={{ color: '#a5d6d2' }}> thoughtful, user-centric </span>
            applications that solve real-world problems.
            <br /><br />
            I've successfully developed products from the ground up
            with a focus on user experience and functionality.
            While I have worked with several technologies, my current 
            focus is on frontend development, particularly with 
            <span style={{ color: '#a5d6d2' }}> React and React Native</span>.
            I'm driven by the idea of leveraging technology to simplify complex tasks and enhance productivity, 
            and I'm excited to continue exploring this field.
            <br /><br />
            I'm currently seeking opportunities in
            <span style={{ color: '#a5d6d2' }}> frontend development, product management, and software development </span>
            where I can apply my skills and contribute to innovative projects.
            <br /><br />
            Feel free to reach out if you'd like to collaborate or discuss exciting opportunities!
          </p>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className="flex flex-col gap-4 w-full max-w-sm pr-1">
          <Skills />
        </div>
      </div>
    </div>
  )
}