import React from "react";
import bootstrap from "../assets/Bootstrap_logo.svg.png";
import git from "../assets/Git-logo.png";
import github from "../assets/GitHub-logo.png";
import css from "../assets/css-logo.webp";
import html from "../assets/html5-logo.png";
import javascript from "../assets/javascript-logo.png";
import mongo from "../assets/mongo-db-logo.png";
import node from "../assets/nodejs-logo.png";
import react from "../assets/reactjs-logo.png";
import tailwind from "../assets/tailwind-logo.png";
import windows from "../assets/windows-logo.png";

function Skill() {
  const skills = [
    {
      id: 1,
      src: react,
      name: "React JS",
      style: "shadow-sky-500",
    },
    {
      id: 2,
      src: javascript,
      name: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: css,
      name: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: html,
      name: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: node,
      name: "Node JS",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: bootstrap,
      name: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: tailwind,
      name: "Tailwind CSS",
      style: "shadow-cyan-500",
    },
    {
      id: 8,
      src: mongo,
      name: "Mongo DB",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: git,
      name: "Git",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: github,
      name: "Github",
      style: "shadow-white",
    },
    {
      id: 11,
      src: windows,
      name: "Windows",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full  text-white md:h-screen"
    >
      <div className="p-4 mx-auto max-w-[1240px] flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#54b3d6] bg-clip-text">
            Skills
          </p>
          <p className="py-6 text-2xl text-gray-400">
            I have worked with these Technologies
          </p>
        </div>

        <div className="w-full text-center py-8 grid sm:grid-cols-3 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {skills.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
