
import { TbExternalLink } from "react-icons/tb";
const Card = ({card} : any) => {
    return (
        <section className="bg-slate-400 h-full min-h-screen">
             <div className="max-w-7xl mx-auto">
                <div className='grid grid-cols-12 gap-8 py-32'>
                <div className="col-span-12 md:col-span-6 flex flex-col gap-6 mt-8">
                <img src={card.mainIcon} alt="S2S" className='h-auto w-auto max-w-25 max-h-20'  />
                <p className="text-3xl font-semibold font-rammetto-one hover:underline cursor-pointer text-white">
                    {card.description}
                <span className="inline-block ml-2 align-middle">
                    <TbExternalLink />
                </span>

                </p>
                <div className='text-white'>
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
}

export default Card;