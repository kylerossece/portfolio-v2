import { TbExternalLink } from "react-icons/tb";
import type { CardType } from "../types/portfolioTypes";
import { motion, useInView } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRef } from "react";
import DisplayCard from "./DisplayCard";

interface CardProps {
  card: CardType;
  isDisplay: boolean;
  onClose?: () => void;
}

const Card = ({ card, isDisplay, onClose }: CardProps) => {
  const handleLink = (link: string | undefined) => {
    window.open(link, "_blank");
  };

  const descriptionRef = useRef(null);
  const descriptionView = useInView(descriptionRef, { once: true });

  return isDisplay ? (
    <DisplayCard card={card} />
  ) : (
    <motion.section
      className={`h-full w-full overflow-y-auto overflow-x-hidden z-50 ${card.backgroundColor}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 py-24">
          <motion.div className="col-span-12 md:col-span-6 flex flex-col gap-6 mt-4">
        
            <motion.div
              className="relative flex items-center justify-center w-14 h-14 text-white hover:text-gray-900 cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
              onClick={onClose}
            >
              <motion.div
                variants={{
                  rest: { scale: 0, opacity: 0 },
                  hover: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-full bg-white"
              />
              <motion.div className="relative z-10 text-3xl">
                <FaArrowLeftLong />
              </motion.div>
            </motion.div>

    
            <motion.div
              ref={descriptionRef}
              initial={{ x: -620 }}
              animate={descriptionView ? { x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <img
                src={card.mainIcon}
                alt="img"
                className="h-auto w-auto max-w-24 max-h-20 mb-5"
              />
              <p
                className={`text-3xl font-semibold font-rammetto-one hover:underline cursor-pointer break-words ${card.textColor}`}
                onClick={() => handleLink(card.link)}
              >
                {card.description}
                <span className="inline-block ml-2 align-middle">
                  <TbExternalLink />
                </span>
              </p>

       
              <div className={`${card.textColor}`}>
                <h1 className="font-medium font-noto-sans mt-3 text-lg">
                  Technologies Used
                </h1>
                <div className="flex gap-4 text-5xl font-semibold mt-3 flex-wrap">
                  {card.technologies?.map((technology: any) => (
                    <div key={technology.id}>{technology.icon}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="col-span-12 md:col-span-6 mt-5 w-full overflow-hidden">
            <p className="break-all whitespace-pre-wrap text-base leading-relaxed text-wrap">
              {card.text}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Card;
