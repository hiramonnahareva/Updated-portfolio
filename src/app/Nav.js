"use client";

import { useState } from "react";
import logo from "./logo.svg";
import mail from "./mail.svg";
import mailDark from "./mailDark.svg";
import Image from "next/image";
import ModeToggle from "./Toggle";
import { IoCloseOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
// import img from '../assets/profile.png';
// import svg from '../assets/Vector.svg';
// import {FaTimes} from 'react-icons/fa';
// import resume from '../assets/Resume.pdf';
// import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const [click, setClick] = useState("");
  const handleClick = () => setClick(!click);

  const content = (
    <nav className="z-10 md:hidden fixed top-0 left-0 bottom-0 pt-[50px] bg-[#31132e] backdrop-filter backdrop-blur-lg bg-opacity-30 w-[400px] flex gap-[20px] flex-col items-start p-20 transition ease-out duration-700">
      <button
        className="absolute top-[25px] right-[25px] hover:transition"
        onClick={handleClick}
      >
        {click && (
          <p className="block">
            {" "}
            <IoCloseOutline />{" "}
          </p>
        )}
      </button>
      <Link href="/">
        <Image className="my-[30px]" src={logo} alt="" />
      </Link>
      <ul className="dark:text-[#A6A9B8] text-[18px] flex flex-col gap-[36px]">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="projects">
          <li>Projects</li>
        </Link>
        <Link href="experiences">
          <li>Experiences</li>
        </Link>
        <Link href="/">
          <li>Resources</li>
        </Link>
        <Link href="blog">
          <li>Blogs</li>
        </Link>
      </ul>

      {/* <li>Blogs</li>
      <button className="text-white px-[28px] py-[8px] mt-[30px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB]">
        Contact Now
      </button> */}
    </nav>
  );
  return (
    <header className="fixed flex  flex-col  items-center w-full top-18 my-[20px] z-20">
      <div className="bg-cover lg:w-[70%] w-full overflow-hidden lg:px-[100px] lg:py-[20px] p-[40px]">
        <nav className="bg-[#4a3d44] backdrop-filter backdrop-blur-lg bg-opacity-30 flex gap-2 py-[10px] px-[20px] rounded-[12px] items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
          <ul className="dark:text-[#A6A9B8] text-[15px] md:flex hidden gap-[20px]">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="projects">
              <li>Projects</li>
            </Link>
            <Link href="experiences">
              <li>Experiences</li>
            </Link>
            <Link href="resources">
              <li>Resources</li>
            </Link>
            <Link href="blog">
              <li>Blogs</li>
            </Link>
          </ul>

          <div className="md:flex items-center gap-2 hidden">
            <div className="rounded-full border border-[#818181]  p-1 relative h-[29px] flex items-center my-2 w-[176px]">
              <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute top-[8px] left-[12px] animate-[ping_1.5s_linear_infinite]"></div>

              <span className="ps-[28px] dark:text-white text-[14px] pe-2">
                Available for Work
              </span>
            </div>

            {/* <div className="bg-[#6b6b6b] p-[10px] rounded-full">
                <Image src={mode} className="w-[17px] h-[17px] " alt="mail"/>
            
                </div> */}

            <div className="bg-[#b5b5b5] dark:bg-[#6b6b6b] p-[10px] rounded-full">
            <a href="mailto:hiramoneva@gmail.com">
              <Image
                src={mail}
                className="hidden dark:block w-[17px] h-[17px] "
                alt="mail"
              />
              </a>
              <Image
                src={mailDark}
                className="w-[17px] h-[17px] dark:hidden"
                alt="mail"
              />
            </div>
            <ModeToggle />
          </div>
          {/* <button className="text-white px-[28px] py-[8px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB] lg:flex hidden">
          Contact Now
        </button> */}

          <div className="flex md:hidden gap-[10px] items-center">
            <div className="rounded-full border border-[#818181] p-1 relative md:h-[29px] flex items-center md:my-2 md:w-[176px] w-full">
              <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute md:top-[8px] left-[12px] animate-[ping_1.5s_linear_infinite]"></div>

              <span className="ps-[28px]  dark:text-white md:text-[14px] text-[8px] md:pe-2 pe-0">
                Available for Work
              </span>
            </div>

            <div className="dark:bg-[#6b6b6b]  flex items-center p-[10px] rounded-full bg-[#b5b5b5]">
              <a href="mailto:hiramoneva@gmail.com">
              <Image
                src={mail}
                className="hidden dark:block w-[2rem] h-[1rem]"
                alt="mail"
              />
              </a>
              <Image
                src={mailDark}
                className="w-[2rem] dark:hidden h-[1rem]"
                alt="mail"
              />
            </div>
            <ModeToggle />

            {
              <button
                className="block md:hidden hover:transition-none"
                onClick={handleClick}
              >
                {!click && <CiMenuFries />}
              </button>
            }
          </div>
        </nav>

        {/*  */}

        {click && content}
      </div>
    </header>
  );
};

export default Header;
