import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <div id='skills' className='w-full p-2 lg:h-screen'>
      <div className='max-w=[1240px] h-full flex flex-col justify-center mx-auto'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I can do</h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* skill */}
          <Skill name='JavaScript' src='/../public/assets/js.png' />
          <Skill name='TypeScript' src='/../public/assets/ts.png' />
          <Skill name='React' src='/../public/assets/react.png' />
          <Skill name='Node.Js' src='/../public/assets/node.png' />
          <Skill name='Nest.Js' src='/../public/assets/nest.png' />
          <Skill name='Next.Js' src='/../public/assets/nextjs.png' />
          <Skill name='Docker' src='/../public/assets/docker.png' />
          <Skill name='Kubernetes' src='/../public/assets/kubernetes.png' />
          <Skill name='AWS' src='/../public/assets/aws.png' />
          <Skill name='GraphQL' src='/../public/assets/graphql.png' />
          <Skill name='Apollo' src='/../public/assets/Apollo.png' />
          <Skill name='Redux' src='/../public/assets/redux.png' />
          <Skill name='PostgreSQL' src='/../public/assets/postgres.png' />
          <Skill name='Redis' src='/../public/assets/redis.png' />
          <Skill name='MySQL' src='/../public/assets/mysql.png' />
          <Skill name='MongoDB' src='/../public/assets/mongo.png' />
          <Skill name='Github' src='/../public/assets/github1.png' />
          <Skill name='HTML' src='/../public/assets/html.png' />
          <Skill name='CSS' src='/../public/assets/css.png' />
          <Skill name='Tailwind CSS' src='/../public/assets/tailwind.png' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
