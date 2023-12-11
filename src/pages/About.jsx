import React from 'react'

function About() {
  return (
    <div className='flex flex-row text-lg'>
      <div className='flex h-1/2 w-2/3 object-cover'>
        <img src='/src/assets/images/kim.jpeg' className='object-cover bg-black'></img>
      </div>

      <div>
        <p>Hi, I'm Kimberley Saka—a passionate Software Engineer from Malawi.
          I thrive on turning code into solutions, specializing in Python,
          SQL, and crafting RESTful APIs with Flask and Django.</p>

      </div>
    </div>
  )
}

export default About
