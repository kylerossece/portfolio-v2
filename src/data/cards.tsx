import jk2l2 from '../assets/jk2l2.png';
import travel from '../assets/travel.png';
import console from '../assets/console.png';
import { SiVuedotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";


const jkCard = [
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
    textColor: "text-white",
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
        id: 4,
        icon: <SiTypescript />,
    },
      {
        id: 3,
        icon: <BiLogoTailwindCss />,
    },
  ]
  }
  ]


const travelCard = [
 
    {
    mainIcon: travel,
    text:  (
        <div className='text-lg flex flex-col gap-4 tracking-tight font-noto-sans font-light text-white'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
      ),
    link: "https://www.jk2l2.com/",
    backgroundColor: "bg-slate-500",
    textColor: "text-white",
    description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    technologies: [{
        id: 1,
        icon: <SiGooglemaps />,
      },
      {
        id: 2,
        icon: <FaReact />,
      },
      {
        id: 3,
        icon: <BiLogoTailwindCss />,
    },
    {
      id: 4,
      icon: <SiTypescript />,
  }
  ]
  }
];

const gameCard = [
 
  {
  mainIcon: console,
  text:  (
      <div className='text-lg flex flex-col gap-4 tracking-tight font-noto-sans font-light text-white'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
      </div>
    ),
  link: "https://www.jk2l2.com/",
  backgroundColor: "bg-slate-500",
  textColor: "text-white",
  description : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  technologies: [
    {
      id: 1,
      icon: <SiMui />,
    },
    {
      id: 2,
      icon: <FaReact />,
    },
    {
      id: 3,
      icon: <SiRedux  />,
    },
    {
      id: 4,
      icon: <BiLogoTailwindCss />,
  },
  {
    id: 5,
    icon: <SiTypescript />,
}
]
}
];
export {travelCard, jkCard, gameCard};