"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Picture from "../../../public/dp_final.jpeg";

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-2 py-12 justify-between">
        {/* Left Div */}
        <div className="flex justify-center items-center w-1/2">
          {/* Displaying the image */}
          <div className="relative rounded-full overflow-hidden"> {/* Set a fixed size for the container */}
            <Image src={Picture} alt="My Profile Picture" width={500} height={500} className="rounded-lg" />
          </div>
        </div>

    </div>
  );
};

export default MeL;
