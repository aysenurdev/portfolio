import WorkSlider from '../../components/WorkSlider';
import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='h-full bg-primary py-36 sm:pt-6 '> 
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          {/* text */}
          <div className='text-center mb-4'>
            <motion.h2 
              variants={fadeIn('up', 0.2)}
              initial='show'
              animate='show'
              exit='hidden'
              className='h2 mt-20 sm:mt-5 text-secondary font-cinzel'
            >
            </motion.h2>
          </div>

          {/* slider */}
          <motion.div 
            variants={fadeIn('up', 0.6)}
            initial='show'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%] md:w-full' // Set to full width on mobile
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
