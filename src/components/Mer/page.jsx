"use client";
import { useState, useEffect } from 'react';


const MeR = () => {
  const [displayText, setDisplayText] = useState("Hello, I am a ");
  const [isDeveloper, setIsDeveloper] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDeveloper((prevIsDeveloper) => !prevIsDeveloper);
    }, 2000); // Change the duration as needed (milliseconds)

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
    <div className="">

        {/* Right Div */}
        <div className="lg:flex flex-col justify-center items-center">
          {/* About Me content */}
          <div className='font-serif text-6xl ml-10'>Shivam Jaiswal</div>
          <div>
            <h2 className="text-3xl items-center text-center mt-10 font-bold">{displayText}</h2>
            {/* Add more about me content here */}
          </div>
        </div>
    </div>
  );
};

export default MeR;
