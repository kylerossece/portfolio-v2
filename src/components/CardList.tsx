import { useState } from "react";
import cardArray from "../data/cardArray";
import { motion } from "framer-motion";

const CardList = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setSelectedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex gap-4 mt-6 relative z-10">
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
            {item.id}
            {<motion.div
              layout
              animate={{
                height:  isExpanded ? "100vh" : "0rem",
                width: isExpanded ? "100vw" : "0rem",
                position: isExpanded ? "fixed" : "relative",
                top: isExpanded ? 0 : "auto",
                left: isExpanded ? 0 : "auto",
                zIndex: isExpanded ? 40 : "auto",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`bg-white overflow-auto ${isExpanded ? "" : "hidden"}`}
            >
              <item.component /> 
            
            </motion.div>
         }
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardList;
