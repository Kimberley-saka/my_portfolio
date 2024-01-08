import { HashLink } from "react-router-hash-link"


export default function NavBar() {
  return(
    <div className="flex flex-row justify-between items-center mt-5 text-teal-600 
    h-20 md:px-28">
        <HashLink to="/" className="flex justify-center items-center rounded-full border-2 border-teal-600
          bg-blueish-gray hover:transform hover:scale-110 transition-transform">
          <img src="/assets/images/kim.jpeg" alt="Kimberley" 
          className="h-14 w-14 object-contain rounded-full"/>
        </HashLink>
        <div className="hidden md:flex space-x-12 items-center  text-lg" >

          <HashLink to="/" className="hover:transform hover:scale-110 transition-transform">Home</HashLink>
          <HashLink to="#projects" className="
          hover:transform hover:scale-110 transition-transform">Projects</HashLink>
          <HashLink to="#about"
          className="hover:transform hover:scale-110 transition-transform">About</HashLink>
          <HashLink to="/contact"
          className="hover:transform hover:scale-110 transition-transform">Contact</HashLink>
        </div>
  </div>
)
}