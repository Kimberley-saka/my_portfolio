import { Link } from "react-router-dom" 

function NavBar() {
    return (
        <nav className="flex justify-between text-white">
          <div>
            Kimberley
          </div>

          <div className="flex gap-6">
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