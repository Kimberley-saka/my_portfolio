import GetInTouch from "./GetInTouch";
import { motion } from "motion/react";

function HeroSection() {
    return(
        <div
        
        className="flex flex-col gap-12 px-3 pt-20  h-1/2 justify-center items-center 
        md:gap-14 md:px-34 md:h-full md:pt-0">
        <h1
        className="text-3xl text-left md:text-4xl lg:text-5xl 
        font-bold md:text-center">
            Hello I'm Kimberley, a Geospatial Analyst who also loves to code backend software
        </h1>
        <div>
          <GetInTouch/>
        </div>
        

        </div>
    )
}

export default HeroSection;