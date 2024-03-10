import React from "react";
import { Fade } from "react-awesome-reveal";
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
  return (
    <div id="about" className="mt-20 mb-20 pt-20 pb-20">
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Fade bottom when={isVisible}>
            <div className="flex">
              <div className="w-1/2 font-serif text-6xl mt-10">About Me</div>
              <div className="w-1/2 font-serif text-2xl">
                Hey there!, I'm Shivam Jaiswal a passionate computer science
                enthusiast and an aspiring engineer on a journey through the
                exciting world of bits, bytes, and algorithms. Currently
                pursuing my degree in Computer Science and Engineering, I'm all
                about diving deep into the realms of technology, coding, and
                innovation. <br /> <br />
                Scroll down to know about me better
              </div>
            </div>
          </Fade>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default About;
