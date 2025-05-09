import { motion } from "framer-motion";
import List from "./List";


const Work = () => {
    return (
        <div
        
        className="text-xl font-rammetto-one tracking-wide pt-8 overflow-hidden">
           <motion.h1 
                initial={{ y: 50 }}  
                animate={{ y: 0 }}  
                transition={{duration: 0.4, delay: 1.0}}
           className="relative overflow-hidden mb-1 text-2xl">Work</motion.h1>
           <List/>
         </div>
    )
}

export default Work;