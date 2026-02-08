//Navigation bar

import { Link } from "react-router-dom"


function NavBar() {
    return (
        <nav 
        className="flex justify-between
        items-center pl-5 py-12 text-lg md:h-24 md:px-10 md:pt-12">
          <Link to="/" className=" "
          >Kimberley Saka</Link>
          <div className="md:flex md:gap-10 md:w-1/2">
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
