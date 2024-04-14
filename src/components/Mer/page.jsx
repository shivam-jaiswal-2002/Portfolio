"use client";
import { useState, useEffect } from 'react';
import { Slide } from 'react-awesome-reveal';


const MeR = () => {
  const [displayText, setDisplayText] = useState("Hello, I am a ");
  const [isDeveloper, setIsDeveloper] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDeveloper((prevIsDeveloper) => !prevIsDeveloper);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = isDeveloper ? "Next.js Developer" : "Student";
    const fullText = "Hey there, I am a " + text;
    let currentIndex = 14;
 
    const typingAnimation = setInterval(() => {
      setDisplayText(fullText.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) {
        clearInterval(typingAnimation);
      }
    }, 100);

    return () => clearInterval(typingAnimation);
  }, [isDeveloper]);

  return (
    <div className="">

        {/* Right Div */}
        <Slide direction="right" triggerOnce duration={1000} fraction={0.4}>
        <div className="lg:flex flex-col justify-center items-center">
          {/* About Me content */}
          <div className='font-serif text-6xl ml-10 pl-3'>Shivam Jaiswal</div>
          <div>
            <h2 className="text-3xl items-center text-center mt-10 font-bold h-24">{displayText}</h2>
          </div>
        </div>
        </Slide>
    </div>
  );
};

export default MeR;
