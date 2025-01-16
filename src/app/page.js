"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import profile from "./Profile.svg";
import company from "./image1.svg";
import company2 from "./image2.svg";
import Projects from "./Projects";
import Header from "./Nav";
import LanguageMarquee from "./LanguageMarquee";
import Experience from "./Experience";
import Recomendation from "./Recomendation";
import CertificatesAndResources from "./CertificatesAndResources";
import Blogs from "./Blogs";
import Footer from "./Footer";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const scrollContainerRef = useRef(null);
  const bottomSectionRef = useRef(null);
  const topSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      const container = scrollContainerRef.current;

      if (container) {
        // Handle horizontal scroll
        container.scrollLeft += event.deltaY;
        event.preventDefault();

        // Check if the last project is visible
        const lastProject = container.querySelector(
          `.project-card:last-child`
        );
        if (lastProject) {
          const lastProjectRect = lastProject.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          if (
            lastProjectRect.right <= containerRect.right &&
            lastProjectRect.left >= containerRect.left
          ) {
            bottomSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Check if the user has scrolled to the start (leftmost edge)
        if (container.scrollLeft <= 0) {
          topSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Manufacturing - Web App",
      description:
        "This website is a full-stack project. This website is a responsive site with a navigation menu.",
      tags: ["React", "Next.js", "Node.js"],
      liveSite: "#",
    },
    {
      id: 2,
      title: "Beauty E-commerce Website",
      description:
        "This website is a full-stack project. This website is a responsive site with a navigation menu.",
      tags: ["React", "Tailwind", "Firebase"],
      liveSite: "#",
    },
    {
      id: 3,
      title: "Manufacturing - Web App",
      description:
        "This website is a full-stack project. This website is a responsive site with a navigation menu.",
      tags: ["React", "Next.js", "Node.js"],
      liveSite: "#",
    },
  ];

  const experience = [
    {
      id: 1,
      img: company,
      company: "WebStars",
      isRecent: true,
      title: "(MERN Stack Developer)",
      description:
        "This website is a full-stack project. This website is a responsive site with a navigation menu.",
      tags: ["React", "Next.js", "Node.js"],
      liveSite: "#",
    },
    {
      id: 2,
      img: company2,
      company: "Realassist",
      isRecent: false,
      title: "(MERN Stack Developer)",
      description:
        "This website is a full-stack project. This website is a responsive site with a navigation menu.",
      tags: ["React", "Next.js", "Node.js"],
      liveSite: "#",
    },
  ];

  return (
    <body class="font-sans bg-white text-gray-900">
      <header className="fixed flex  flex-col  items-center w-full top-18 my-[20px] z-20">
        {/* <nav className="">
          <div className="relative flex items-center justify-between nav z-50 px-6 py-2 w-full rounded-lg">
            <div className=" me-10 text-2xl font-bold text-white">
             
              <span>Logo</span>
            </div>
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-1 bg-white mb-1"></div>
              <div className="w-6 h-1 bg-white mb-1"></div>
              <div className="w-6 h-1 bg-white"></div>
            </div>
            <div
              className={`${
                isOpen
                  ? "block absolute md:relative bg-black h-[100vh]"
                  : "hidden"
              } md:flex justify-between items-center w-full md:w-auto`}
            >
              <div className="flex flex-col top-0 bottom-0 right-0 left-0 md:flex-row md:gap-2 text-white">
                <div
                  className="w-6 h-1 bg-white absolute right-2 md:hidden top-2"
                  onClick={() => setIsOpen(!isOpen)}
                ></div>

                <a
                  href="#"
                  className="py-2 px-4 hover:text-gray-400 transition duration-300"
                >
                  About
                </a>
                <a
                  href="#"
                  className="py-2 px-4 hover:text-gray-400 transition duration-300"
                >
                  Recent Work
                </a>
                <a
                  href="#"
                  className="py-2 px-4 hover:text-gray-400 transition duration-300"
                >
                  Benefits
                </a>
                <div className="rounded-full border p-1 relative h-[29px] flex items-center my-2 w-[176px]">
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute top-[8px] left-[12px] animate-[ping_1.5s_linear_infinite]"></div>

                  <span className="ps-[28px] pe-2">Available for Work</span>
                </div>

                <a
                  href="#"
                  className="py-2 px-4 hover:text-gray-400 transition duration-300"
                >
                  Benefits
                </a>
              </div>
            </div>
          </div>
        </nav> */}

        <Header/>


        

      </header>

      <section ref={topSectionRef} class="text-center flex flex-col items-center pt-40 pb-28 px-4">
        <Image src={profile} alt="" className="mb-4" />

        <h1 class="text-[30px] font-[400]">
          Hi, I’m <span className="text-gradient">Eva</span>
        </h1>
        <p class="mt-2 text-pink-500 text-[18px] pro-btn px-4 py-1 rounded-full font-medium">
          MERN Stack Developer
        </p>
        <p class="mt-4 text-white text-[56px] font-[500] leading-[64px] lg:w-1/2 mx-auto">
          Crafting robust and user centric web solutions.
        </p>
        <p className="text-[18px] text-[#D5D5D5] mt-4">
          Specializing in React and Next.js with a knack or creating seamless
          digital <br /> experiences. Let&apos;s Build Something Amazing Together
        </p>
        <a
          href="#projects"
          class="mt-6 inline-block btn-bg text-black py-2 px-6 rounded-lg shadow hover:bg-pink-600"
        >
          See my work
        </a>
      </section>
    <Projects projects={projects} scrollContainerRef={scrollContainerRef} />  
    
    <section ref={bottomSectionRef} className="text-center flex flex-col items-center pt-20 pb-28 px-4">
    <p class="mt-2 text-pink-500 text-[18px] pro-btn px-4 py-1 rounded-full font-medium">
          Tools
        </p>
        <p class="mt-6 text-white text-[36px] font-[500] leading-[45px] mx-auto">
        Tools that help Develop and <br /> Consistent at my work
        </p>
        <LanguageMarquee/>
    </section>

    <Experience Experience={experience}/>  

    <CertificatesAndResources/>

    <Blogs/>

    <Recomendation/>

    <Footer/>

    </body> 
  );
}
