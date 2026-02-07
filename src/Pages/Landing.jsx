// Home page of the portfolio

import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import { motion } from "motion/react";


const container = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    
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
    className="bg-[url(/bg4.jpg)] bg-center bg-cover h-screen">
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