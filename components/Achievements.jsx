import React from "react";
import Achievement from "./Achievement";
import a1 from '../public/achievements/iupc.jpg';
import a2 from '../public/achievements/cpc.jpg';
import iupc from '../public/achievements/iupc-ambassador.jpg';
import cpc from '../public/achievements/cpc-ambassador.jpg';
import aicp from '../public/achievements/aicp.jpg';
import aicpAmbassador from '../public/achievements/campus-manager.jpg';
import aicpDirector from '../public/achievements/director-marketing.jpg';
import ueit from '../public/achievements/ueit.jpg';
import UeitHead from '../public/achievements/ueit-head.jpg';


const Achievements = () => {
  return (
    <>
    <div id='acheivements' className='w-full pt-20'>
                <div className='max-w-[1240px] mx-auto px-2 w-full py-16'>
                    <p className='uppercase tracking-widest text-[#5651e5] text-xl'>
                        Achievements & Awards
                    </p>
                    <h2 className='py-4'>My Extra-curricular activities</h2>
                </div>  
            </div>
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap justify-center sm:space-x-4">
        <Achievement
          image={a1}
          title="Coding Ambassador"
          communityName="Inter Universities Programming Challenge"
          ambassadorImage = {iupc}
          description={
            <ul>
              <li>
              Successfully organized and facilitated a coding competition that attracted participation from over 100 students.
              </li>
              <br/>
              <li>
              - Played a pivotal role in expanding the community, attracting and welcoming over 200 new students to the challenge.
      </li>
              <li>
              - Actively promoted the programming challenge, resulting in a 30% increase in participation compared to the previous year.

              </li>
              <li>
              - Provided guidance and support to 50+ students, aiding them in enhancing their programming proficiency and problem-solving abilities.
      </li>
            </ul>
          }
                    />
        <Achievement
  image={a2}
  title="Campus Ambassador"
  communityName="Connected Pakistan"
  ambassadorImage={cpc}
  description={
    <ul>
      <li>
      I was responsible for promoting Connected Pakistan at my university and encouraging students to get involved. I was also responsible for organizing events and activities on campus to connect students with the tech community.
      </li>
      <br/>
      <li>
      - I got the honour of registering the official chapter of Connected Pakistan at university.      </li>
      <li>
      - I gave presentations about Connected Pakistan to 100+ students. 
      </li>
      <li>
      - Distributed information to 300+ students, and organized workshops that attracted 50+ students each.      </li>
      <li>
      - More than 150 students participated in Connected Pakistan Conference(2022-23) under my supervision.      </li>
      <li>
      - I also helped to connect students with opportunities in the tech industry by connecting 20+ students with mentors and internships.      </li>
    </ul>
  }
/>

          <Achievement
          image={aicp}
          title="Campus Manager"
            communityName="AI Community of Pakistan"
            ambassadorImage = {aicpAmbassador}
            description={
                <ul>
                  <li>
                  AI Community Pakistan aimed to establish a strong presence within university, creating opportunities for students to engage with AI concepts outside of their regular course-work.                  </li>
                  <br/>
                  <li>
                  - Took the lead in promoting AI education, organizing events, and driving student involvement within university.      </li>
                  <li>
                  - Raised awareness of AI within university, leading to a 25% increase in student recognition of the community.                  </li>
                  <li>
                  - Partnered with 2+ student socities for collaborative events, resulting in a 40% increase in event attendance.
    </li>
                  <li>
                  - Appointed as Assistant director of Marketing on performing outstanding for AICP cause.    </li>
                </ul>
              }
          />
           <Achievement
          image={aicp}
          title="Director Marketing & PR"
            communityName="AI Community of Pakistan"
            ambassadorImage = {aicpDirector}
            description={
                <ul>
                  <li>
                  I played a pivotal role in driving strategic initiatives and fostering growth within the non-profit AI community through efficient marketing.                  </li>
                  <br/>
                  <li>
                  - Successfully partnered with 40+ universities of Pakistan through on campus and off campus marketing compaigns.     </li>
                  <li>
                  - Saw a 40% rise in social media engagement over six months.     </li>
                  <li>
                  - Experienced a 25% increase in brand recognition within the tech community due to partnerships.     </li>
                  <li>
                  - Sponsered the "RUNG" event of "FAST Univeristy" and 1000+ students participated through marketing.                  </li>
                  <li>
                  - 2000+ students from different universities participated in "Python Career Trainers" certification conducted by AICP.      </li>
                </ul>
              }
          />
           <Achievement
          image={ueit}
          title="Management Team Head"
            communityName="UE IT Society"
            ambassadorImage = {UeitHead}
            description={
                <ul>
                  <li>
                  UE_IT_Society is a University of Education society whose purpose is to close the gap between the working world and UE students (particularly IT/CS students) by providing them with the skills that the market demands.                  </li>
                  <br/>
                  <li>
                  - Mentored a team of 15+ students to become Management Heads in future and make an impact.      </li>
                  <li>
                  - Successfully attracted 100+ participants across each 20+ events, achieving a 95% satisfaction rate based on post-event surveys.                  </li>
                  <li>
                  - Increased a 40% growth in event participation, with average event attendance increasing from 70-100 attendees.    </li>
                  <li>
                  - Oversee 3 major technical sessions where 500+ students participated in each.     </li>
                </ul>
              }
          />
      </div>
    </div>
          </>
  );
};

export default Achievements;
