//Navigation bar

import { Link } from "react-router-dom"
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon } from '@hugeicons/core-free-icons'


function NavBar() {
    return (
        <nav 
        className="flex justify-between
        items-center pl-5 py-6 text-lg font-light md:h-24 md:px-10 md:pt-12">
          <Link to="/" className="h-16 w-16 md:h-20 md:w-20 "
          > <img src="/logo.png" alt="" /></Link>
          <div className="hidden md:flex md:gap-10 md:w-1/2">
            <Link to="">Home</Link>
            <Link to="">About me</Link>
            <Link to="">GIS</Link>
            <Link to="">Software Projects</Link>
            <Link to="">Contact</Link>
          </div>

          <Link className="md:hidden pr-5">
          <HugeiconsIcon icon={Menu01Icon} size={30} color="light-orange" strokeWidth={1.5} />
        
          </Link>
         
        </nav>
    )
}


export default NavBar
