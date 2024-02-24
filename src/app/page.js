"use client";
import MeL from "@/components/MeL/page";
import MeR from "@/components/Mer/page";
import Skill from "@/components/Skill/page";
import Image from "next/image";
import SkillName from "@/components/Skill/SkillName/page";
import { Link, animateScroll as scroll } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import VisibilitySensor from "react-visibility-sensor";
import Projects from "@/components/Projects/page";
import Certifications from "@/components/Certifications/page";
export default function Home() {
  return (
    <main
      id="myself"
      className="font-serif bg flex min-h-screen flex-col m-7 justify-between p-24"
    >
      {/* Myself Page */}
      <div className="flex">
        <div className="w-1/2">
          <MeL />
        </div>
        <div className="w-1/2 my-auto">
          <MeR />
        </div>
      </div>

      {/* Skills and SkillName Pages */}
      <div id="skills" className="flex mt-40 pt-40">
        <div className="w-1/2 m-auto">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
              <Fade bottom when={isVisible}>
                <Skill/>
              </Fade>
            }
          </VisibilitySensor>
        </div>
        
        <div className="w-1/2">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
              <Fade bottom when={isVisible}>
                <div className="flex justify-end">
                  <SkillName/>
                </div>
              </Fade>
            }
          </VisibilitySensor>
        </div>
      </div>

      <div className="mt-40 m-auto pt-40">
        <Projects />
      </div>

      <Certifications/>
    </main>
  );
}
