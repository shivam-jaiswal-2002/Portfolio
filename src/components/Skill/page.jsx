"use client";
import { useState, useEffect } from "react";
import { FaJava, FaReact } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiCss3, SiExpress, SiSpringboot } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import useMediaQuery from '@mui/material/useMediaQuery'
import {Slide} from "react-awesome-reveal";

const Skills = () => {
  const skills = [
    { icon: <FaJava size={50} /> ,  name:"Java"},
    { icon: <TbBrandCpp size={50}  />, name:"CPP" },
    { icon: <FaPython size={50} />,name:"Python" },
    { icon: <FaHtml5 size={50}  />, name:"Html" },
    { icon: <SiCss3 size={50} />, name:"Css" },
    { icon: <FaReact size={50}  /> , name:"React.js"},
    { icon: <TbBrandNextjs size={50} /> , name:"Next.js"},
    { icon: <SiExpress size={50} /> ,name:"Express"},
    { icon: <SiSpringboot size={50}  />, name:"Spring" },
  ];

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 1);
    }, 100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="skills" className="pt-10 lg:max-w-5xl lg:mx-auto lg:px-4 sm:pt-20 sm:mt-20 lg:py-12 lg:justify-between">
      {/* Left Div */}
      <div className="lg:flex lg:justify-center lg:items-center lg:w-1/2">
      <Slide direction="left" triggerOnce duration={1000} fraction={0.4}>
        <div className="relative circle">
          {skills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} angle={angle + index * (360 / skills.length)} />
          ))}
        </div>
      </Slide>
      </div>
    </div>
  );
};


const Skill = ({ icon, name, angle }) => {
  const defaultRadius = 220; 
  const smallScreenRadius = 145;


  const isSmallScreen = useMediaQuery('(max-width: 768px)');


  const adjustedRadius = isSmallScreen ? smallScreenRadius : defaultRadius;


  const positionX = adjustedRadius * Math.cos((angle * Math.PI) / 180);
  const positionY = adjustedRadius * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className="skill lg:mt-20"
      style={{
        position: "flex flex-col",
        top: `calc(50% - ${positionY}px)`,
        left: `calc(50% + ${positionX}px)`,
      }}
    >
      <div className="">{icon}</div>
      <div>{name}</div>
    </div>
  );
};




export default Skills;