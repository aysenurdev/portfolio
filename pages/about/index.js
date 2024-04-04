import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaTimes
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Avatar from "../../components/Avatar";

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from "react-countup";

// Import or define aboutData here
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
        title: 'Early Childhood Educator - Pure Play Child Care', 
        stage: '2022 - 2023',
      },
      {
        title: 'Registered Early Childhood Educator - YMCA',
        stage: '2020 - 2022',
      },
      {
        title: 'Intern - Jacop Haspeler Child Care Centre',
        stage: '2019 - 2020',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Front-End Web Development Certificate - British Columbia Institute of Technology ,Vancouver, CA, 2023-2024',
      },
      {
        title: 'Early Childhood Education Diploma - Conestoga College, Ontario, CA, 2019-2021',
        
      },
      {
        title: 'Public Administration Degree - Gazi University, Turkey, 2012-2016',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false); // State for modal visibility
  const [showYMCACommentsModal, setShowYMCACommentsModal] = useState(false); 

  const [showCoffeeModal, setShowCoffeeModal] = useState(false); // State for modal visibility

  const toggleImageModal = () => {
    setShowImageModal(prevState => !prevState); // Toggle modal state
  };

  const toggleYMCACommentsModal = () => {
    setShowYMCACommentsModal(prevState => !prevState); // Toggle YMCA comments modal state
  };

  
  const toggleCoffeeModal = () => {
    setShowCoffeeModal(prevState => !prevState); // Toggle YMCA comments modal state
   
 
  };
  return (
    <div className="h-full bg-primary text-black py-32 text-center xl:text-left">
      {/* <Circles /> */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit='hidden'
        className="hidden xl:flex absolute text-accent bottom-0 -left-[370px]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* About me section */}
        <div className="flex-1 flex flex-col justify-center mt-16">
          <h2 className="h2 text-accent">
            <span className="text-secondary font-cinzel">About me</span>
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-1o px-2 xl:px-0  text-accent">
            Welcome! My name is Aysenur. I am a Early Childhood Educator turned Front-End Web Developer based in Vancouver, Canada. My journey from teaching to technology has been remarkable. I specialize in React, Next.js, Tailwind CSS and SASS to create clean, user-friendly, responsive web designs. I'm passionate about crafting seamless web experiences and eager to collaborate on meaningful tech projects. 
          </p>
          <h2 className="text-lg ">&#128522; Exploring Me & My Hobbies !!</h2>
          <motion.a
            href="#"
            className="text-secondary hover:text-black transition-colors"
            onClick={toggleImageModal}
            whileHover={{ scale: 1.05 }}
          >
            One-word comments about me from my previous YMCA co-workers on the hand map &#128204;
          </motion.a>
          {showImageModal && (
            <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 z-20">
              <div className="relative max-w-sm max-h-sm bg-white p-4 rounded-lg mt-12 shadow-lg">
                <img
                  src="/handmap.png"
                  alt="Ukulele"
                  className="w-full h-auto"
                />
                <button
                  onClick={toggleImageModal}
                  className="absolute top-4 right-2 z-30 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          )}
            <motion.a
            href="#"
            className="text-secondary hover:text-black  transition-colors"
            onClick={toggleYMCACommentsModal} // Open modal on click
            whileHover={{ scale: 1.05 }}
          >
           I love soft pastel &#127912; painting!!!
           </motion.a>
          {/* Modal for displaying the image */}
         
     
{showYMCACommentsModal && (
  <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div className="relative max-w-sm max-h-sm bg-white p-4 rounded-lg shadow-lg">
    <video
  src="/video.mp4" // Change this path to the location of your video file
  controls
  className="w-full h-auto"
/>
      <button
        onClick={toggleYMCACommentsModal}
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full"
      >
       <FaTimes />
      </button>
    </div>
  </div>
)}

<motion.a
            href="#"
            className="text-secondary hover:text-black  transition-colors"
            onClick={toggleCoffeeModal} // Open modal on click
            whileHover={{ scale: 1.05 }}
          >
         I am a coffee &#9749; lover!
          </motion.a>
          {/* Modal for displaying the image */}
         
     
{showCoffeeModal && (
  <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 z-20">
    <div className="relative max-w-sm max-h-sm bg-white p-4 rounded-lg mt-12 shadow-lg">
      <img
        src="/coffee.png"
        alt="Ukulele"
        className="w-full h-auto"
      />
      <button
        onClick={toggleCoffeeModal}
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full z-30"
      >
       <FaTimes />
      </button>
    </div>
  </div>
)}



        </div>
        {/* Info section */}
        <div className="flex flex-col    w-full xl:max-w-[40%] h-[320px] mb-100">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
  {aboutData.map((item, itemIndex) => (
    <div
      key={itemIndex}
      className={`${
        index === itemIndex &&
        'text-secondary after:w-[100%] after:bg-accent after:transition-all after:duration-300'
      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-blue-500 after:absolute after:-bottom-1 after:left-0 titleHover`}
      onClick={() => setIndex(itemIndex)}
    >
      {item.title}
    </div>
  ))}
</div>

          <div className="py-2 xl:py-6 flex flex-col mb-80 gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex-1 flex  mb-50 flex-col md:flex-row max-w-max gap-x-2 items-center text-accent ">
                <div className="text-base mb-2 md:mb-0 ">{item.title}</div>
                <div className="hidden md:flex"></div>
                <div>{item.stage} </div>
                <div className="flex gap-4">
                  {item.icons?.map((icon, itemIndex) => (
                    <div className="text-2xl text-accent">{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
