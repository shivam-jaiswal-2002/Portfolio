"use client";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-2 py-12">
      <div className="grid grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="flex items-center">
          <img src="/path_to_your_image" alt="Project 1" className="w-24 h-24 rounded-full" />
        </div>
        <div className="border border-gray-300 p-5">
          <h2 className="text-xl font-semibold">Emotion Detection Music System</h2>
          <p className="text-gray-400 mb-4">Developed a real-time facial expression recognition system to create personalized playlist based on mood.</p>
          <p className="text-gray-400">Technologies Used:</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Python libraries including MediaPipe, Numpy, Tensorflow, and Streamlit</li>
            <li>CV2 and NUMPY libraries for precise data training</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="flex items-center">
          <img src="/path_to_your_image" alt="Project 2" className="w-24 h-24 rounded-full" />
        </div>
        <div className="border border-gray-300 p-5">
          <h2 className="text-xl font-semibold">Smart Parking System</h2>
          <p className="text-gray-400 mb-4">Streamlined the automated monitoring of accessible parking slots by employing ultrasonic sensors.</p>
          <p className="text-gray-400">Technologies Used:</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Firebase, Arduino UNO, and Ultrasonic sensors</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="flex items-center">
          <img src="/path_to_your_image" alt="Project 3" className="w-24 h-24 rounded-full" />
        </div>
        <div className="border border-gray-300 p-5">
          <h2 className="text-xl font-semibold">Wine Quality Prediction</h2>
          <p className="text-gray-400 mb-4">Employed machine learning algorithms to forecast wine quality, leveraging physicochemical factors.</p>
          <p className="text-gray-400">Technologies Used:</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Decision Tree, Bagging, XgBoost, and AdaBoost</li>
          </ul>
        </div>

        {/* Project 4 */}
        <div className="flex items-center">
          <img src="/path_to_your_image" alt="Project 4" className="w-24 h-24 rounded-full" />
        </div>
        <div className="border border-gray-300 p-5">
          <h2 className="text-xl font-semibold">Generative AI based Post Recommendation System</h2>
          <p className="text-gray-400 mb-4">Created a Post Recommender System using GPT-3.5 Turbo and Langchain.</p>
          <p className="text-gray-400">Technologies Used:</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>OpenAI's GPT-3.5 Turbo and Langchain</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
