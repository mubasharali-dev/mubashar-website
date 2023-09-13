import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import mypic from '../public/projects/mubashar.jpg'

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/movieapp' ||
      router.asPath === '/fypms' ||
      router.asPath === '/mesha' ||
      router.asPath === '/ecommerce'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed shadow-xl z-[100] w-full h-20'
          : 'fixed  z-[100] w-full h-20'
      }
    >
      <div className='flex items-center justify-between w-full h-full px-6 2xl:px-16'>
        <Link href='/'>
          <Image
            alt='mypic'
            src={mypic}
            width='40'
            height='40'
            className='cursor-pointer rounded-full'
          />
        </Link>
        <div>
  <ul className='hidden md:flex'>
    <Link href='/'>
      <li className='ml-10 text-sm uppercase hover:border-b-2 border-b-blue-400'>Home</li>
    </Link>
    <Link href='/#about'>
      <li className='ml-10 text-sm uppercase hover:border-b-2 border-b-blue-400'>About</li>
    </Link>
    <Link href='/#projects'>
      <li className='ml-10 text-sm uppercase hover:border-b-2 border-b-blue-400'>Projects</li>
    </Link>
    <Link href='/#skills'>
      <li className='ml-10 text-sm uppercase hover:border-b-2 border-b-blue-400'>Skills</li>
    </Link>
    <Link href='/#certifications'>
      <li className='ml-10 text-sm uppercase hover:border-b-2 border-b-blue-400'>Certifications</li>
    </Link>
    <Link href='/#acheivements'>
      <li className='ml-10 text-sm uppercase hover:border-b-2 border-b-blue-400'>Achievements</li>
    </Link>
  </ul>
  <div className='md:hidden' onClick={handleNav}>
    <AiOutlineMenu size={25} />
  </div>
</div>

      </div>
      <div
        className={
          nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed top-0 left-0 w-[75%] sm:[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed top-0 left-[-100%]  p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex items-center justify-between w-full'>
              <Link href='/'>
                <Image
                  alt='mypic'
                  src={mypic}
                  width='40'
                  height='40'
                  className='cursor-pointer rounded-full'
                />
              </Link>

              <div
                className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='my-4 border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] font-bold'>
                Let&apos;s solve your problem together
              </p>
            </div>
          </div>

          <div className='flex flex-col py-4'>
            <ul
              style={{ color: `${linkColor}` }}
              className='font-semibold uppercase'
            >
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-xs'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-xs'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-xs'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-xs'>
                  Projects
                </li>
              </Link>
              <Link href='/#certifications'>
                <li onClick={() => setNav(false)} className='py-4 text-xs'>
                  Certifications
                </li>
              </Link>
              <Link href='/#acheivements'>
                <li onClick={() => setNav(false)} className='py-4 text-xs'>
                  Achievements
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='font-bold tracking-widest uppercase text-[#5651e5] '>
                Let&apos;s talk
              </p>
              <div className='flex items-center justify-between w-full my-4 sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/mubasharali-dev/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <FaLinkedinIn color='blue' />
                  </div>
                </a>
                <a
                  href='https://github.com/mubasharali-dev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <FaGithub color='black' />
                  </div>
                </a>

                <a
                  href='mailto:mubashar.hashmat@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <AiOutlineMail color='black' />
                  </div>
                </a>

                <div className='p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                  <BsFillPersonLinesFill color='black' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
