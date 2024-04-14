import React from 'react';
import Image from 'next/image';
import Reveal from 'react-awesome-reveal';
import VisibilitySensor from 'react-visibility-sensor';

const CertificateBox = ({ name, image, link }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Reveal
          cascade
          triggerOnce
          when={isVisible}
          keyframes={{ opacity: 0, transform: 'translateY(50px)' }}
          duration={800}
          delay={100}
        >
          <div className="bg-gray-400 hover:bg-yellow-100 active:bg focus:outline-none focus:ring focus:ring-violet-300 shadow-lg shadow-blue-600 rounded-lg p-4 flex sm:flex-col items-center justify-center">
            <div>
              <div className="mb-4">
                <a className="cursor-pointer" href={link} target="_blank" rel="noopener noreferrer">
                  <Image src={image} alt={name} layout="responsive" />
                </a>
              </div>
              <p className="text-lg font-bold text-black text-center">{name}</p>
            </div>
          </div>
        </Reveal>
      )}
    </VisibilitySensor>
  );
};

export default CertificateBox;
