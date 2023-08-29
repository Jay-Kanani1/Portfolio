import React from "react";
// import MdOutlineKeyboardArrowRight from FaReact
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import resume from "../assets/Resume.pdf";
import Typed from "typed.js";
import bg from "../assets/home-bg.png";

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi, My name is Jay Kanani and I am a passionate Full-Stack developer",
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex-col items-center h-full px-4  grid md:grid-cols-3  justify-center">
        <div className="flex flex-col justify-center h-full col-span-2">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#54b3d6]">
            <span ref={el} />
          </h2>
          <p className="text-gray-400 my-5 font-medium md:text-lg">
            I really enjoy to creating and deploying responsive and dynamic web
            applications. Able to develop end-to-end solutions that combine
            clear user interfaces with powerful server-side functionality.
            Fluent in both front-end and back-end technologies.kept up of new
            web development trends while implementing best practices to provide
            cutting-edge and creative solutions.
          </p>

          <div>
            <button className="text-white  px-6 py-3 my-2 mx-auto flex item-center rounded-md bg-gradient-to-r from-[#54b3d6] to-blue-500 cursor-pointer hover:scale-110 duration-300">
              <a href={resume} target="_blank" rel="noreferrer">
                My Resume
                <span>
                  <MdOutlineKeyboardArrowRight
                    size={25}
                    className="ml-1 inline-block "
                  />
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className="justify-center items-center">
          <img
            className="w-[70%]  mx-auto my-4 rounded-xl hidden md:flex"
            src={bg}
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
