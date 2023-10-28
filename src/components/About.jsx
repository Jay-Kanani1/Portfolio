import React from "react";
import profile from "../assets/profile.jpg";
// import { motion } from "framer-motion";
import fadeIn from "../Varient";

function About() {
  return (
    <div name="about">
      <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16 px-4 md:py-auto">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div
            // variants={fadeIn("right", 0.2)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#54b3d6] bg-clip-text">
              About Me
            </h1>
            <p className="py-3 md:text-lg text-medium text-gray-400">
              I am Jay Kanani. I recently graduated from Seneca College. I
              studied Computer Programming and right now I am a Full-Stack
              developer. Proficient in HTML, CSS, and JavaScript, with knowledge
              of back-end technologies like Node.js and practical expertise with
              frameworks like React. I'm keen to utilize my skills and
              motivation to develop useful web solutions while also advancing my
              professional knowledge.
            </p>
          </div>
          <img
            // variants={fadeIn("left", 0.2)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.7 }}
            className="w-[66%] mx-auto my-4 rounded-xl "
            style={{ boxShadow: "10px 10px 40px gray" }}
            src={profile}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
