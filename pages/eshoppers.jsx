import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/projects/project4.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const eshoppers = () => {
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
          <h2 className='py-2'>EShoppers</h2>
          <h3>NodeJS / ReactJS / MongoDB / ExpressJS / Stripe</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            EShoppers is a fully fledged E-Commerce Platform. This app was built
            using React JS on the client side and NodeJS most preferably we can
            say Express.JS as the server side. It allows users to buy products
            based on the category , choices. Also allow users to search for the
            product with a secure backend API using JSON WEB Tokens. It also
            have a Admin Dashboard where you can manage all your data and users
            information. Stripe is implmented in this app for handling payments
          </p>
          <a
            href='https://github.com/ahsan1800411/EShoppers-MERN'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://github.com/ahsan1800411/EShoppers-MERN'
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
                <RiRadioButtonFill className='pr-1' /> NodeJS
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' />
                ExpressJS
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' />
                ReactJS
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Mongoose
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> JWT
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Stripe
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Redux
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

export default eshoppers;
