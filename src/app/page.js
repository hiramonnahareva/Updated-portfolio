"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import profile from "./profile.svg";
import company from "./image1.svg";
import company2 from "./image2.svg";
import darkEye from './darkEye.svg' ;
import lightEye from './lightEye.svg' ;
import Projects from "./Projects";
import Header from "./Nav";
import LanguageMarquee from "./LanguageMarquee";
import Experience from "./Experience";
import Recomendation from "./Recomendation";
import CertificatesAndResources from "./CertificatesAndResources";
import Blogs from "./Blogs";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";

export default function Page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false); 

  //  
  
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
        const lastProject = container.querySelector(`.project-card:last-child`);
        if (lastProject) {
          const lastProjectRect = lastProject.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          if (
            lastProjectRect.right <= containerRect.right &&
            lastProjectRect.left >= containerRect.left
          ) {
            bottomSectionRef.current?.scrollIntoView({ behavior: "smooth" });
          }
        }

        // Check if the user has scrolled to the start (leftmost edge)
        if (container.scrollLeft <= 0) {
          topSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
    }

    

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
      // Simulate loading 
    };

    

  }, []);             

  const projects = [
    {
      id: 1,
      title: "Detroit - Web App",
      description:
        "This website is a full-stack project. This website is a responsive site with a navigation menu.",
      tags: ["React", "Next.js", "Node.js"],
      liveSite: "https://detroit-six.vercel.app/",
    },
    {
      id: 2,
      title: "Recipe Blogs Website",
      description:
        "This website is a full-stack project. This website is a responsive site with a navigation menu.",
      tags: ["React", "Tailwind", "Firebase"],
      liveSite: "https://recipe-blogs-3c7ee.web.app/",
    },
    {
      id: 3,
      title: "Manufacturing - Web App",
      description:
        "This website is a full-stack project. This website is a responsive site with a navigation menu.",
      tags: ["React", "MongoBD", "Node.js"],
      liveSite: "https://parts-manufacturer.web.app/",
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
      tags: ["Next.js", "Tailwind", "Node.js"],
      liveSite: "",
    },
    {
      id: 2,
      img: company2,
      company: "Realassist",
      isRecent: false,
      title: "(MERN Stack Developer)",
      description:
        "This website is a full-stack project. This website is a responsive site with a navigation menu.",
      tags: ["React", "Tailwind", "Node.js"],
      liveSite: "#",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white">                                                                      
     {/* <Suspense fallback={ <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-black via-[#0c010c] to-[#18011a]">
          <div className="loading loading07 relative">
            <span
              data-text="L"
              className="relative text-[65px] font-bold tracking-widest text-gray-200"
            >
              L
            </span>
            <span
              data-text="O"
              className="relative text-[65px] font-bold tracking-widest text-gray-200"
            >
              O
            </span>
            <span
              data-text="A"
              className="relative text-[65px] font-bold tracking-widest text-gray-200"
            >
              A
            </span>
            <span
              data-text="D"
              className="relative text-[65px] font-bold tracking-widest text-gray-200"
            >
              D
            </span>
            <span
              data-text="I"
              className="relative text-[65px] font-bold tracking-widest text-gray-200"
            >
              I
            </span>
            <span
              data-text="N"
              className="relative text-[65px] font-bold tracking-widest text-gray-200"
            >
              N
            </span>
            <span
              data-text="G"
              className="relative text-[65px] font-bold tracking-widest text-gray-200"
            >
              G
            </span>
          </div> */}
          {/* <div className="loading loading07 relative">
            <span
              data-text="T"
              className="relative text-[65px] font-bold tracking-widest text-gray-200"
            >
              T
            </span>
            <span
              data-text="O"
              className="relative text-[65px] font-bold tracking-widest text-gray-200"
            >
              O
            </span>
          </div>
          <div className="loading01 relative">
            <span
              data-text="W"
              className="relative text-[65px] font-bold tracking-widest text-gray-200 animate-[loading01_1.4s_infinite_alternate]"
            >
              W
            </span>
            <span
              data-text="E"
              className="relative text-[65px] font-bold tracking-widest text-gray-200 animate-[loading01_1.4s_infinite_alternate_0.1s]"
            >
              E
            </span>
            <span
              data-text="L"
              className="relative text-[65px] font-bold tracking-widest text-gray-200 animate-[loading01_1.4s_infinite_alternate_0.2s]"
            >
              L
            </span>
            <span
              data-text="C"
              className="relative text-[65px] font-bold tracking-widest text-gray-200 animate-[loading01_1.4s_infinite_alternate_0.3s]"
            >
              C
            </span>
            <span
              data-text="O"
              className="relative text-[65px] font-bold tracking-widest text-gray-200 animate-[loading01_1.4s_infinite_alternate_0.4s]"
            >
              O
            </span>
            <span
              data-text="M"
              className="relative text-[65px] font-bold tracking-widest text-gray-200 animate-[loading01_1.4s_infinite_alternate_0.5s]"
            >
              M
            </span>
            <span
              data-text="E"
              className="relative text-[65px] font-bold tracking-widest text-gray-200 animate-[loading01_1.4s_infinite_alternate_0.6s]"
            >
              E
            </span>
          </div>{" "} */}
        {/* </div>}>  */}
       
        

          <section
            ref={topSectionRef}
            className="text-center flex flex-col items-center pt-40 pb-28 px-[30px]"
          >
            <Image src={profile} alt="" className="mb-4" />

            <h1 className="text-[30px] font-[400]">
              Hi, I’m <span className="text-gradient">Eva</span>
            </h1>
            <p className="mt-2 text-pink-500 text-[18px] pro-btn px-4 py-1 rounded-full font-medium">
              MERN Stack Developer
            </p>
            <p className="mt-4 md:text-[56px] text-[24px] font-[500] md:leading-[64px] lg:w-1/2 mx-auto">
              Crafting robust and user centric web solutions.
            </p>
            <p className="text-[18px] text-[#b1b1b1] mt-4">
              Specializing in React and Next.js with a knack or creating
              seamless digital <br /> experiences.{" "}
              <span className="font-bold text-[#a6a6a6]">
                Let&apos;s Build Something Amazing Together
              </span>
            </p>
            <a
              ref={scrollContainerRef}
              href="/projects"
              className="mt-6 flex gap-2 items-center dark:text-black bg-gradient-to-r text-white dark:from-[#F8EEED] dark:via-[#FFFFFF] dark:to-[#E7E1E0] from-[#F6826F]  via-[#fe69bb] to-[#FA4FCA] py-2 px-6 rounded-lg shadow hover:bg-pink-600"
            >
              See my work <Image src={darkEye} alt="" className="hidden dark:block" /> <Image src={lightEye} alt="" className="dark:hidden block" />
            </a>
          </section>
          <Projects
            projects={projects}
            scrollContainerRef={scrollContainerRef}
          />
          <section
            ref={bottomSectionRef}
            className="text-center flex flex-col items-center pt-20 pb-20 px-4"
          >
            <p className="mt-2 text-pink-500 text-[18px] pro-btn px-4 py-1 rounded-full font-medium">
              Tools
            </p>
            <p className="mt-6 md:text-[36px] text-[24px] font-[500] leading-[45px] mx-auto">
              Tools that help Develop and <br /> Consistent at my work
            </p>
            <LanguageMarquee />
          </section>

          <Experience Experience={experience} />

          <CertificatesAndResources />

          <Blogs />

          <Recomendation />

          <ContactInfo />
        {/* </Suspense>  */}
    </div> 
  );
}                                                                                          
