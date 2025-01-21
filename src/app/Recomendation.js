import Image from 'next/image'
import React from 'react'
import profile from "./Profile2.svg";

export default function Recomendation() {
  return (
    
    <div className="bg-gradient text-black dark:text-white rounded-lg px-20 py-12 lg:mx-56 md:mx-20 mx-[20px] shadow-lg mt-32 relative">
  <span className="pro-btn text-pink-500 text-[16px] py-1 px-3 rounded-full inline-block mb-8">
    Recommendation
  </span>
  <p className="text-[18px] dark:text-[#ececec] mb-8">
    Great team member and a hardworking individual! I had the <br /> pleasure of working with Hiramons work ethics. Wishing you success <br /> and prosperity Hiramon!
  </p>
  <div className="flex items-center gap-4">
    <Image src={profile} alt="Jack Hunter" className="w-12 h-12 rounded-full object-cover"/>
    <div>
      <h4 className="text-lg font-semibold">Jack Hunter</h4>
      <p className="text-sm text-[#8D8A8A]">
        Marketer | Investor | Start-Ups | Skydiver | Real Estate
      </p>
    </div>
  </div>
  <div className="absolute top-10 right-10 exp-text-gradient text-9xl">”</div>
</div>

  )
}
