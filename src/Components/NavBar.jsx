//Navigation bar

import { Link } from "react-router-dom"


function NavBar() {
    return (
        <nav 
        className="flex text-xl justify-between
         h-24 items-center px-5 md:px-10 md:pt-12">
          <div className="font-bold">
            Kimberley Saka
          </div>

          <div className="hidden md:flex md:gap-10 md:w-1/2">
            <Link to="">Home</Link>
            <Link to="">About me</Link>
            <Link to="">GIS</Link>
            <Link to="">Software Projects</Link>
            <Link to="">Contact</Link>


          </div>
         
        </nav>
    )
}


export default NavBar
