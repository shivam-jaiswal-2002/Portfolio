import React from 'react';
import Reveal from 'react-awesome-reveal';
import VisibilitySensor from 'react-visibility-sensor';
import Image from 'next/image';
import music from '../../../public/music.jpg';
import sensor from '../../../public/FOK7Z4EIWWFIP7Z.jpg';
import wine from '../../../public/wine.png';
import gpt from '../../../public/gpt.jpg';
import { Fade } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-5xl font-serif mx-auto px-4 sm:px-6 lg:px-2 py-12"
    >
      <div className="text-5xl text-center">Projects</div>
      <hr />
      <div className="grid lg:grid-cols-2 gap-8 mt-2">
        {/* Project 1 */}
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade triggerOnce direction="left" duration={1000} when={isVisible}>
              <div>
                <Image src={music} className="rounded-3xl" />
              </div>
            </Fade>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade triggerOnce direction="right" duration={1000} when={isVisible}>
              <div className="hover:bg-yellow-300 cursor-pointer hover:text-black">
                <div className="border border-gray-300 p-5 m-auto">
                  <h2 className="text-xl font-semibold">
                    Emotion Detection Music System
                  </h2>
                  <p className="text-gray-400 mb-4">
                    Developed a real-time facial expression recognition system
                    to create personalized playlist based on mood.
                  </p>
                  <p className="text-gray-400">Technologies Used:</p>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>
                      Python libraries including MediaPipe, Numpy, Tensorflow,
                      and Streamlit
                    </li>
                    <li>CV2 and NUMPY libraries for precise data training</li>
                  </ul>
                </div>
              </div>
            </Fade>
          )}
        </VisibilitySensor>

        {/* Project 2 */}
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade triggerOnce direction="left" duration={1000} when={isVisible}>
              <div>
                <Image src={sensor} height={300} className="rounded-3xl lg:ml-10" />
              </div>
            </Fade>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade triggerOnce direction="right" duration={1000} when={isVisible}>
              <div className="lg:mt-10 hover:bg-yellow-300 cursor-pointer hover:text-black">
                <div className="border border-gray-300 p-5 justify-center items-center m-auto">
                  <h2 className="text-xl font-semibold">Smart Parking System</h2>
                  <p className="text-gray-400 mb-4">
                    Streamlined the automated monitoring of accessible parking
                    slots by employing ultrasonic sensors.
                  </p>
                  <p className="text-gray-400">Technologies Used:</p>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>Firebase, Arduino UNO, and Ultrasonic sensors</li>
                  </ul>
                </div>
              </div>
            </Fade>
          )}
        </VisibilitySensor>

        {/* Project 3 */}
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade triggerOnce direction="left" duration={1000} when={isVisible}>
              <div>
                <Image src={wine} className="rounded-3xl" />
              </div>
            </Fade>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade triggerOnce direction="right" duration={1000} when={isVisible}>
              <div className="lg:mt-10 hover:bg-yellow-300 cursor-pointer hover:text-black">
                <div className="border border-gray-300 m-auto p-5">
                  <h2 className="text-xl font-semibold">Wine Quality Prediction</h2>
                  <p className="text-gray-400 mb-4">
                    Employed machine learning algorithms to forecast wine
                    quality, leveraging physicochemical factors.
                  </p>
                  <p className="text-gray-400">Technologies Used:</p>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>Decision Tree, Bagging, XgBoost, and AdaBoost</li>
                  </ul>
                </div>
              </div>
            </Fade>
          )}
        </VisibilitySensor>

        {/* Project 4 */}
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade triggerOnce direction="left" duration={1000} when={isVisible}>
              <div>
                <Image src={gpt} className="rounded-3xl" />
              </div>
            </Fade>
          )}
        </VisibilitySensor>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade triggerOnce direction="right" duration={1000} when={isVisible}>
              <div className="lg:mt-10 hover:bg-yellow-300 cursor-pointer hover:text-black">
                <div className="border border-gray-300 p-5 m-auto">
                  <h2 className="text-xl font-semibold">
                    Generative AI based Post Recommendation System
                  </h2>
                  <p className="text-gray-400 mb-4">
                    Created a Post Recommender System using GPT-3.5 Turbo and
                    Langchain.
                  </p>
                  <p className="text-gray-400">Technologies Used:</p>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>OpenAI's GPT-3.5 Turbo and Langchain</li>
                  </ul>
                </div>
              </div>
            </Fade>
          )}
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default Projects;
