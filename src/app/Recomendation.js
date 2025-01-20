import Image from 'next/image'
import React from 'react'
import profile from "./Profile2.svg";

export default function Recomendation() {
  return (
    
    <div class="bg-gradient text-black dark:text-white rounded-lg p-12 lg:w-1/2 w-[94%] mx-auto shadow-lg mt-32 relative">
  <span class="pro-btn text-pink-500 text-[16px] py-1 px-3 rounded-full inline-block mb-4">
    Recommendation
  </span>
  <p class="text-[18px] font mb-6">
    Great team member and a hardworking individual! I had the <br /> pleasure of working with Hiramons work ethics. Wishing you success <br /> and prosperity Hiramon!
  </p>
  <div class="flex items-center gap-4">
    <Image src={profile} alt="Jack Hunter" class="w-12 h-12 rounded-full object-cover"/>
    <div>
      <h4 class="text-lg font-semibold">Jack Hunter</h4>
      <p class="text-sm text-[#8D8A8A]">
        Marketer | Investor | Start-Ups | Skydiver | Real Estate
      </p>
    </div>
  </div>
  <div class="absolute top-4 right-4 exp-text-gradient text-9xl">”</div>
</div>

  )
}
