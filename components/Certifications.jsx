import React from 'react';
import Certification from "./Certification";
import P3 from '../public/projects/p3.PNG';
import p2 from '../public/projects/p2.PNG'

const Certifications = () => {
    return (
        <>
            <div id='certifications' className='w-full pt-20'>
                <div className='max-w-[1240px]  mx-auto  px-2 w-full  py-16'>
                    <p className='uppercase tracking-widest text-[#5651e5] text-xl'>
                        Certifications
                    </p>
                    <h2 className='py-4'>Skills I am certified in</h2>
                </div>
            </div>
            <div className="flex justify-center space-x-8">
                <Certification
                    imageUrl="/"
                    title="Card 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    buttonText="Learn More"
                />
                <Certification
                    imageUrl={p2}
                    title="Card 2"
                    description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started"
                />
                <Certification
                    imageUrl="/"
                    title="Card 2"
                    description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    buttonText="Get Started"
                />
            </div>
        </>
    );
};

export default Certifications;