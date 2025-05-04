import s2sLogo from '../assets/s2slogo.png';
import { TbExternalLink } from "react-icons/tb";
const Card = () => {
    return (
        <section className="bg-amber-500 h-full min-h-screen">
             <div className="max-w-7xl mx-auto">
                <div className='grid grid-cols-12 gap-8 py-32'>
                <div className="col-span-12 md:col-span-6 flex flex-col gap-6 mt-8">
                <img src={s2sLogo} alt="S2S" className='h-auto w-auto max-w-25 max-h-20'  />
                <p className="text-3xl font-semibold font-rammetto-one hover:underline cursor-pointer text-stone-50">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                <span className="inline-block ml-2 align-middle">
                    <TbExternalLink />
                </span>
                </p>
                <div>

                </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                <h1 className='text-xl flex flex-col gap-6 tracking-tighter   text-stone-50'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when   
                </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when   
                </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when   
                </p>
                </h1>
                </div>
                <div>

                </div>
                </div>

        </div>
        </section>
       

    )
}

export default Card;