import React from 'react'
import Projects from '../Projects'
import company from "../image1.svg";
import company2 from "../image2.svg";
import Experience from '../Experience';

export default function page() {

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
         tags: ["React", "Tailwind CSS", "Node.js"],
         liveSite: "#",
       },
     ];

  return (
      
    // <div className='py-40'>
    //     <Experience Experience={experience} />
    // </div>
      

    <div className="container h-[100vh] flex justify-center items-center mx-auto p-40">
      <p className='text-5xl font-bold'>Comming Soon....</p>
    </div>
    
  )
}
