import React from "react";
import { Slide } from "react-awesome-reveal";
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
  return (
    <div id="about" className="mt-20 mb-20 pt-20 pb-20">
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <Slide direction="left" triggerOnce duration={1000} fraction={0.4}>
                <div className="font-serif text-6xl mt-10 mb-5">About Me</div>
              </Slide>
            </div>
            <div className="lg:w-1/2">
              <Slide direction="right" triggerOnce duration={1000} fraction={0.4}>
                <div className="font-serif text-2xl sm:justify-evenly">
                  Hey there!, I'm Shivam Jaiswal a passionate computer science
                  enthusiast and an aspiring engineer on a journey through the
                  exciting world of bits, bytes, and algorithms. Currently
                  pursuing my degree in Computer Science and Engineering, I'm all
                  about diving deep into the realms of technology, coding, and
                  innovation. <br /> <br />
                  Scroll down to know about me better
                </div>
              </Slide>
            </div>
          </div>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default About;
