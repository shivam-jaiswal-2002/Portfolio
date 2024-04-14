import { useState, useEffect } from 'react';
import Image from 'next/image';
import Picture from "../../../public/dp4.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";
import { Slide } from 'react-awesome-reveal';
const MeL = () => {
  const [displayText, setDisplayText] = useState("Hello, I am a ");
  const [isDeveloper, setIsDeveloper] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDeveloper((prevIsDeveloper) => !prevIsDeveloper);
    }, 3000); // Change the duration as needed (milliseconds)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = isDeveloper ? "Next.js Developer" : "Student";
    const fullText = "Hello, I am a " + text;
    let currentIndex = 14;

    const typingAnimation = setInterval(() => {
      setDisplayText(fullText.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) {
        clearInterval(typingAnimation);
      }
    }, 100); // Change the typing speed as needed (milliseconds)

    return () => clearInterval(typingAnimation);
  }, [isDeveloper]);

  return (
    <div className="lg:flex lg:flex-col lg:max-w-5xl lg:mx-auto px-4 sm:px-6 lg:px-2 py-12 lg:justify-between">
      {/* Left Div */}
      <Slide direction="left" triggerOnce duration={1000} fraction={0.4}>
      <div className="lg:w-1/2 sm:w-full">
        {/* Displaying the image */}
        <div className="lg:relative lg:rounded-full lg:overflow-hidden mb-10"> {/* Set a fixed size for the container */}
          <Image src={Picture} alt="My Profile Picture" width={500} height={500} className="rounded-lg" />
        </div>
      </div>

      <div className="lg:flex lg:justify-center lg:items-center lg:w-1/2 sm:flex lg:p-1 flex flex-col">
        <div className="flex mb-4 mx-auto">
          <a href="https://github.com/shivam-jaiswal-2002" target='_blank' className="mr-3"><FaGithub color="white" size={30} /></a>
          <a href="https://www.instagram.com/jais_shivam_/" target='_blank' className="mr-3"><FaInstagram color="white" size={30} /></a>
          <a href="https://linkedin.com/in/shivam-jaiswal-779554232" target='_blank'><FaLinkedin color="white" size={30} /></a>
          <a href="https://www.codingninjas.com/studio/profile/shivam_2002" target='_blank' className='ml-3 mt-1'><SiCodingninjas color="white" size={25} /></a>

        </div>

   
      </div>
      
      <div className='ml-20 pl-4'>
      <a href="https://drive.google.com/file/d/1sHWJ0guJCNTBxckJOxrLUUc1U5XYqhQc/view?usp=sharing" target='_blank'>
          <div className='mx-auto border border-gray-400 inline-block p-2 text-xl bg-white hover:bg-black text-black hover:text-white font-serif '>
            Resume
          </div>
      </a>
      </div>
      </Slide>
    </div>
  );
};

export default MeL;
