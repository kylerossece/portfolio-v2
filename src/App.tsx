import { motion, useInView  } from "framer-motion";
import icons from "./data/icons"
import List from "./components/List";
import { useRef } from "react";



export default function App() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: false });

  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: false });
  return (




    <main className="bg-gray-50 h-full min-h-screen relative">

      <div className="px-5 md:px-0 mx-auto w-4xl font-noto-sans text-gray-800">
        <div className="flex flex-col gap-4">
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
        </div>
        <div
        
         className="text-xl font-rammetto-one tracking-wide pt-8 overflow-hidden">
            <motion.h1 
                 initial={{ y: 50 }}  
                 animate={{ y: 0 }}  
                 transition={{duration: 0.4, delay: 1.0}}
            className="relative overflow-hidden mb-1">Work</motion.h1>
            <List/>
          </div>
        <div className="text-xl font-rammetto-one tracking-wide pt-[500px] overflow-hidden">
            <motion.h1 ref={titleRef}
            className="overflow-hidden"
            initial={{ y:60}}
            animate={titleInView ? { y: 0 } : {}}
            transition={{duration: 0.2, delay: 0.1}}
            >Experience</motion.h1>
            <motion.div
             ref={textRef} 
             initial={{ opacity: 0 }}  
             animate={textInView ? { opacity: 1 } : {}}
             transition={{duration: 0.4, delay: 0.2}}

             className="text-base font-noto-sans mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </motion.div>

          </div>
      </div>
    </main>
  );
}
