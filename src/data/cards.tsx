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
    id: 1,
    mainIcon: jk2l2,
    text:  (
        <div className='text-xl flex flex-col gap-5 tracking-tight font-light font-roboto text-white'>
        <p>JK2L2 is the primary distributor of S2S Internet, powered by Converge.</p>
        <p>I’m responsible for developing and adding features to websites under Surf2Sawa. I also designed the user interface for a chatbot and tools for company admins.</p>
        <p> Hands-on experience working with production APIs and understanding websites developed by my seniors was able to enhance my skills in Vue. Collaborating with back-end developers and the quality assurance team was able to help me gain experience in the development cycle.</p>
      </div>

      ),
    link: "https://www.jk2l2.com/",
    backgroundColor: "bg-slate-400",
    textColor: "text-white",
    description : `I'm a Junior Frontend Developer at JK2L2`,
    technologies: [{
        id: 1,
        icon: <SiVuedotjs />,
        tooltip: "Vue"
      },
      {
        id: 2,
        icon: <FaBootstrap />,
        tooltip: "Bootstrap"
      },
      {
        id: 4,
        icon: <SiTypescript />,
        tooltip: "Typescript"
    },
      {
        id: 3,
        icon: <BiLogoTailwindCss />,
        tooltip: "Tailwind"
    },
  ]
  }
  ]


const travelCard = [
 
    {
    id:2,
    mainIcon: travel,
    text:  (
        <div className='text-xl flex flex-col gap-5 tracking-tight font-light font-roboto text-white'>
          <p>This website was developed through the Travel Advisor and Google Maps API. It allows users to search destinations near or in a particular location they search.
            The ratings and exact address are displayed and the location of the destination can be seen in Google Maps.  
          </p>
          <p>This is my first major project using React and Typescript but the biggest challenge was working with Google Maps API since it was difficult to track boundaries. However, I had a pleasure working on it as I was able to learn the usefulness of maps API that I can build different projects with this and use this website personally. </p>
  
        </div>
      ),
    link: "https://travel-guide-hcoa.vercel.app/",
    backgroundColor: "bg-gray-400",
    textColor: "text-white",
    description : `A guide for your travel needs. Know restaurants, hotels, and attractions near you.`,
    technologies: [{
        id: 1,
        icon: <SiGooglemaps />,
        tooltip: "Google Maps"
      },
      {
        id: 2,
        icon: <FaReact />,
        tooltip: "React"
      },
      {
        id: 3,
        icon: <BiLogoTailwindCss />,
        tooltip: "Tailwind"
    },
    {
      id: 4,
      icon: <SiTypescript />,
      tooltip: "Typescript"
  }
  ]
  }
];

const gameCard = [
 
  {
  id: 3,
  mainIcon: console,
  text:  (
      <div className='text-xl flex flex-col gap-5 tracking-tight font-light font-roboto text-white'>
        <p>A website that allows to see the list of the latest MMO games and news. This was developed with the MMO Games API and the layout was inspired from the Steam games website.</p>
         <p>This was a project created since I have a passion for gaming and I also want to try Material UI and Redux.</p>
      </div>
    ),
  link: "https://mmo-daily.vercel.app/",
  backgroundColor: "bg-gray-500",
  textColor: "text-white",
  description : `Always be updated at the latest news in MMO`,
  technologies: [
    {
      id: 1,
      icon: <SiMui />,
      tooltip: "Material UI",
    },
    {
      id: 2,
      icon: <FaReact />,
      tooltip: "React",
    },
    {
      id: 3,
      icon: <SiRedux  />,
      tooltip: "Redux",
    },
    {
      id: 4,
      icon: <BiLogoTailwindCss />,
      tooltip: "Tailwind",
  },
  {
    id: 5,
    icon: <SiTypescript />,
    tooltip: "Typescript"
}
]
}
];
export {travelCard, jkCard, gameCard};