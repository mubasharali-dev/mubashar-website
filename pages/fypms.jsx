import Image from 'next/image';
import React from 'react';
import P2 from '../public/projects/p2.PNG';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const fypms = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={P2}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>FYP Management System</h2>
          <h3>React | Node | Express | MongoDB | Javascript | React Bootstrap</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This project aims to develop an online platform to facilitate the completion of final year projects (FYP) for the information technology department. The FYP is a crucial component of the department curriculum, where groups of students work under the guidance of a supervisor to complete a theme-based project. The platform will utilize cutting-edge technology to enhance collaboration and communication among the three key user groups: FYP programme organizers, project supervisors, and project group members. The goal of this project is to create a complete web-based system that streamlines the FYP process and enhances the overall experience for all involved parties.
          </p>
          
          <h3 className='gap-4 py-4 mx-auto'>Login Credentials</h3>
          <div className='flex'>
            <div className='col-span-4 p-3'> 
          <h3>Admin Login</h3>
          <p>Username: admin00334</p>
          <p>password: jamshaid334</p>
          <p>Role: Admin</p>
          </div>
          <div className='col-span-4 p-3'>
          <h3>Student Login</h3>
          <p>Username: bsf1900109</p>
          <p>password: bsf1900109</p>
          <p>Role: Student</p>
          </div>
          </div>
          <a
            href='https://github.com/mubasharali-dev/fyp-system'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://fypms-ue.netlify.app/login'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl'>
          <div className='p-2'>
            <p className='pb-2 font-bold text-center'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> ReactJS
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> NodeJS
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> ExpressJs
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> React Bootstrap
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> JWT Token
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default fypms;
