import React from 'react';
import Reveal from 'react-awesome-reveal';
import CertificateBox from '@/components/CertificateBox/page';
import MS from '../../../public/microsoft.png';
import Java from '../../../public/JAVA_HACKERRANK.png';
import PS from '../../../public/PS.png';
import JAVAC from '../../../public/JAVA.png';
import CPP from '../../../public/CPP.png';
import SQL from '../../../public/SQL.png';

const Certifications = () => {
  const certifications = [
    { name: "Microsoft SC-900 ", image: MS , link: "https://drive.google.com/file/d/1GlzmAVAJUCca7pSyxsR4r8ViQ4mAXNtD/view?usp=sharing"},
    { name: "Java Tutorial IIT Bombay", image: JAVAC ,link: "https://drive.google.com/file/d/1mDutI1U5RrTE8hDydhbQ-3rKaHZXmAZI/view?usp=sharing"},
    { name: "CPP Tutorial IIT Bombay", image: CPP, link: "https://drive.google.com/file/d/1qYqm1qksA022485a9SqO24_VYDN8_sTX/view?usp=sharing" },
    { name: "Php and Mysql Tutorial IIT Bombay", image: SQL, link: "https://drive.google.com/file/d/12bw_WKoIwaoai7glO0ghnAQJnEfch_US/view?usp=sharing"},
    { name: "Java HackerRank", image: Java , link: "https://drive.google.com/file/d/1ucfzoyy7blD6c4aCO09W64WFX5o9gJKl/view?usp=sharing"},
    { name: "Problem Solving HackerRank", image: PS, link: "https://drive.google.com/file/d/1RnvsGUptORy3lCEU7lPiQveQM05vjH7L/view?usp=sharing"},
  ];

  return (
    <div id="certifications" className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-2 py-12">
      <h2 className="text-5xl font-bold mb-4 text-center">Certificates</h2>
      <hr />
      <div className="grid mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {certifications.map((certification, index) => (
          <Reveal key={index} triggerOnce direction={getDirection(index)} duration={1000}>
            <CertificateBox name={certification.name} image={certification.image} link={certification.link} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

// Function to determine slide direction based on index
const getDirection = (index) => {
  switch (index) {
    case 0: // First certificate, slide in from left
      return 'left';
    case 1: // Second certificate, slide in from top
      return 'top';
    case 2: // Third certificate, slide in from right
      return 'right';
    case 3: // Fourth certificate, slide in from left
      return 'left';
    case 4: // Fifth certificate, slide in from bottom
      return 'bottom';
    case 5: // Sixth certificate, slide in from right
      return 'right';
    default:
      return 'left'; // Default to left if index is out of range
  }
};

export default Certifications;
