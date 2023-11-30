import { Link } from "react-router-dom"


export default function Projects() {
  return (
    <div className="flex md:py-8">
      <div className="flex flex-col border-b px-4 py-4 md:w-5/6 md:space-x-16 md:flex-row">
          <div className="flex text-xl font-bold md:w-2/6">
            Geospatial data Portal
          </div>
          <div className="flex flex-col space-y-6">
            <div className="font-bold">
                Techstack
            </div>
            <div className="flex md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Autem neque aspernatur officiis tempore tenetur impedit vel 
              voluptatem natus, atque velit sint, modi adipisci aliquam
              earum blanditiis sequi porro suscipit exercitationem.
            </div>
          <div className="flex flex-col space-y-4 md:space-x-12 text-lg
            md:flex-row md:space-y-0">
            <Link to="/" className="rounded-full border hover:bg-gray-500
              hover:opacity-80
              transition duration-300 w-40 h-10 flex justify-center items-center">
              View Demo
            </Link>

            <Link to="/" className="flex rounded-full border hover:bg-gray-500 hover:opacity-80
              transition duration-300 w-40 h-10 justify-center items-center">
              Github
            </Link>

          </div>
         
        </div>
      </div>
    </div>
  )
}
