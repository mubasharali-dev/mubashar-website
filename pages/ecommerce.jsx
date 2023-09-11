import Image from 'next/image';
import React from 'react';
import P3 from '../public/projects/p3.PNG';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const ecommerce = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'/>
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={P3}
                    alt='/'
                />
                <div
                    className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Cartsy Medicine - E Commerce App</h2>
                    <h3>React | JavaScript | CSS | UI/UX</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        I successfully built an e-commerce application for cosmetics, enabling users to shop for over
                        100+ makeup, skincare, and hair care products through their mobile devices. Leveraging my
                        expertise in front-end development and user experience design, I crafted a user-friendly
                        interface and integrated features that led to a 30% increase in customer engagement and a 20%
                        rise in conversion rates, ultimately creating a seamless and enjoyable shopping experience for
                        customers.
                    </p>
                    <a
                        href='https://github.com/mubasharali-dev/e-commerce-app'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href='https://cartsy-medicine-ecommerce-app.netlify.app/'
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
                                <RiRadioButtonFill className='pr-1'/> ReactJs
                            </p>
                            <p className='flex items-center py-2 text-gray-600'>
                                <RiRadioButtonFill className='pr-1'/>
                                JavaScript
                            </p>
                            <p className='flex items-center py-2 text-gray-600'>
                                <RiRadioButtonFill className='pr-1'/>
                                CSS
                            </p>
                            <p className='flex items-center py-2 text-gray-600'>
                                <RiRadioButtonFill className='pr-1'/> Redux
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

export default ecommerce;
