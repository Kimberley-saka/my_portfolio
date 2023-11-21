import { Link } from "react-router-dom"
export default function NavBar() {
  return(
    <div className="flex flex-row justify-between items-center h-20 px-28
     text-white">
        <div className="flex text-2xl font-bold">
          <Link to="/">KS</Link>
        </div>

        <div className="hidden flex-row justify-between w-2/6 px-2
       md:flex" >
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/geospatial">Geospatial</Link>
          <Link to="/contact">Contact</Link>
        </div>
  </div>
)
}