import { useState } from "react";
import cardArray from "../data/cardArray";
import { motion, AnimatePresence } from "framer-motion";

const CardList = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex gap-6 mt-6 relative z-10">
      {cardArray.map((item, index) => {
        const isExpanded = selectedCard === item.id;

        return (
          <motion.div
            key={item.id}
            layout
            onClick={() => toggleCard(item.id)}
            className="cursor-pointer overflow-hidden"
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 18,
              delay: index * 0.3,
            }}
          >
            {<item.display />}

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  key="expanded"
                  layout
                  initial={{ height: 0, width: 0}}
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
                  className=" overflow-auto"
                >
                  <item.component />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardList;
