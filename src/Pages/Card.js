import React from "react";
import Portfolio from "../img/satyam.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white drop-shadow-2xl rounded-xl p-5">
        <div className="w-44 mx-auto shadow-2xl rounded-full drop-shadow-2xl ">
          <img
            className="w-44 mx-auto drop-shadow-2xl rounded-full "
            src={Portfolio}
            alt="Portfolio"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl font-bold sm:text-2xl text-gray-900">
            Satyam Kumar
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Full Stack Developer
          </p>
        </div>
        <div className="flex align-center justify-center mt-4">
          <a
            className="text-xl m-1 p-1 sm:m-2 text-gray-800 hover:bg-gray-900 rounded-full hover:text-white transition duration-700 ease-in-out"
            href="https://github.com/satyamkumar420">
            <FaGithub />
            <span className="sr-only">Github</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 text-blue-800 hover:bg-blue-900 rounded-full hover:text-white transition duration-700 ease-in-out"
            href="https://twitter.com/SatyaG53746875">
            <FaTwitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 text-blue-800 hover:bg-blue-900 rounded-full hover:text-white transition duration-700 ease-in-out"
            href="https://www.linkedin.com/in/satyam-kumar-3b71aa205/">
            <FaLinkedin />
            <span className="sr-only">Linkedin</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 text-red-800 hover:bg-red-900 rounded-full hover:text-white transition duration-700 ease-in-out"
            href="mailto:me.satyamkumar2460@gmail.com?subject=Mail from Our Site">
            <GrMail />
            <span className="sr-only">Gmail</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
