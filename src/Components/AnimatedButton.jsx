/*
This component is the template for 
all animated buttons
*/
import {motion} from "motion/react";


function AnimatedButton(
    {children}
){
  return(
    <motion.button
      whileHover={{ scale: 1.05, y: -2}}
      whileTap={{scale:0.9, y: 1}}
      transition={{type:"spring", stiffness: 300, damping: 15}}>
        {children}
    </motion.button>
    );
}

export default AnimatedButton;