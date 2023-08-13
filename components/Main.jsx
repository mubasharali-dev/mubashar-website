import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

export const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center overflow-x-hidden'>
      <div className='max-w-[1240px] w-full h-full flex justify-center items-center p-2 mx-auto'>
        <div>
         
          
          <motion.div
      initial={{ x: '-25%' }} // Initial position outside the left edge
      animate={{ x: 0 }} // Animate to the center
      transition={{ duration: 1, ease: 'easeOut' }} // Animation duration and easing
    >
       <motion.p className='text-sm font-semibold tracking-widest text-gray-600 uppercase'
       initial={{ x: '-20%' }} // Initial position outside the left edge
       animate={{ x: 0 }} // Animate to the center
       transition={{ duration: 1, ease: 'easeOut', delay: 0 }} // Add a slight delay to the animation
     >
            Let&apos;s solve your problem together
          </motion.p>
      <motion.h1 className='py-4 text-gray-700'
      initial={{ x: '-20%' }} // Initial position outside the left edge
      animate={{ x: 0 }} // Animate to the center
      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }} // Add a slight delay to the animation
    >
        Hi, I&apos;m <span className='text-[#5651e5]'>Mubashar</span>
      </motion.h1>
      <motion.h2
        className='py-4 text-gray-700'
        initial={{ x: '-50%' }} // Initial position outside the left edge
        animate={{ x: 0 }} // Animate to the center
        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }} // Add a slight delay to the animation
      >
        A Full-Stack Developer
      </motion.h2>
    </motion.div>

          <p className='py-4 max-w-[70%] text-gray-600 m-auto font-semibold'>
            I&apos;m experienced Full-Stack Developer with over two years of practical expertise in creating, coding, and deploying various applications and solutions using a diverse set of technologies, libraries, and frameworks. Eager to utilize my extensive development background and hands-on technical skills as a Full-Stack Developer.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/mubasharali-dev/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='group inline-block p-6 duration-400 ease-in-out rounded-full shadow-lg cursor-pointer shadow-blue-500 hover:scale-110'>
              <FaLinkedinIn className="text-black transition-colors duration-300 group-hover:text-blue-500" />
              </div>
            </a>
            <a
              href='https://github.com/mubasharali-dev'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-400 ease-in-out rounded-full shadow-lg cursor-pointer shadow-blue-500 hover:scale-110'>
                <FaGithub color='black' />
              </div>
            </a>

            <a
              href='mailto:mubashar.hashmat@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-400 ease-in-out rounded-full shadow-lg cursor-pointer shadow-blue-500 hover:scale-110'>
                <AiOutlineMail color='black' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
