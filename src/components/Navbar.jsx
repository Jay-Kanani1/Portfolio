import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Portfolio-logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex items-center w-full h-20 text-white bg-black px-4 justify-around">
      <div className="flex gap-3">
        <img src={logo} alt="" width={50} />

        <h1 className="font-portfolio text-5xl ml-5 p-btn cursor-pointer">
          Portfolio
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="mx-5 cursor-pointer space-around capitalize  hover-effect text-2xl font-medium "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            <span className="hover-effect"></span>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 pr-4 z-10 flex md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="my-5 cursor-pointer space-around capitalize hover-effect text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
              <span className="hover-effect"></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
