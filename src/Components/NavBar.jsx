import { Link } from "react-router-dom" 

function NavBar() {
    return (
        <nav className="flex text-xl justify-between text-white h-24 items-center px-10">
          <div>
            Kimberley
          </div>

          <div className="flex gap-10 w-1/2">
            <Link to="/">Home</Link>
            <Link to="">About me</Link>
            <Link to="/">GIS</Link>
            <Link to="/">Software Projects</Link>
            <Link to="/">Contact</Link>


          </div>
         
        </nav>
    )
}


export default NavBar