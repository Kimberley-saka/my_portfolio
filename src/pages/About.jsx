import React from 'react'

function About() {
  return (
    <div className='flex flex-col-reverse text-lg mt-8 
    border-2 md:flex-row md:space-x-10 md:mx-28 md:my-14'>
      <div className='flex md:h-2/3 md:w-1/2 '>
        <img src='/src/assets/images/kim.jpeg' className='object-cover'></img>
      </div>

      <div className='flex flex-col md:w-3/4 bg-galaxy md:px-8 md:pt-8'>
        <p>Hi, I&apos;m Kimberley Saka—a passionate Software Engineer from Malawi.
          I thrive on turning code into solutions, specializing in Python,
          SQL, and crafting RESTful APIs with Flask and Django.
          With a Geographic Information Systems background, I bring a
          unique blend of skills to the table.
          </p>

          <p className='pt-2'>I&apos;ve recently completed
            a coding bootcamp at ALX Africa, solidifying my foundation
            and enhancing my problem-solving skills. My journey reflects
            not just expertise but an unwavering passion 
            for creating meaningful software solutions. I&apos;m also diving
            into the world of Java, adding another layer to my programming prowess
            </p>

            <p className='pt-2'>Let&apos;s connect and explore 
              the endless possibilities that my
              enthusiasm for software engineering can bring to your projects!</p>

      </div>
    </div>
  )
}

export default About
