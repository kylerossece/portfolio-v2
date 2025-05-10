import { motion, useInView  } from "framer-motion";
import { BsPersonWorkspace } from "react-icons/bs";

import { useRef } from "react";

const Experience = () => {

    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });
  
    const textRef = useRef(null);
    const textInView = useInView(textRef, { once: true });

    const redirectTo = () => {
      window.open("https://www.jk2l2.com/","_blank")
    }
    
    return (
        
        <div className="text-xl font-rammetto-one tracking-wide pt-[550px] pb-32">
        <motion.h1 ref={titleRef}
        className="overflow-hidden text-2xl"
        initial={{ y:60}}
        animate={titleInView ? { y: 0 } : {}}
        transition={{duration: 0.2, delay: 0.1}}
        >Experience</motion.h1>
        <motion.div
         ref={textRef} 
         initial={{ opacity: 0 }}  
         animate={textInView ? { opacity: 1 } : {}}
         transition={{duration: 0.4, delay: 0.2}}

         className="text-base font-noto-sans mt-4" >
          <div className="flex gap-4 items-start" onClick={() => redirectTo()}>
            <motion.div
             className="relative flex items-center justify-center w-14 h-14 cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
         
            >
              <motion.div
                variants={{
                  rest: {scale: 0, opacity:0},
                  hover: {scale: 1, opacity: 1}
                }}
                   className="absolute inset-0 rounded-full bg-gray-800"
            
               />
               <motion.div  className="text-2xl relative z-1"
                               variants={{
                                rest: { color: "#1f2937" }, 
                                hover: { color: "#f9fafb" },
                              }}
               >
            <BsPersonWorkspace />
            </motion.div>
            </motion.div>
            <div className="mt-1.5 text-sm hover:underline cursor-pointer" onClick={() => redirectTo()}>
              <p className="font-semibold"> JK2L2, Pasig</p>
              <p className=" italic">Junior Frontend Developer, 2024-Present</p>
              <p className="italic"> Pasig, Metro Manila</p>
              <p></p>
    
        </div>

          </div>
        </motion.div>

       
      </div>
  
    )
}

export default Experience;