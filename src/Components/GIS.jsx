import { motion } from "motion/react";

function GIS() {
  return (
    <div className="flex flex-col text-dark-blue  bg-light-orange md:px-10 md:h-150">
      <h1 className="text-4xl md:text-5xl md:pt-10">
      A few of my GIS projects</h1>

      <div className="flex flex-col justify-center items-center h-full md:gap-20 md:flex-row">
       

          <div>
              <h2 className="text-2xl md:text-3xl md:ml-20 pt-10">GIS Project 2</h2>
              <p className="text-lg md:text-2xl md:ml-20 pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          </div>


          <div>
              <h2 className="text-2xl md:text-3xl md:ml-20 pt-10">GIS Project 3</h2> 
              <p className="text-lg md:ml-20 pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>  
          </div>


        </div>
      </div>
    )
}


export default GIS;