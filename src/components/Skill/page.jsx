"use client";
import { useState, useEffect } from "react";
import { FaJava, FaReact } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiCss3, SiExpress, SiSpringboot } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const starsCount = 5;
const stars = [];

for (let i = 0; i < starsCount; i++) {
  stars.push(<IoStarSharp key={i} />);
}
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
    <div id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-2 py-12 justify-between">
      {/* Left Div */}
      <div className="flex justify-center items-center w-1/2">
        <div className="relative circle">
          {skills.map((skill, index) => (
            <Skill key={index} icon={skill.icon} name={skill.name} angle={angle + index * (360 / skills.length)} />
          ))}
        </div>
      </div>
    
    </div>
  );
};



const Skill = ({ icon, name, angle }) => {
  const radius = 220; // Adjust the radius of the circle as needed

  const positionX = radius * Math.cos((angle * Math.PI) / 180);
  const positionY = radius * Math.sin((angle * Math.PI) / 180);

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