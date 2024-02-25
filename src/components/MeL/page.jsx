import { useState, useEffect } from 'react';
import Image from 'next/image';
import Picture from "../../../public/dp2.jpg";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
      <div className="lg:w-1/2 sm:w-full">
        {/* Displaying the image */}
        <div className="lg:relative lg:rounded-full lg:overflow-hidden mb-10"> {/* Set a fixed size for the container */}
          <Image src={Picture} alt="My Profile Picture" width={500} height={500} className="rounded-lg" />
        </div>
      </div>

      <div className="lg:flex lg:justify-center lg:items-center lg:w-1/2 sm:flex lg:p-1 flex flex-col">
        <div className="flex mb-4 mx-auto">
          <a href="https://github.com/shivam-jaiswal-2002" className="mr-3"><FaGithub color="white" size={30} /></a>
          <a href="https://www.instagram.com/jais_shivam_/" className="mr-3"><FaInstagram color="white" size={30} /></a>
          <a href="https://linkedin.com/in/shivam-jaiswal-779554232"><FaLinkedin color="white" size={30} /></a>
        </div>
      </div>
    </div>
  );
};

export default MeL;
