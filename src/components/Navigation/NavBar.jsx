import { Link } from "react-router-dom"
export default function NavBar() {
  return(
    <div className="flex flex-row justify-between items-center h-20 px-28
     text-white bg-galaxy text-lg">
        <div className="flex text-3xl font-bold">
          <Link to="/">KS</Link>
        </div>

        <div className="hidden md:flex space-x-12 items-center" >
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/geospatial">Geospatial</Link>
          <Link to="/contact">Contact</Link>
        </div>
  </div>
)
}