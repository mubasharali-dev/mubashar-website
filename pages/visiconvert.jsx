import Image from 'next/image';
import React from 'react';
import P5 from '../public/projects/p5.jpg';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const visiconvert = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'/>
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={P5}
                    alt='/'
                />
                <div
                    className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>VisiConvert - Digital Agency Website</h2>
                    <h3>React | TypeScript | Tailwind CSS | UI/UX</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        I created a digital agency website which revitalized online presence and catalyzed their
                        business growth. I developed a strategic website design, optimized content, and enhanced SEO,
                        resulting in a 70% increase in organic traffic, a 45% boost in conversion rates, a 40% reduction
                        in bounce rates, and a remarkable 60% rise in social media engagement. This comprehensive
                        approach not only expanded their reach but also drove tangible business outcomes, solidifying
                        my role in their success story.
                    </p>
                    <a
                        href='https://github.com/mubasharali-dev/VisiConvert---Digital-Agency'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href='https://visi-convert.vercel.app/'
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
                                Typescript
                            </p>
                            <p className='flex items-center py-2 text-gray-600'>
                                <RiRadioButtonFill className='pr-1'/>
                                Tailwind CSS
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

export default visiconvert;
