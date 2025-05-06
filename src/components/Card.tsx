
import { TbExternalLink } from "react-icons/tb";
import type { CardType } from "../types/portfolioTypes";
interface CardProps {
    card: CardType;
    isDisplay: boolean,
  }

const Card = ({card, isDisplay}  : CardProps) => {
    return (
        isDisplay ? (
        <div className={`h-96 w-xs sm:h-96 sm:w-2xs flex justify-center items-center ${card.backgroundColor}`}>
                 <img src={card.mainIcon} alt="img" className='h-auto w-auto max-w-32 max-h-28'  />
        </div>
        ) :(
        <section 
        className={`h-full min-h-screen ${card.backgroundColor}`}>
             <div className="w-7xl mx-auto">
                <div className='grid grid-cols-12 gap-8 py-32'>
                <div className="col-span-12 md:col-span-6 flex flex-col gap-6 mt-8">
                <img src={card.mainIcon} alt="S2S" className='h-auto w-auto max-w-24 max-h-20'  />
                <p className={`text-3xl font-semibold font-rammetto-one hover:underline cursor-pointer ${card.textColor}`}>
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