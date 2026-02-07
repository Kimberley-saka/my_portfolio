import NavBar from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import { motion } from "motion/react";

const container = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    }
  }
}

const ComponentItems = {
  hidden: {opacity: 0, y : -50},
  visible: {
  opacity: 1, y: 0,
  transition: {
  ease: "easeOut"
    }
  }

}

function Landing() {
    return(<motion.div variants={container} initial="hidden" animate="visible"  
    className="bg-[url(/bg4.jpg)] bg-center bg-cover h-screen">
    <motion.NavBar variants={ComponentItems} initial="hidden"
    animate="visible"/>
    <motion.HeroSection variants={ComponentItems} initial="hidden" animate="visible"/>
    </motion.div>
        
    )
}

export default Landing;