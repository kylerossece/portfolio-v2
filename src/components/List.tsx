import { useState } from "react";
import cardArray from "../data/cardArray";
import { motion, AnimatePresence } from "framer-motion";


const List = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  
  const handleOpen = (id: number, url: string) => {
    if (selectedCard === id) return; 
    setSelectedCard(id);
       window.history.pushState({}, "", url);
  };
  
  const handleClose = () => {
    setSelectedCard(null);
    window.history.pushState({}, "", "/");
  };

  return (
    <div  className="flex absolute gap-10 mt-6 z-20">
      {cardArray.map((item, index) => {
       
        return (
          <>
          <motion.div
            key={item.id}
            layout
            onClick={() => handleOpen(item.id, item.url)}
            className=""
            initial={{ y: 600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: index >= 1 ? index * 0.4 : index * 0.2,
            }}
          >

            <div className="cursor-pointer">
            {<item.display />}
            </div>
                 </motion.div>
            <AnimatePresence
            onExitComplete={() => {
              setSelectedCard(null);
            }}
          >
            {((selectedCard === item.id)) && (
              <motion.div
                layout
                initial={{ height: 0, width: 0 }}
                animate={{
                  height: "100vh",
                  width: "100vw",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 40,
                }}
                exit={{
                  height: 0,
                  width: 0,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}

              >
                <item.component onClose={handleClose} />
              </motion.div>
            )}
          </AnimatePresence>

     
          </>
        );
      })}
    </div>
  );
};

export default List;
