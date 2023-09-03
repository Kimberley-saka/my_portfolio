import { Link } from "react-router-dom"
export default function NavBar() {
  return(
    <div className="flex flex-row justify-between bg-lime-200">
        <div className="flex">
          <Link to="/">Kimberley Saka</Link>
        </div>

        <div className="flex flex-row justify-between w-1/2
        bg-slate-200">
          <Link to="/projects">Projects</Link>
          <Link to="/geospatial">Geospatial</Link>
          <Link to="/blog">Blog</Link>
        </div>
  </div>
)
}