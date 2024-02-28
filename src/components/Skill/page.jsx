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

const Skills = () => {
  const skills = [
    { icon: <FaJava size={50} /> ,  name:"Java"},
    { icon: <TbBrandCpp size={50}  />, name:"CPP" },
    { icon: <FaPython size={50} />,name:"Python" },
    { icon: <FaHtml5 size={50}  />, name:"Html" },
    { icon: <SiCss3 size={50} />, name:"Css" },
    { icon: <FaReact size={50}  /> , name:"Reactjs"},
    { icon: <TbBrandNextjs size={50} /> , name:"NextJs"},
    { icon: <SiExpress size={50} /> ,name:"Express"},
    { icon: <SiSpringboot size={50}  />, name:"Spring" },
  ];

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 1); // Increase the angle slowly
    }, 100); // Adjust the interval for smoother or faster rotation

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="skills" className="pt-10 lg:max-w-5xl lg:mx-auto lg:px-4 sm:px-2 sm:pt-20 sm:mt-20 lg:py-12 lg:justify-between">
      {/* Left Div */}
      <div className="lg:flex justify-center items-center lg:w-1/2">
        <div className="relative sm:ml-0 circle">
          {skills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} angle={angle + index * (360 / skills.length)} />
          ))}
        </div>
      </div>
    </div>
  );
};


const Skill = ({ icon, name, angle }) => {
  const defaultRadius = 220; // Default radius for larger devices
  const smallScreenRadius = 150; // Adjust the radius for smaller devices as needed

  // Media query to check for smaller devices
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed

  // Use the appropriate radius based on the screen size
  const adjustedRadius = isSmallScreen ? smallScreenRadius : defaultRadius;

  // Calculate position based on the adjusted radius
  const positionX = adjustedRadius * Math.cos((angle * Math.PI) / 180);
  const positionY = adjustedRadius * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className="skill"
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