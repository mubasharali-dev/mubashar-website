/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import P1 from '../public/projects/p1.PNG';
import P2 from '../public/projects/p2.PNG';
import P3 from '../public/projects/p3.PNG';
import P4 from '../public/projects/p4.PNG';
import ProjectItem from './ProjectItem';

const Projects = () =>{
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px]  mx-auto  px-2   py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>Work I have done</h2>
        <div className='grid gap-8 md:grid-cols-2'>
          <ProjectItem
            title='FYP Management System'
            url='/fypms'
            image={P2}
            skill='MERN'
          />
          <ProjectItem
            title='Cine Magestic - Movie App'
            url='/movieapp'
            skill='NextJs/TypeScript'
            image={P1}
          />
          <ProjectItem
            title='Cartsy Medicine - E Commerce App'
            url='/ecommerce'
            skill='ReactJs'
            image={P3}
          />
          <ProjectItem
            title='Mesha Accounting App'
            url='/mesha'
            skill='TypeScript'
            image={P4}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
