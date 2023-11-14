import { Link } from "react-router-dom"
export default function NavBar() {
  return(
    <div className="flex flex-row justify-between items-center h-20 bg-lime-200 px-28">
        <div className="flex text-2xl font-bold">
          <Link to="/">Kimberley Saka</Link>
        </div>

        <div className="hidden flex-row justify-between w-2/6 px-2
        bg-slate-200 md:flex" >
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/geospatial">Geospatial</Link>
          <Link to="/contact">Contact</Link>
        </div>
  </div>
)
}