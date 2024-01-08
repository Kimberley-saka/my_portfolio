import { Link } from "react-router-dom"

function About() {
  return (
    <div className='flex flex-col-reverse text-lg mt-8 
    md:flex-row  md:mx-28 md:my-14'>
      <div className='flex h-72 w-1/2 rounded-3xl md:mt-8 bg-pink-200 '>
        <img src='/assets/images/kim.jpeg' className='h-full w-full object-cover rounded-3xl'></img>
      </div>

      <div className='flex flex-col bg-contain md:w-3/4 md:px-8 md:pt-8'>
        <p>Hi, I&apos;m Software Engineer from Malawi.
          I thrive on turning code into solutions, specializing in <span
          className='text-teal-500'>Python</span>, <span className='text-teal-500'>
          JavaScrit</span>, <span className='text-teal-500'>React</span>, <span
          className='text-teal-500'>SQL</span> and crafting <span
          className='text-teal-500'>RESTful APIs </span> with <span
          className='text-teal-500'>Flask</span> and <span  className='text-teal-500'>Django</span>.
          With a Geographic Information Science background, I bring a
          unique blend of skills to the table.
          </p>

          <p className='pt-2'>I&apos;ve recently completed
            a coding bootcamp at ALX Africa, solidifying my foundation
            and enhancing my problem-solving skills. My journey reflects
            not just expertise but an unwavering passion 
            for creating meaningful software solutions. I&apos;m also diving
            into the world of Java, adding another layer to my programming prowess.
            </p>

            <Link to="/contact" className="rounded-full border-2 my-10 border-teal-600 hover:transform hover:scale-110
            transition-transform w-40 h-10 flex justify-center items-center">
            Let&apos;s connect
            </Link>

      </div>
    </div>
  )
}

export default About
