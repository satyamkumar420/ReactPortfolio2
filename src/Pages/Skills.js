import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiDjango,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";
import { DiHtml5, DiCss3, DiMysql, DiPython } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { BsGithub, BsBootstrapFill } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FcLinux } from "react-icons/fc";

const Skills = () => {
  return (
    <div className="mx-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl">Tech I Use</p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <DiHtml5 color="#DE3163" className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            HTML5
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <DiCss3 color=" #6495ED   " className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            CSS3
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <SiJavascript color=" #ffe646 " className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            JavaScript
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <FaReact color="#2196f3" className="mx-auto w-4/5 h-4/5 animation" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center  ">
            React
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <SiTailwindcss color="#2196f3" className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            Tailwind
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <DiMysql color="#2196f3" className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            MySQL
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <DiPython color=" #FFBF00 " className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            Python
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <SiDjango color=" #0c4b33 " className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            Django
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <BsBootstrapFill color=" #7952b3 " className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            Bootstrap
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <SiMongodb color=" #089617 " className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            MongoDB
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <BsGithub color=" #0d1117 " className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            Github
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <FaAws color=" #e8b246 " className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            AWS
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <IoLogoNodejs color=" #43853d " className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            NodeJS
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <FcLinux className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            Linux
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <SiHeroku color="#9263d9" className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            Heroku
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl hover:shadow-2xl rounded-xl sm:w-52 transition duration-700 ease-in-out hover:duration-700 hover:scale-110	">
          <SiNetlify color="#6ac3cc" className="mx-auto w-4/5 h-4/5 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
            Netlify
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
