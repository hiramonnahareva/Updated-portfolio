import Image from "next/image";
import React from "react";

export default function Experience({ Experience }) {
  return (
    <section className="lg:mx-60 md:mx-40 ms-[20px] me-[20px] py-10">
      <div className="flex justify-center mb-10">
      <span class="mt-2 text-pink-500 text-[18px] pro-btn px-4 py-1 rounded-full font-medium">
       Experience
        </span>
      </div>
       
      <div className="flex flex-col lg:flex-row gap-6 md:max-md:max-w-xs mx-auto">
        {Experience.map((experience) => (
          <div
            key={experience.id}
            className={`rounded-2xl border ${experience.isRecent ? "border-[#FA4FCA] pro " : "bg-dark-gradient border-[#464646]"}  p-8 overflow-hidden`}
          >
            <div className="relative">
              <div className="lg:px-6 py-5 transition-all duration-500 ease-in-out">
                <div className="flex gap-4 items-center  dark:text-slate-200">
                  <Image src={experience.img} alt="" className="" />

                  <h2 className="text-[24px] font-[600]"> 
                    {experience.company}
                  </h2>
                  <span className="text-[16px] py-[20px] block">
                    {experience.title}
                  </span>
                </div>
                <span className={`block ${experience.isRecent ? "text-gradient" : "text-[#afafaf]"} mt-2 transition`}>23 Feb 2023 - Present </span>
                <span className={`text-[16px] py-[20px] mb-1 ${experience.isRecent ? " text-[#e5b9d9] " : "text-[#848383]"} block transition-all  duration-500 ease-in-out`}>
                  {experience.description}
                </span>
                <div className="flex gap-2 mt-2">
                  {experience.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`${experience.isRecent ? "pro-btn text-[#b04b95]" : "bg-[#bdbdbd] dark:bg-[#363636] border dark:border-[#686868]"}  text-xs rounded-full px-6 py-2`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section> 
  );
}
