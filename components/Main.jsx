import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full flex justify-center items-center p-2 mx-auto'>
        <div>
          <p className='text-sm font-semibold tracking-widest text-gray-600 uppercase'>
            Let&apos;s build something together
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#5651e5]'>Ahsan</span>
          </h1>
          <h1 className='py-4 text-gray-700'>A Full-Stack Developer</h1>
          <p className='py-4 max-w-[70%] text-gray-600 m-auto font-semibold'>
            I&apos;m a Full-Stack Developer with 2+ years of hands-on experience
            designing, developing, and implementing applications and solutions
            using a range of technologies, libraries and frameworks. Seeking to
            leverage broad development experience and hands-on technical
            expertise in a challenging role as a Full-stack Developer.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/ahsan-mumtaz/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <FaLinkedinIn color='blue' />
              </div>
            </a>
            <a
              href='https://github.com/ahsan1800411'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <FaGithub color='black' />
              </div>
            </a>

            <a
              href='mailto:ahsanmumtaz008976@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <AiOutlineMail color='black' />
              </div>
            </a>
            <div className='p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
              <BsFillPersonLinesFill color='black' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
