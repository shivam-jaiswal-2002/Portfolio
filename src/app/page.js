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
import CodingProfile from "@/components/Coding/page";
import About from "@/components/About/page";
export default function Home() {
  return (
    <main
      id=""
      className="font-serif bg flex min-h-screen flex-col mb-0 p-4 ml-4 lg:justify-between sm:justify-center lg:p-24 "
    >
      {/* Myself Page */}
      <div className="mb-40">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade bottom when={isVisible}>
              <div className="lg:flex md:mx-auto">
                <div className="lg:w-1/2 md:mx-auto">
                  <MeL />
                </div>
                <div className="lg:w-1/2 lg:my-auto sm:justify-center sm:item-center">
                  <MeR />
                </div>
              </div>
            </Fade>
          )}
        </VisibilitySensor>
      </div>
          
      <div className="">
          <About/>
      </div>
        
      <div className="mt-20 mb-20 lg:mx-auto">
        <div className="lg:flex">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Fade bottom when={isVisible}>
                <div className="lg:w-1/2">
                  <Skill />
                </div>
              </Fade>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Fade bottom when={isVisible}>
                <div className="lg:w-1/2 lg:ml-40 lg:mt-40 lg:pt-5">
                  <SkillName />
                </div>
              </Fade>
            )}
          </VisibilitySensor>
        </div>
      </div>

      <div>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade bottom when={isVisible}>
              <div className="lg:flex mt-30 lg:my-20 lg:justify-evenly">
                <CodingProfile />
              </div>
            </Fade>
          )}
        </VisibilitySensor>
      </div>

      <div className="mt-40 m-auto pt-40 flex flex-col">
        
        <Projects />
      </div>

      <div>
        <Certifications />
      </div>
    </main>
  );
}
