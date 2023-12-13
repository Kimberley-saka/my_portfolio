import { Link } from "react-router-dom"


export default function NavBar() {
  return(
    <div className="flex flex-row justify-between items-center mt-5 text-teal-600 
    h-20 md:px-28">
        <Link to="/" className="flex justify-center items-center rounded-full border-2 border-teal-600
          bg-blueish-gray hover:transform hover:scale-110 transition-transform">
          <img src="/assets/images/kim.jpeg" alt="Kimberley" 
          className="h-16 w-16 object-contain rounded-full"/>
        </Link>
      

        <div className="hidden md:flex space-x-12 items-center  text-lg" >
          <Link to="/#projects" className="
          hover:transform hover:scale-110 transition-transform">Projects</Link>
          <Link to="/about"
          className="hover:transform hover:scale-110 transition-transform">About</Link>
          <Link to="/geospatial"
          className="hover:transform hover:scale-110 transition-transform">Geospatial</Link>
          <Link to="/contact"
          className="hover:transform hover:scale-110 transition-transform">Contact</Link>
        </div>
  </div>
)
}