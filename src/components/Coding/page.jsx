import { SiCodingninjas, SiHackerrank } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import VisibilitySensor from "react-visibility-sensor";
import { Fade, Slide } from "react-awesome-reveal";

const CodingProfile = () => {
  return (
    <div id="codingprofile" className="mb-8 mt-20 pt-20">
      <h2 className="text-4xl font-semibold mb-4 items-center text-center">
        Coding Profile
      </h2>
      <div className="flex flex-wrap justify-around shadow-blue-600">
        {/* Coding Ninjas */}
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade bottom when={isVisible}>
              <div className="lg:flex mt-20 lg:my-20 lg:justify-evenly shadow-blue-600">
                <Slide direction="top-left" triggerOnce duration={1000} fraction={0.4}>
                  <a
                    href="https://www.codingninjas.com/studio/profile/shivam_2002"
                    target="_blank"
                  >
                    <div className="hover:bg-yellow-300 border hover:shadow-blue-600 border-gray-300 px-10 py-6 w-70 hover:text-black rounded-lg flex flex-col items-center mb-4 mr-4">
                      <SiCodingninjas size={100}/>
                      <div className="hover:text-black">
                        <p className=" mt-3">Coding Ninjas</p>
                        <p className="">EXP: 20,467</p>
                      </div>                
                    </div>
                  </a>
                </Slide>
              </div>
            </Fade>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Fade bottom when={isVisible}>
              <div className="lg:flex mt-30 lg:my-20 lg:justify-evenly">
                <Slide direction="top-right" triggerOnce duration={1000} fraction={0.4}>
                  <a
                    href="https://www.hackerrank.com/profile/shiv2002am"
                    target="_blank"
                  >
                    {/* HackerRank - Java */}
                    <div className="hover:bg-yellow-300 hover:text-black border border-gray-300 p-6 rounded-lg flex flex-col items-center mb-4 mr-4">
                      <SiHackerrank size={100} />
                      <p className=" mt-3">HackerRank - Java</p>
                      <div className="flex mt-1 hover:text-black">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                          
                          />
                        ))}
                      </div>
                    </div>
                  </a>
                </Slide>
              </div>
            </Fade>
          )}
        </VisibilitySensor>
      </div>

      <div className=" flex flex-wrap justify-around">
        <a href="https://www.hackerrank.com/profile/shiv2002am" target="_blank">
          {/* HackerRank - C++ */}
          <Slide direction="bottom-left" triggerOnce duration={1000} fraction={0.4}>
            <div className="hover:bg-yellow-300 hover:text-black border border-gray-300 p-6 rounded-lg flex flex-col items-center mb-4 mr-4">
              <SiHackerrank size={100} />
              <p className=" mt-3">HackerRank - C++</p>
              <div className="flex mt-1">
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            </div>
          </Slide>
        </a>

        <a href="https://www.hackerrank.com/profile/shiv2002am" target="_blank">
          <Slide direction="bottom-right" triggerOnce duration={1000} fraction={0.4}>
            <div className="hover:bg-yellow-300 hover:text-black border border-gray-300 p-6 rounded-lg flex flex-col items-center mb-4 mr-4">
              <SiHackerrank size={100} />
              <p className=" mt-3">HackerRank - Python</p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index}  />
                ))}
              </div>
            </div>
          </Slide>
        </a>
        {/* HackerRank - Python */}
      </div>
    </div>
  );
};

export default CodingProfile;
