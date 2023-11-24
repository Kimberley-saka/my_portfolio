import { Link } from "react-router-dom"

export default function HomePage() {
  return(
    <div className="flex flex-col">
      <div className=" flex flex-col justify-center items-center py-48 text-white bg-galaxy bg-cover">
        <div className="flex flex-col space-y-4">
          <div>
            <div className="text-2xl font-bold">
              Hello 
            </div>

            <div>
              I&apos;m Kimberley Saka
            </div>
          </div>

          <div>
            A Geospatial Analyst and Backend Developer
          </div>

          <div className="flex flex-row space-x-20">
            <Link to="/projects" className=" rounded-full bg-blue-600 w-28 h-10 flex justify-center items-center hover:bg-slate-60"
            > My Work </Link>
            <Link to="/contact" className=" rounded-full bg-blue-600 w-28 h-10 flex justify-center items-center hover:bg-slate-60"
            > Get in touch </Link>

          </div>

        </div> 

      </div>

          
      </div>
  )
}