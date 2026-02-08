// Home page of the portfolio

import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import { motion } from "motion/react";
import GetInTouch from "../Components/GetInTouch";


const container = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    
    }
  }
}

const componentItems = {
  hidden: {opacity: 0, y : -50},
  visible: {
  opacity: 1, y: 0,
  transition: {
  duration: 0.8,
  ease: "easeOut"
    }
  }

}

function Landing() {
    return(<motion.div variants={container} initial="hidden" animate="visible"  
    className="bg-dark-blue bg-center bg-cover text-white h-120 md:h-screen ">
      <motion.div variants={componentItems} className="h-24">
        <NavBar/>
      </motion.div>

      <motion.div variants={componentItems} className="h-full">
        <HeroSection />
      </motion.div>

    </motion.div>
        
    )
}

export default Landing;