import { Link } from "react-router-dom" 

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="">About me</Link>
            <Link to="/">GIS</Link>
            <Link to="/">Software Projects</Link>
            <Link to="/">Contact</Link>

        </nav>
    )
}


export default NavBar