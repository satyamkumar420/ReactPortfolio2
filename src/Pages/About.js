import React from "react";
import { FaChevronDown } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black md:text-4xl font-bold text-center">
          🙋‍♂️ Hey
        </p>
        <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
          I'm a passionate 🔥Full Stack Developer🔥. I love creating content for
          people on my website.
        </p>

        <div className="my-12 p-9">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </div>
    </>
  );
};

export default About;
