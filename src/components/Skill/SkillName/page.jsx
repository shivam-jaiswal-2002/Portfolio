import React from "react";
import { Slide } from "react-awesome-reveal";

function page() {
  return (
    <div className="max-w-5xl lg:mt-20 px-4 items-center text-center lg:ml-20 sm:px-6 lg:px-2 py-12 justify-between">
           <Slide direction="right" triggerOnce duration={1000} fraction={0.4}>
      <div className="font-serif text-7xl sm:text-5xl mt-10 font-bold my-auto m-auto">
        SKILLS
      </div>
      </Slide>
    </div>
  );
}

export default page;
