import { useState } from "react";
import cardArray from "../data/cardArray";
import { motion, AnimatePresence } from "framer-motion";

const List = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  
  const handleOpen = (id: number) => {
    if (selectedCard === id) return; 
    setSelectedCard(id);
  };
  
  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="flex gap-10 absolute mt-6 z-10 ">
      {cardArray.map((item, index) => {
       
        return (
          <motion.div
            key={item.id}
            layout
            onClick={() => handleOpen(item.id)}
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
                className="overflow-auto"
              >
                <item.component onClose={handleClose} />
              </motion.div>
            )}
          </AnimatePresence>

          </motion.div>
        );
      })}
    </div>
  );
};

export default List;
