import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='flex items-center w-full p-2 py-16 md:h-screen '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-6'>
        <div className='col-span-2'>
          <p className='uppercase text-xl text-[#5651e5] tracking-widest'>
            About
          </p>
          <h2 className='py-4 text-gray-600'>Who even is this guy?</h2>
          <p className='py-2 font-semibold text-gray-600'>
            So glad you asked! This guy&apos;s name is Ahsan Mumtaz and He is a
            full-stack developer. He went to University of Education and
            graduated with a Information Technology degree. He is comfortable
            with using TypeScript, React, Redux, GraphQL, Prisma, Apollo, Node,
            Express, MongoDB, PostgreSQL, MySQL, Docker and Kubernetes.
          </p>
          <p className='py-2 font-semibold text-gray-600'>
            Aside from coding, Ahsan also loves to play cricket, basketball, and
            workout. He is a really easy going guy. Feel free to reach out to
            him on LinkedIn.
          </p>
          <Link href='/#projects'>
            <p className='py-4 font-semibold text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects
            </p>
          </Link>
        </div>

        <div className='flex items-center justify-center w-full h-auto p-4 m-auto duration-500 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105'>
          <Image
            className='rounded-xl'
            alt='me'
            src='/../public/assets/my.jpg'
            width='700'
            height='700'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
