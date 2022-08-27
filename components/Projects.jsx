/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Project1 from '../public/projects/project1.jpg';
import Project2 from '../public/projects/project2.jpg';
import Project3 from '../public/projects/project3.png';
import Project4 from '../public/projects/project4.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px]  mx-auto  px-2   py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>

        <h2 className='py-4'>What I've Built</h2>
        <div className='grid gap-8 md:grid-cols-2'>
          <ProjectItem
            title='Jobify'
            url='/jobify'
            skill='MERN'
            image={Project1}
          />
          <ProjectItem
            title='Avenue Realty App'
            url='/avenue'
            image={Project2}
            skill='NESTJS'
          />
          <ProjectItem
            title='Crowdly'
            url='/crowdly'
            skill='GraphQL'
            image={Project3}
          />
          <ProjectItem
            title='EShoppers'
            url='/eshoppers'
            skill='MERN'
            image={Project4}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
