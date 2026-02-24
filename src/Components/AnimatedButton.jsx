/*
This component is the template for 
all animated buttons in this project
*/
import {motion} from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

function AnimatedButton(
    {children}

){
  return(
    <motion.button
      className={`flex items-center gap-7 px-6 py-2 
        w-50 border border-orange-ish rounded-md md:text-lg`}
      whileHover={{ scale: 1.05, y: -2}}
      whileTap={{scale:0.9, y: 1}}
      transition={{type:"spring", stiffness: 300, damping: 15}}
      >
        {children}
        <div className="">
    <HugeiconsIcon icon={ArrowRight01Icon} size={20} strokeWidth={1.5} />
  </div>
    </motion.button>
    );
}

export default AnimatedButton;