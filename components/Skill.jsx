import React from 'react';
import Image from 'next/image';

const Skill = ({ name, src }) => {
  return (
    <div className='p-6 duration-150 ease-in shadow-xl shadow-blue-200 rounded-xl hover:scale-105'>
      <div className='grid items-center justify-center grid-cols-2 gap-4'>
        <div className='m-auto'>
          <Image
            className='rounded-xl shadow-blue-500'
            alt='/'
            src={src}
            width='64px'
            height='64px'
          />
        </div>
        <div className='flex flex-col items-center justify-center text-center '>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skill;
