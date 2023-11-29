import { Link } from "react-router-dom"

export default function HomePage() {
  return(
    <div className="flex flex-col">
      <div className=" flex flex-col justify-center items-center py-48 text-white">
        <div className="flex flex-col space-y-4 px-10">

          <div>
            <div className="text-xl">
              Hi I&apos;m Kimberley Saka
            </div>
          </div>

          <div className="text-2xl">
            I am Backend Developer and Geospatial Analyst
          </div>

          <div className="flex flex-col space-y-8 
            md:space-x-12 md:flex-row md:space-y-0">
            <Link to="/projects" className="rounded-full border hover:bg-gray-500 hover:opacity-80
            transition duration-300 w-40 h-10 flex justify-center items-center">
             See My Work
            </Link>
            <Link to="/contact" className="rounded-full border hover:bg-gray-500 hover:opacity-80
            transition duration-300 w-40 h-10 flex justify-center items-center">
            Get in touch
            </Link>

          </div>

        </div> 

      </div>
          
      </div>
  )
}