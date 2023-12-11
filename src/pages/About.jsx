import React from 'react'

function About() {
  return (
    <div className='flex flex-col-reverse gap-y-10 text-lg mt-8 md:flex-row
    md:space-x-10 bg-slate-500'>
      <div className='flex md:h-1/2 md:w-2/3 '>
        <img src='/src/assets/images/kim.jpeg' className='object-fit'></img>
      </div>

      <div className='flex flex-col'>
        <p>Hi, I&apos;m Kimberley Saka—a passionate Software Engineer from Malawi.
          I thrive on turning code into solutions, specializing in Python,
          SQL, and crafting RESTful APIs with Flask and Django.
          With a Geographic Information Systems background, I bring a
          unique blend of skills to the table.
          </p>

          <p>I&apos;ve recently completed
            a coding bootcamp at ALX Africa, solidifying my foundation
            and enhancing my problem-solving skills. My journey reflects
            not just expertise but an unwavering passion 
            for creating meaningful software solutions. I&apos;m also diving
            into the world of Java, adding another layer to my programming prowess
            </p>

      </div>
    </div>
  )
}

export default About
