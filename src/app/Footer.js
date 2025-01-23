import gradient from "./Gradient.png";
import lightGradient from "./footerbg.png";
import Image from "next/image";
import logo from "./logo.svg";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-center relative mx-[20px]">
      <Image  className="dark:block hidden" src={gradient} alt={gradient} /> <Image  className="block dark:hidden" src={lightGradient} alt={gradient} /> 
      <div className="absolute w-[60%] lg:top-[40px] md:top-[20px]">
        <div className="flex justify-center">
        <Image className="md:w-14" src={logo} alt="Logo" />
        </div>
        <div className="flex justify-center md:mt-6 mt-2 space-x-4">
          <a target='_blank' href="https://www.github.com/hiramonnahareva" className="p-2 bg-[#6d6969] text-white rounded-full"><FaGithub className="md:text-2xl"/></a>
          <a target='_blank' href="https://www.linkedin.com/in/deveva/" className="p-2 bg-[#6d6969] text-white rounded-full"><FaLinkedinIn className="md:text-2xl"/></a>
          <a target='_blank' href="https://www.instagram.com/hiramonnahareva" className="p-2 bg-[#6d6969] text-white rounded-full"><FaInstagram className="md:text-2xl"/></a>
          <a target='_blank' href="https://www.twitter.com/hiramonnahareva" className="p-2 bg-[#6d6969] text-white rounded-full"><FaTwitter className="md:text-2xl"/></a>
        </div>

        <div className="lg:my-10 md:my-6 my-2 h-[1px] bg-gray-400"></div>
        <div className="dark:text-gray-200 text-center">© 2024 Hiromon Nahar Eva</div>
      </div>
    </div> 
  );
}
