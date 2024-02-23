"use client";
import MeL from "@/components/MeL/page";
import MeR from "@/components/Mer/page";
import Skill from "@/components/Skill/page";
import Image from "next/image";
import SkillName from "@/components/Skill/SkillName/page";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from 'react-reveal/Fade';
import VisibilitySensor from 'react-visibility-sensor';
import Projects from "@/components/Projects/page";
export default function Home() {
  return (
    
    <main id="myself" className="font-serif bg flex min-h-screen flex-col m-7 justify-between p-24">
      {/* Myself Page */}
      <div  className="flex">
        <div className="w-1/2">
        <MeL/>

        </div>
        <div className="w-1/2 my-auto">
        <MeR/>
          
        </div>
      </div>



      {/* Skills Page */}
      <div id="skills" className="flex mt-40 pt-40">
  <VisibilitySensor partialVisibility>
    {({ isVisible }) =>
      <Fade bottom when={isVisible}>
        <div className="w-1/2 item-center">
          <Skill/>
        </div>
        <div className="w-1/2 flex my-auto justify-end">
          <SkillName/>
        </div>
      </Fade>
    }
  </VisibilitySensor>
</div>

<div className="mt-40 m-auto pt-40">
  <Projects/>
</div>
    </main>
  );
}