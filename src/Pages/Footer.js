import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          className="text-xl m-1 p-1 sm:m-2 text-gray-800 hover:bg-gray-900 rounded-full hover:text-white  duration-700 transition ease-in-out hover:scale-110"
          href="https://github.com/satyamkumar420">
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 text-blue-800 hover:bg-blue-900 rounded-full hover:text-white transition duration-700 ease-in-out hover:scale-110"
          href="https://twitter.com/SatyaG53746875">
          <FaTwitter />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 text-blue-800 hover:bg-blue-900 rounded-full hover:text-white transition duration-700 ease-in-out hover:scale-110"
          href="https://www.linkedin.com/in/satyam-kumar-3b71aa205/">
          <FaLinkedin />
          <span className="sr-only">Linkedin</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 text-red-800 hover:bg-red-900 rounded-full hover:text-white transition duration-700 ease-in-out hover:scale-110"
          href="mailto:satyamkumar2460@gmail.com">
          <GrMail />
          <span className="sr-only">Gmail</span>
        </a>
      </div>
      <div className="flex justify-center mt-4" id="tech">
        <p className="text-black mb-4 font-bold">
          Made With{" "}
          <span
            className="mr-2 animate-ping text-red-500 text-xl"
            role="link"
            aria-label="heart">
            ❤️
          </span>
          by{" "}
          <a
            href="mailto:me.satyamkumar2460@gmail.com"
            className="text-blue-800 hover:underline font-bold  hover:text-xl">
            Satya
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
