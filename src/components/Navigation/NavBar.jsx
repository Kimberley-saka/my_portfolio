import { Link } from "react-router-dom"
export default function NavBar() {
  return(
    <div className="flex flex-row justify-between items-center h-20 md:px-28
     text-teal-600 text-lg">
        <div className="flex text-3xl font-bold hover:transform hover:scale-110 transition-transform">
          <Link to="/">KS</Link>
        </div>

        <div className="hidden md:flex space-x-12 items-center  text-lg" >
          <Link to="/projects" className="
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