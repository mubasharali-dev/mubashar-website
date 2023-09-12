import React from 'react';
import Certification from "./Certification";
import c1 from '../public/certifications/react.jpg';
import c2 from '../public/certifications/typescript.jpg';
import c3 from '../public/certifications/mern.jpg';

const Certifications = () => {
    return (
        <>
            <div id='certifications' className='w-full pt-20'>
                <div className='max-w-[1240px] mx-auto px-2 w-full py-16'>
                    <p className='uppercase tracking-widest text-[#5651e5] text-xl'>
                        Certifications
                    </p>
                    <h2 className='py-4'>Skills I am certified in</h2>
                </div>
            </div>
            <div className="flex flex-wrap justify-center sm:space-x-4">
                <Certification
                    imageUrl={c1}
                    title="React Js"
                    description="Completed the course covering the Hooks, Lifecycle methods and Re-usable components."
                    buttonLink={"https://drive.google.com/file/d/1u8Ud6E3ab2FAYqJDPHzQpzDzQkjsKwxE/view?usp=sharing"}
                    buttonText="View Certification"
                />
                <Certification
                    imageUrl={c2}
                    title="TypeScript"
                    description="Successfully completed the course covering benefits over Javascript and type system."
                    buttonLink={"https://shorturl.at/kM024"}
                    buttonText="View Certification"
                />
                <Certification
                    imageUrl={c3}
                    title="Mern Stack Development"
                    description="Achieved the MERN Certification, learned intermediate to advance concepts."
                    buttonLink={"https://shorturl.at/dlqrS"}
                    buttonText="View Certification"
                />
                
            </div>
        </>
    );
};

export default Certifications;
