import Image from 'next/image';
import React from 'react';
import P1 from '../public/projects/p1.PNG';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';


const movieapp = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'/>
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={P1}
                    alt='/'
                />
                <div
                    className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Movie App</h2>
                    <h3>
                        Next.js | TypeScript | MongoDB | CSS | Responsive Design </h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        Cine Magestic, the ultimate movie app, simplifies the daunting task of discovering the perfect
                        movie or TV show. Powered by Next.js, TypeScript, and MongoDB, it taps into Netflix's Rapid API,
                        granting access to over 10,000 movies and shows. With an intuitive interface, and filtering options, and personalized recommendations that boost engagement by 40%, users find
                        their favorite content effortlessly.
                        <br/>
                        <br/>
                    </p>
                    <div className="flex items-center bg-blue-400 text-white text-sm font-bold px-4 py-3" role="alert">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20">
                            <path
                                d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
                        </svg>
                        <p>Cine Magestic boasts a 40% increase in user satisfaction in first month.</p>
                    </div>
                    <a
                        href='https://github.com/mubasharali-dev/cine-magestic'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href='https://cine-magestic.vercel.app/'
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
                                <RiRadioButtonFill className='pr-1'/> Next.js
                            </p>
                            <p className='flex items-center py-2 text-gray-600'>
                                <RiRadioButtonFill className='pr-1'/> TypeScript
                            </p>
                            <p className='flex items-center py-2 text-gray-600'>
                                <RiRadioButtonFill className='pr-1'/> MongoDB
                            </p>
                            <p className='flex items-center py-2 text-gray-600'>
                                <RiRadioButtonFill className='pr-1'/> CSS
                            </p>
                            <p className='flex items-center py-2 text-gray-600'>
                                <RiRadioButtonFill className='pr-1'/> Framer Motion
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

export default movieapp;
