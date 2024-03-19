import React, {useState} from "react";


// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  
  {
    title: 'experience',
    info: [
      {
        title: 'Registered Early Childhood Educator - Pure Play Child Care',
        stage: '2022 - 2023',
      },
      {
        title: 'Registered Early Childhood Educator - YMCA',
        stage: '2020 - 2022',
      },
      {
        title: 'Intern - Jacop Haspeler Chil Care Centre',
        stage: '2019 - 2020',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Front-End Web Development Certificate - British Columbia Institute of Technology ,Vancouver, CA',
        stage: '2023-2024',
      },
      {
        title: 'Early Childhood Education Diploma - Conestoga College, Ontario, CA',
        stage: '2019-2021',
      },
      {
        title: 'Public Administration Degree - Gazi University, Turkey',
        stage: '2012-2016',
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';


//counter 
import CountUp from "react-countup";


const About = () => {
  const [index, setIndex] = useState(0);
  console.log (index)
  return (
  <div className="h-full bg-primary text-black py-32 text-center xl:text-left">
    <Circles />
    {/* avatar img */}
    <motion.div variants={fadeIn('right', 0.2)} 
    initial="hidden"
     animate="show"
      exit='hidden' 
      className="hidden xl:flex absolute text-accent bottom-0 -left-[370px]">
      {/* <Avatar /> */}
  </motion.div>
<div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
 {/* text */}
  <div className="flex-1 flex flex-col justify-center">
    <h2 className="h2 text-accent">
      Captivating <span className="text-accent">stories</span> birth magnificent designs</h2>

    <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">Welcome! My name is Aysenur. I am a Early Childhood Educator turned Front-End Web Developer based in Vancouver, Canada. My journey from teaching to technology has been remarkable. I specialize in React, Next.js, Tailwind CSS and SASS to create clean, user-friendly, responsive web designs. I'm passionate about crafting seamless web experiences and eager to collaborate on meaningful tech projects. During my leisure hours, I love  <span>soft pastel painting</span> and playing ukulele also cooking.</p>


 
    
</div>
   {/* info */}
  <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
  {aboutData.map((item, itemIndex) =>{
    return (
    <div 
    key={itemIndex} 
    className={`${
      index === itemIndex && 
    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg:black after:absolute after:-bottom-1 after:left-0`}

    onClick={()=> setIndex(itemIndex)}
    
    >
      
    
    {item.title}

    </div>
    );
  } )}
</div>
<div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
  {aboutData[index].info.map((item, itemIndex) => {
    return (

     <div key={itemIndex} 
     className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-accent/60 ">
      {/* title */}
      <div className="font-light mb-2 md:mb-0">
        {item.title}
      </div>
      <div className="hidden md:flex">-</div>
      <div>{item.stage} </div>
      <div className="flex gap-4">
 {/* icons */}
 {item.icons?.map((icon,itemIndex) => {
  return <div className="text-2xl text-accent">{icon}</div>
 })}
    </div>
    </div>  
    );


  })}
</div>
  </div>
</div>
</div>
  );
};

export default About;
