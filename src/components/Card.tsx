import jk2l2 from '../assets/jk2l2.png';
import { TbExternalLink } from "react-icons/tb";
import { SiVuedotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
const Card = () => {
    return (
        <section className="bg-slate-400 h-full min-h-screen">
             <div className="max-w-7xl mx-auto">
                <div className='grid grid-cols-12 gap-8 py-32'>
                <div className="col-span-12 md:col-span-6 flex flex-col gap-6 mt-8">
                <img src={jk2l2} alt="S2S" className='h-auto w-auto max-w-25 max-h-20'  />
                <p className="text-3xl font-semibold font-rammetto-one hover:underline cursor-pointer text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                <span className="inline-block ml-2 align-middle">
                    <TbExternalLink />
                </span>

                </p>
                <div className='text-white'>
                    <h1 className='font-medium'>Technologies Used</h1>
                    <div className='flex gap-4 text-5xl font-semibold mt-3'>
                        <SiVuedotjs />
                        <FaBootstrap />
                        <BiLogoTailwindCss />
                    </div>
                </div>
                <div>

                </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                <h1 className='text-lg flex flex-col gap-6 tracking-tight font-noto-sans font-light text-white'>
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