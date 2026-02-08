/*
This component is the template for 
all animated buttons in this project
*/
import {motion} from "motion/react";


function AnimatedButton(
    {children}
){
  return(
    <motion.button
      className="border border-blue-50 px-6 py-2 rounded text-white font-semibold md:text-lg md:w-50"
      whileHover={{ scale: 1.05, y: -2}}
      whileTap={{scale:0.9, y: 1}}
      transition={{type:"spring", stiffness: 300, damping: 15}}
      >
        {children}
    </motion.button>
    );
}

export default AnimatedButton;