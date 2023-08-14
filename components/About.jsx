import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MyPic from '../public/projects/mubashar.jpg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      id='about'
      ref={ref}
      className={`flex items-center w-full p-2 py-16 overflow-x-hidden md:h-screen ${
        inView ? 'animate-appear' : ''
      }`}
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-6'>
        <div className='col-span-2'>
          <motion.p
            className='uppercase text-xl text-[#5651e5] tracking-widest'
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: inView ? '0%' : '-100%', opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.p>
          <motion.h2
            className='py-4 text-gray-600'
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: inView ? '0%' : '-100%', opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Who am I?
          </motion.h2>
          <motion.p
            className='py-2 font-semibold text-gray-600'
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: inView ? '0%' : '-100%', opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm Mubashar Ali, a Full-Stack Developer using MERN stack. I have an
            experience of MERN along with Javascript, Typerscript, Next.js,
            jQuery, Material - UI and React-Bootstrap. Whether I'm working on my
            own or as a part of team, I'm constantly driven to provide
            innovative solutions to complex problems.
          </motion.p>
          <motion.p
            className='py-2 font-semibold text-gray-600'
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: inView ? '0%' : '-100%', opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Aside from coding, Mubashar also loves to play cricket, badminton,
            and workout. It is very easy to work with him. Feel free to reach
            out to him on{' '}
            <a
              href='https://www.linkedin.com/in/mubasharali-dev/'
              target='_blank'
              rel='noreferrer'
              className='text-blue-500 underline hover:no-underline'
            >
              LinkedIn
            </a>
            .
          </motion.p>

          <Link href='/#projects'>
            <motion.p
              className='py-4 font-semibold text-gray-600 underline cursor-pointer'
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: inView ? '0%' : '-100%', opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Have a look at some of my recent work!
            </motion.p>
          </Link>
        </div>

        <motion.div
          className='flex items-center justify-center w-full h-auto p-4 m-auto duration-500 ease-in shadow-xl shadow-blue-200 rounded-xl hover:scale-105'
          initial={{ x: '100%', opacity: 0 }} // Initial position (hidden)
          animate={{ x: inView ? '0%' : '50%', opacity: inView ? 1 : 0 }} // Animate to 0% (in view) or 100% (not in view) from the right side
          transition={{ duration: 0.5 }} // Animation duration
        >
          <Image className='rounded-xl' alt='me' src={MyPic} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
