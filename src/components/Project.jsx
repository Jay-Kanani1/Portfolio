import React from "react";
import newsApp from "../assets/NewsApp.png";

function Project() {
  const projects = [
    {
      id: 1,
      src: newsApp,
      demo: "https://text-utils-one-beta.vercel.app/",
      code: "https://github.com/Jay-Kanani1/Text-Utils",
    },
    {
      id: 2,
      src: newsApp,
      demo: "https://text-utils-one-beta.vercel.app/",
      code: "https://github.com/Jay-Kanani1/Text-Utils",
    },
    {
      id: 3,
      src: newsApp,
      demo: "https://text-utils-one-beta.vercel.app/",
      code: "https://github.com/Jay-Kanani1/Text-Utils",
    },
    {
      id: 4,
      src: newsApp,
      demo: "https://text-utils-one-beta.vercel.app/",
      code: "https://github.com/Jay-Kanani1/Text-Utils",
    },
    {
      id: 5,
      src: newsApp,
      demo: "https://text-utils-one-beta.vercel.app/",
      code: "https://github.com/Jay-Kanani1/Text-Utils",
    },
    {
      id: 6,
      src: newsApp,
      demo: "https://text-utils-one-beta.vercel.app/",
      code: "https://github.com/Jay-Kanani1/Text-Utils",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" p-4 mx-auto max-w-[1240px] flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#54b3d6] bg-clip-text">
            Projects
          </p>
          <p className="py-6 text-2xl text-gray-400">
            These are some of my project work:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg duration-300 hover:scale-105"
            >
              <img src={newsApp} alt="" className="rounded-lg" />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer" className="one">
                  <button className="w-1/2 px-6 py-3 m-4   duration-500 hover:underline hover:underline-offset-8 hover:text-[#54b3d6] hover:decoration-4">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4   duration-500 hover:underline hover:underline-offset-8 hover:text-[#54b3d6] hover:decoration-4">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;