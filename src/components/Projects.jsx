import { Link } from "react-router-dom"


export default function Projects() {
  return (
    <div className="flex px-0 md:px-28 md:py-8">
      <div className="flex flex-col border-b px-4 py-4 md:w-5/6 md:space-x-16 md:flex-row">
          <div className="flex md:w-2/6 md:text-xl font-bold">
            Geospatial data Portal
          </div>
          <div className="flex flex-col space-y-6">
            <div className="font-bold">
                Techstack
            </div>
            <div className="flex md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Autem neque aspernatur officiis tempore tenetur impedit vel voluptatem natus, atque velit sint, modi adipisci
              aliquam earum blanditiis sequi porro suscipit exercitationem.
            </div>
          <div className="flex flex-col space-y-4 md:space-x-14 md:text-lg md:flex-row">
            <Link to="/" className="rounded-full border hover:bg-gray-500 hover:opacity-80
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
