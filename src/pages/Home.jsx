import { Link } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"

export default function HomePage() {
  return(
    <div className="flex flex-col">
      <div className=" flex flex-col space-y-8 py-14 md:items-start md:justify-between
      md:flex-row md:py-28 md:space-y-0 md:pl-28">
        <div className="flex flex-col space-y-4 ">
          <div>
            <div className="text-xl md:text-4xl">
              Hi, I&apos;m Kimberley Saka
            </div>
          </div>

          <div className="text-3xl md:text-6xl">
            <p>A Backend Developer <span className="text-teal-600">&amp;</span></p>
            <p>a Geospatial Analyst</p>
          </div>

          <div className="flex flex-col space-y-8 
            md:space-x-12 text-lg md:flex-row md:space-y-0">
            <Link to="/projects" className="rounded-full border-2 border-teal-600 hover:transform hover:scale-110
            transition-transform w-40 h-10 flex justify-center items-center">
             See My Work
            </Link>
            <Link to="/about" className="rounded-full border-2 border-teal-600 hover:transform hover:scale-110
            transition-transform w-40 h-10 flex justify-center items-center">
            Tell me More
            </Link>
          </div>
        </div>

        <div className="flex space-x-10 md:flex-col md:space-y-8 md:space-x-0">
        <a href="mailto:kimberleysaka@gmail.com" className="hover:transform hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3.5H22V20.5H2V3.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M2 7L12 12L22 7" stroke="#141B34" stroke-width="1.5"/>
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/kimberleysaka" target="_blank" rel="noopener noreferrer"
        className="hover:transform hover:scale-110 transition-transform">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 9V17" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V9" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M7.00801 7L6.99902 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 3V21H3V3H21Z" stroke="white" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
          </svg>
        </a>

        <a href="https://discord.com/users/kimmyrpo_34448_98719" target="_blank" rel="noopener noreferrer"
        className="hover:transform hover:scale-110 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 7C10.8889 5.66667 13.1111 5.66667 17 7" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M7 17C10.5 18.3333 13.5 18.3333 17 17" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M6.19206 21V21.75H6.55547L6.78068 21.4648L6.19206 21ZM2.38298 
            17.625L1.68352 17.8957C1.69087 17.9147 1.699 17.9334 1.70787 17.9517L2.38298 
            17.625ZM4.01495 4.6875L3.76814 3.97928L3.42316 4.0995L3.30516 4.44524L4.01495 
            4.6875ZM8.85716 3L9.55803 2.73301C9.41355 2.35374 8.99359 2.15822 8.61035
            2.29178L8.85716 3ZM8.26841 17.1602L5.60344 20.5352L6.78068 21.4648L9.44565
            18.0898L8.26841 17.1602ZM6.19206 20.25C5.66419 20.25 5.07395 19.9399 4.47712 
            19.3441C3.89289 18.7608 3.39381 17.9921 3.05808 17.2983L1.70787 17.9517C2.09785 
            18.7576 2.68675 19.6763 3.41736 20.4056C4.13537 21.1224 5.08681 21.75 6.19206 
            21.75V20.25ZM3.08244 17.3543C2.78449 16.5844 2.6339 15.0875 2.8569 12.9205C3.07695
            10.7823 3.65212 8.07247 4.72475 4.92976L3.30516 4.44524C2.20182 7.67791 1.59815
            10.4992 1.36478 12.767C1.13436 15.0061 1.25576 16.7902 1.68352 17.8957L3.08244
            17.3543ZM4.26177 5.39572L9.10398 3.70822L8.61035 2.29178L3.76814 3.97928L4.26177
            5.39572ZM8.15629 3.26699L9.29913 6.26699L10.7009 5.73301L9.55803 2.73301L8.15629 3.26699Z" fill="white"/>
            <path d="M17.8079 21V21.75H17.4445L17.2193 21.4648L17.8079 21ZM21.617 17.625L22.3165 
            17.8957C22.3091 17.9147 22.301 17.9334 22.2921 17.9517L21.617 17.625ZM19.985 4.6875L20.2319 
            3.97928L20.5768 4.0995L20.6948 4.44524L19.985 4.6875ZM15.1428 3L14.442 2.73301C14.5865 
            2.35374 15.0064 2.15822 15.3897 2.29178L15.1428 3ZM15.7316 17.1602L18.3966 20.5352L17.2193 21.4648L14.5543 18.0898L15.7316 17.1602ZM17.8079 20.25C18.3358 20.25 18.9261 19.9399 19.5229 19.3441C20.1071 18.7608 20.6062 17.9921 20.9419 17.2983L22.2921 17.9517C21.9021 18.7576 21.3133 19.6763 20.5826 20.4056C19.8646 21.1224 18.9132 21.75 17.8079 21.75V20.25ZM20.9176 17.3543C21.2155 16.5844 21.3661 15.0875 21.1431 12.9205C20.9231 10.7823 20.3479 8.07247 19.2753 4.92976L20.6948 4.44524C21.7982 7.67791 22.4018 10.4992 22.6352 12.767C22.8656 15.0061 22.7442 16.7902 22.3165 17.8957L20.9176 17.3543ZM19.7382 5.39572L14.896 3.70822L15.3897 2.29178L20.2319 3.97928L19.7382 5.39572ZM15.8437 3.26699L14.7009 6.26699L13.2991 5.73301L14.442 2.73301L15.8437 3.26699Z" fill="white"/>
            <path d="M7.51009 12H7.5M16.5 12H16.4899" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        </div>

      </div>
      <div id="about">
       <About/>
      </div>

      <div id="projects">

        <Projects/>

      </div>
     
      
      </div>
  )
}