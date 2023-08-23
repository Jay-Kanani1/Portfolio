import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white h-screen"
    >
      <div className="p-4 mx-auto max-w-[1240px] flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#54b3d6] bg-clip-text">
            Contact
          </p>
          <p className="py-6 text-2xl text-gray-400">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/7768dfec-3df6-499a-a9f3-486df8c6479b"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-1"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-1"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-1"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-[#54b3d6] to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
