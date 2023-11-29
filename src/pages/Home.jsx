import { Link } from "react-router-dom"

export default function HomePage() {
  return(
    <div className="flex flex-col">
      <div className=" flex flex-col justify-center items-start py-48 md:px-28">
        <div className="flex flex-col space-y-4 ">

          <div>
            <div className="text-xl md:text-2xl">
              Hi, I&apos;m Kimberley Saka
            </div>
          </div>

          <div className="text-3xl md:text-5xl">
            <p>I am a Backend Developer &amp; </p>
            <p>a Geospatial Analyst</p>
          </div>

          <div className="flex flex-col space-y-8 
            md:space-x-12 text-lg md:flex-row md:space-y-0">
            <Link to="/projects" className="rounded-full border hover:bg-gray-500 hover:opacity-80
            transition duration-300 w-40 h-10 flex justify-center items-center">
             See My Work
            </Link>
            <Link to="/contact" className="rounded-full border hover:bg-gray-500 hover:opacity-80
            transition duration-300 w-40 h-10 flex justify-center items-center">
            Tell me More
            </Link>

          </div>

        </div> 

      </div>
          
      </div>
  )
}