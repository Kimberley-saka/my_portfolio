import GetInTouch from "./GetInTouch";
import { motion } from "motion/react";

const heroContainer = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    
    }
  }
}

const heroItems = {
  hidden: {opacity: 0, y : -50},
  visible: {
  opacity: 1, y: 0,
  transition: {
  duration: 0.8,
  ease: "easeOut"
    }
  }

}


function HeroSection() {
  return(
    <motion.div variants={heroContainer} initial="hidden" animate="visible" 
    className="flex flex-col  gap-5 md:justify-center 
    items-center h-full pt-20 mx-5 md:pt-0 md:mx-20  
    ">
      <motion.div variants={heroItems} 
      className="flex flex-col gap-3  ">
        <h1 className="flex gap-3 font-bold text-3xl sm:w-full md:text-6xl">
           Hi, I&apos;m <p className="text-orange-ish">Kimberley Saka</p>
        </h1>

        <p className=" text-3xl font-light md:text-5xl">
          a Geospatial Analyst who also loves to code backend software.
        </p>
       
      </motion.div>

      <motion.div variants={heroItems} 
      className="pt-8 w-full">
        <GetInTouch/>
        
      </motion.div>

      
     

    </motion.div>
    )
}

export default HeroSection;