import React from 'react';
import ContactImg from '../public/projects/pc.jpg';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';

export const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px]  mx-auto  px-2 w-full  py-16'>
        <p className='uppercase tracking-widest text-[#5651e5] text-xl'>
          Contact
        </p>
        <h2 className='py-4'>Get in Touch</h2>
        <div className='grid gap-8 lg:grid-cols-5'>
          {/* left */}
          <div className='w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl'>
            <div className='h-full lg:p-4 '>
              <div>
                <Image
                  src={ContactImg}
                  className='duration-300 ease-in rounded-xl hover:scale-105'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Mubashar Ali</h2>
                <p>Full-Stack Developer</p>
                <p className='py-4'>
                 I'm available anytime. Just drop a message on one of the below channels or fill the form, and I'll get back to you as soon as possible.
                </p>
              </div>
              <div>
                <p className='pt-8 uppercase '>Let's connect</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/mubasharali-dev/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/mubasharali-dev'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href='mailto:mubashar.hashmat@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                      <AiOutlineMail />
                    </div>
                  </a>

                 
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form  action='https://formspree.io/f/mbjvdday' method='POST'>
                <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>Name</label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>
                      Phone Number
                    </label>
                    <input
                      className='flex p-3 border-2 border-gray-300 rounded-lg'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Email</label>
                  <input
                    className='flex p-3 border-2 border-gray-300 rounded-lg'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Subject</label>
                  <input
                    className='flex p-3 border-2 border-gray-300 rounded-lg'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Message</label>
                  <textarea
                    className='p-3 border-2 border-gray-300 rounded-lg'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 mt-4 text-gray-100'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
