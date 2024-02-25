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
import Contact from "@/components/Contact/page";
export default function Home() {
  return (
    <main
      id=""
      className="font-serif bg flex min-h-screen flex-col mb-0 m-7 lg:justify-between sm:justify-center lg:p-24 "
    >
      {/* Myself Page */}
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Fade bottom when={isVisible}>
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <MeL />
              </div>
              <div className="lg:w-1/2 lg:my-auto sm:justify-between sm:item-center">
                <MeR />
              </div>
            </div>
          </Fade>
        )}
      </VisibilitySensor>

      {/* Skills and SkillName Pages */}
      <div id="skills" className="lg:flex lg:mt-40 lg:pt-40 sm:ml-10 sm:p-20">
        <div className="lg:w-1/2 lg:m-auto sm:w-1 sm:ml-2 ">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Fade bottom when={isVisible}>
                <Skill />
              </Fade>
            )}
          </VisibilitySensor>
        </div>

        <div className="lg:w-1/2">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Fade bottom when={isVisible}>
                <div className="lg:flex lg:my-20 lg:justify-evenly">
                  <SkillName />
                </div>
              </Fade>
            )}
          </VisibilitySensor>
        </div>
      </div>

      <div className="mt-40 m-auto pt-40 flex flex-col">
        <div className="text-5xl text-center mb-2">Projects</div>
        <hr />
        <Projects />
      </div>

      <div>
        <Certifications />
      </div>


    </main>
  );
}
