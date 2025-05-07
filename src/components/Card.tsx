
import { TbExternalLink } from "react-icons/tb";
import type { CardType } from "../types/portfolioTypes";
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
interface CardProps {
    card: CardType;
    isDisplay: boolean,
    onClose?: () => void;
  }

const Card = ({card, isDisplay, onClose}  : CardProps) => {
    return (
        isDisplay ? (
        <motion.div 
        className={`h-[26rem] w-2xs flex justify-center items-center shadow-lg hover:shadow-card-shadow rounded-xs ${card.backgroundColor}`}
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
        ) :(
        <section 
        className={`h-full min-h-screen ${card.backgroundColor}`}>
             <div className="w-7xl mx-auto">
                
                <div className='grid grid-cols-12 gap-8 py-32'>
                <div className="col-span-12 md:col-span-6 flex flex-col gap-6 mt-8">
  
                <motion.div
                className="relative flex items-center justify-center w-14 h-14 text-white hover:text-gray-900  cursor-pointer"
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

                <motion.div className="relative z-10 text-3xl ">
                    <FaArrowLeftLong />
                </motion.div>
                </motion.div>
                            
                <img src={card.mainIcon} alt="S2S" className='h-auto w-auto max-w-24 max-h-20'  />
                <p className={`text-3xl font-semibold font-rammetto-one hover:underline  ${card.textColor}`}>
                    {card.description}
                <span className="inline-block ml-2 align-middle">
                    <TbExternalLink />
                </span>

                </p>
                <div className={`${card.textColor}`}>
                    <h1 className='font-medium'>Technologies Used</h1>
                    <div className='flex gap-4 text-5xl font-semibold mt-3'>
                    {
                        card.technologies?.map((technology : any)=> {
                            return (
                                <div key={technology.id}>{technology.icon}</div>

                            )
                        })
                    }
                    </div>
                </div>
                <div>

                </div>
                </div>
                <div className="col-span-12 md:col-span-6" >
                        {card.text}
                </div>
                <div>

                </div>
                </div>

        </div>
        </section>
        )
       

    )
}

export default Card;