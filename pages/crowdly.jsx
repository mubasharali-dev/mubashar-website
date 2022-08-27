import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/projects/project3.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crowdly = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Crowdly</h2>
          <h3>GraphQL / ReactJS / PostgreSQL / TypeScript / Apollo</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Crowdly is a Fully fledged Blog Application build with React and
            GraphQL utilizing TypeScript allow users to share their posts and
            update their post.IT is an online platform for peoples to improve
            their reading and writing skills by reading and writing
            comprehensive and enjoyable articles about their selected topic.
          </p>
          <a
            href='https://github.com/ahsan1800411/GraphQL-Crowdly'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://github.com/ahsan1800411/GraphQL-Crowdly'
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
                <RiRadioButtonFill className='pr-1' /> GraphQL
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' />
                Apollo
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' />
                ReactJS
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> PostgreSQL
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Prisma
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> JWT
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
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

export default crowdly;
