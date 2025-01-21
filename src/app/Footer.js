import gradient from "./Gradient.svg";
import Image from "next/image";
import logo from "./logo.svg";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-center relative mx-[20px]">
      <Image className="grayscale hover:grayscale-0" src={gradient} alt={gradient} />
      <div className="absolute w-[60%] top-[28px]">
        <div className="flex justify-center">
        <Image className="md:w-14" src={logo} alt="Logo" />
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <a target='_blank' href="https://www.github.com/hiramonnahareva" className="p-2 bg-[#6d6969] text-white rounded-full"><FaGithub className="text-2xl"/></a>
          <a target='_blank' href="https://www.linkedin.com/in/deveva/" className="p-2 bg-[#6d6969] text-white rounded-full"><FaLinkedinIn className="text-2xl"/></a>
          <a target='_blank' href="https://www.instagram.com/hiramonnahareva" className="p-2 bg-[#6d6969] text-white rounded-full"><FaInstagram className="text-2xl"/></a>
          <a target='_blank' href="https://www.twitter.com/hiramonnahareva" className="p-2 bg-[#6d6969] text-white rounded-full"><FaTwitter className="text-2xl"/></a>
        </div>

        <div className="my-10 h-[1px] bg-gray-400"></div>
        <div className="text-gray-200 text-center">© 2024 Hiromon Nahar Eva</div>
      </div>
    </div> 
  );
}
