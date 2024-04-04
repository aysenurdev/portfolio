//next image
import image from "next/image";
import {GoogleFonts} from 'next-google-fonts';
import { useEffect } from "react";

//components

import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer motion
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../variants';

const Home = () => {
  
  return <div className="bg-white h-full">
    {/* text */}
    <div className="w-full h-full">
      <div className="text-center flex flex-col  justify-center md:pt-60 xl:text-left h-full container mx-auto">
        {/* title */}
        <motion.h1
         variants={fadeIn('down', 0,2)}
         initial='hidden'
          animate='show'
          exit='hidden'
          style={{ fontFamily: 'Cinzel' }}
         className="h1 font-cinzel  text-secondary">
          Aysenur Demir <br /><span className="text-accent">Front-End Web Developer</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p
         variants={fadeIn('down', 0.3)}
         initial='hidden'
          animate='show'
          exit='hidden'
         className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
        
        </motion.p>
         {/* btn */}
         <div className="flex justify-center xl:hidden z-10">
          <ProjectsBtn />
         </div>
         <motion.div variants={fadeIn('down', 0.4)}
          initial='hidden'
           animate='show'
           exit='hidden'
           className="hidden xl:flex"
           >
          <ProjectsBtn />
         </motion.div>
      </div>
    </div>
    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
  {/* bg img */}
  <div className="bg-none xl:bg-explosion xl:bg:cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 "></div>
<motion.div 
 variants={fadeIn('up', 0,5)}
 initial='hidden'
  animate='show'
  exit='hidden'
  transition={{duration: 1, ease: 'easeInOut'}}
className="w-full max-w-[300px] max-h-[200] absolute  lg:top-60 lg:right-[15%]">
  <Avatar />
</motion.div>
    </div>
    </div>;
};

export default Home;
