import { motion} from "framer-motion";
import type { CardType } from "../types/portfolioTypes";
interface CardProps {
    card: CardType;
  }

  

const DisplayCard = ({card} : CardProps) => {
    return (
        <motion.div 
      
        className={`h-[28rem] w-[22rem] flex justify-center items-center shadow-lg hover:shadow-card-shadow rounded-xs ${card.backgroundColor} overflow-hidden`}
        whileHover={{
            y: -10,        
            transition: {
              type: "spring",
              stiffness: 90,
              damping: 20,
            }
          }}
        >
                 <img src={card.mainIcon} alt="img" className='h-auto w-auto max-w-32 max-h-28'  />
        </motion.div>
    )
}

export default DisplayCard