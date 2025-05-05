import jk2l2 from '../assets/jk2l2.png';
import { SiVuedotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";


const cards = [
  {
    mainIcon: jk2l2,
    text:  (
        <div className='text-lg flex flex-col gap-4 tracking-tight font-noto-sans font-light text-white'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
      ),
    link: "https://www.jk2l2.com/",
    backgroundColor: "bg-slate-400",
    description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    technologies: [{
        id: 1,
        icon: <SiVuedotjs />,
      },
      {
        id: 2,
        icon: <FaBootstrap />,
      },
      {
        id: 3,
        icon: <BiLogoTailwindCss />,
    }]
  }
];
export default cards;