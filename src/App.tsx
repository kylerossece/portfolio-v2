import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";
import Card from "./components/Card";
const icons = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/",
  },
  {
    id: 2,
    icon: <ImLinkedin />,
    link: "https://www.linkedin.com/in/kyle-ross-prestado/",
  },
  {
    id: 3,
    icon: <MdOutlineEmail />,
    link: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kylerossprestado@gmail.com",
  },
];

export default function App() {
  return (
    <main className="bg-gray-50 h-full min-h-screen">
         <Card />
      <section className="mx-auto max-w-4xl w-full font-noto-sans text-gray-800">
        <div className="flex flex-col gap-6">
        <div className="text-4xl font-rammetto-one tracking-wide pt-16 overflow-hidden">
            <motion.h1
              initial={{ y: 50 }}  
              animate={{ y: 0 }}    
              transition={{ duration: 0.3 }}
            >
              Kyle
            </motion.h1>
            <motion.h1
              initial={{ y: 50 }} 
              animate={{ y: 0 }}    
              transition={{ duration: 0.3, delay: 0.2 }}  
            >
              Prestado
            </motion.h1>
          </div>

       
          <motion.div className="text-lg font-bold max-w-sm"
                  initial={{ opacity: 0 }}  
                  animate={{ opacity: 1 }}    
                  transition={{ duration: 0.6,delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </motion.div>

          <ul className="flex gap-6 text-3xl overflow-hidden">
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
        <div className="text-xl font-rammetto-one tracking-wide pt-14">
            <h1>Work</h1>
         
          </div>
        <div className="text-xl font-rammetto-one tracking-wide pt-16">
            <h1>Experience</h1>

          </div>
      </section>
    </main>
  );
}
