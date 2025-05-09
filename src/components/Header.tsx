import icons from "../data/icons";
import { motion  } from "framer-motion";


const Header = () => {
    return (
        <header className="flex flex-col gap-4">
        <div className="text-4xl font-rammetto-one tracking-wide pt-16 overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}  
              animate={{ y: 0 }}    
              transition={{ duration: 0.4 }}
            >
              Kyle
            </motion.h1>
            <motion.h1
              initial={{ y: 100 }} 
              animate={{ y: 0 }}    
              transition={{ duration: 0.4, delay: 0.25 }}  
            >
              Prestado
            </motion.h1>
          </div>

       
          <motion.div className="text-md font-bold max-w-md"
                  initial={{ opacity: 0 }}  
                  animate={{ opacity: 1 }}    
                  transition={{ duration: 0.6,delay: 0.4 }}
          >
            I'm a frontend developer with a passion for creating beautiful and functional user interfaces. I love to learn new technologies and improve my skills. I'm always looking for new challenges and opportunities to grow as a developer.
          </motion.div>

          <ul className="flex gap-3 text-3xl overflow-hidden">
          {icons.map((item, index) => (
            <motion.li
              key={item.id}
              className="relative flex items-center justify-center w-14 h-14 cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                variants={{
                  rest: { scale: 0, opacity: 0 },
                  hover: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-full bg-gray-800"
              />
              <motion.div
                           initial={{ y: 60 }}  
                           animate={{ y: 0 }}    
                           transition={{
                            type: "spring",  
                            stiffness: 90,  
                            damping: 12,     
                            delay: index * 0.2,
                          }}
              >

              <motion.a
                href={item.link}
                target="_blank"
                variants={{
                  rest: { color: "#1f2937" }, 
                  hover: { color: "#f9fafb" },
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-3xl"
              >
                {item.icon}
              </motion.a>
              </motion.div>
            </motion.li>
          ))}
          </ul>
        </header> 
    )
}

export default Header