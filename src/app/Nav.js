
import { useState } from "react";
import logo from './logo.svg';
import mail from './mail.svg';
import mode from './mode.svg';
import Image from "next/image";
// import img from '../assets/profile.png';
// import svg from '../assets/Vector.svg';
// import {FaTimes} from 'react-icons/fa';
// import resume from '../assets/Resume.pdf';
// import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const [click, setClick] = useState("");
  const handleClick = () => setClick(!click);  

  const content = (
    <nav className="z-10 lg:hidden fixed top-0 left-0 bottom-0 pt-[50px] bg-[#31132e] backdrop-filter backdrop-blur-lg bg-opacity-30 w-[400px] flex gap-[20px] flex-col items-start p-20 transition ease-out duration-700">
      <button
        className="absolute top-[25px] right-[25px] sm:hidden hover:transition"
        onClick={handleClick}
      >
        {click && <p>Menu</p>}
      </button>
      <Image className='my-[30px]' src={logo} alt="" />   
      <ul className="text-[#A6A9B8] text-[18px] flex flex-col gap-[36px]">
        <li>About</li>
        <li>Case Studies</li>
        <li>Testimonial</li>
      </ul>
        <div className="rounded-full border p-1 relative h-[29px] flex items-center my-2 w-[176px]">
                  <div className="w-[8px] h-[8px] bg-green-500 rounded-full absolute top-[8px] left-[12px]"></div>

                  <span className="ps-[28px] pe-2">Available for Work</span>
                </div>
        {/* <li>Blogs</li>
      <button className="text-white px-[28px] py-[8px] mt-[30px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB]">
        Contact Now
      </button> */}
    </nav>
  );
  return (
    <div className="bg-cover text-white lg:w-[64%] w-full overflow-hidden lg:px-[100px] lg:py-[20px] p-[40px]"> 
      <nav className="nav flex gap-2 py-[10px] px-[20px] rounded-[12px] items-center justify-between">
        <Image src={logo} alt="Logo"/>
        <ul className="text-[#A6A9B8] text-[15px] lg:flex hidden gap-[20px]">
          <li>Home</li>
          <li>Projects</li>
          <li>Experiences</li>
          <li>Resources</li> 
          <li>Blogs</li>

        </ul> 
                
          <div className="lg:flex items-center gap-2 hidden">

          <div className="rounded-full border p-1 relative h-[29px] flex items-center my-2 w-[176px]">
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute top-[8px] left-[12px] animate-[ping_1.5s_linear_infinite]"></div>

                  <span className="ps-[28px] text-[14px] pe-2">Available for Work</span>
                </div>
               
                <div className="bg-[#6b6b6b] p-[10px] rounded-full">
                <Image src={mode} className="w-[17px] h-[17px] " alt="mail"/>
            
                </div>
                
                <div className="bg-[#6b6b6b] p-[10px] rounded-full">
                <Image src={mail} className="w-[17px] h-[17px] " alt="mail"/>
            
                </div>
          </div> 
        {/* <button className="text-white px-[28px] py-[8px] rounded-[6px] bg-gradient-to-r from-[#3A198A] to-[#9D7FDB] lg:flex hidden">
          Contact Now
        </button> */}
        {
          <button
            className="block md:block lg:hidden hover:transition-none"
            onClick={handleClick}
          >
            {!click && <p>Menu</p>}
          </button>
        }
      </nav>

      {/*  */}

      {click && content}
    </div>
  );
};

export default Header;
