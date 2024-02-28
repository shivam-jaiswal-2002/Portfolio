import { SiCodingninjas, SiHackerrank } from "react-icons/si";
import { FaStar } from "react-icons/fa";

const CodingProfile = () => {
  return (
    <div id="codingprofile" className="mb-8 mt-20 pt-20">
      <h2 className="text-4xl font-semibold mb-4 items-center text-center">Coding Profile</h2>
      <div className="flex flex-wrap justify-around">
        {/* Coding Ninjas */}
        <a href="https://www.codingninjas.com/studio/profile/shivam_2002" target="_blank">
        <div className="border border-gray-300 p-8 w-50 rounded-lg flex flex-col items-center mb-4 mr-4">
          <SiCodingninjas size={100} />
          <p className="text-gray-600 mt-3">Coding Ninjas</p>
          <p className="text-gray-400">Rating: 20,467</p>
        </div>

        </a>

        <a href="https://www.hackerrank.com/profile/shiv2002am" target="_blank">
           {/* HackerRank - Java */}
        <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-center mb-4 mr-4">
          <SiHackerrank size={100} />
          <p className="text-gray-600 mt-3">HackerRank - Java</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color={index < 5 ? "#FFD700" : "#C4C4C4"} />
            ))}
          </div>
        </div>
        </a>
       
      </div>
      
      <div className="flex flex-wrap justify-around">
        <a href="https://www.hackerrank.com/profile/shiv2002am" target="_blank">
   {/* HackerRank - C++ */}
   <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-center mb-4 mr-4">
          <SiHackerrank size={100} />
          <p className="text-gray-600 mt-3">HackerRank - C++</p>
          <div className="flex mt-1">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} color={index < 4 ? "#FFD700" : "#C4C4C4"} />
            ))}
          </div>
        </div>
        </a>
     
          <a href="https://www.hackerrank.com/profile/shiv2002am" target="_blank">
          <div className="border border-gray-300 p-6 rounded-lg flex flex-col items-center mb-4 mr-4">
          <SiHackerrank size={100} />
          <p className="text-gray-600 mt-3">HackerRank - Python</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color={index < 5 ? "#FFD700" : "#C4C4C4"} />
            ))}
          </div>
        </div>
          </a>
        {/* HackerRank - Python */}
        
      </div>
    </div>
  );
};

export default CodingProfile;
