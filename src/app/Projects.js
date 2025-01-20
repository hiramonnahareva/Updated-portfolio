// // import React from 'react'

// // export default function Projects({projects}) {
// //   return (
// //     <section className="lg:ms-20 ms-[20px] me-[20px] py-10">
// //       <h2 className="text-3xl font-bold mb-6">My Recent Projects</h2>
// //       <div className="lg:flex gap-6 md:max-md:max-w-xs mx-auto">
// //         {projects.map((project) => (
// //           <div
// //             key={project.id}
// //             className="pro rounded-2xl border border-[#FA4FCA] p-8 overflow-hidden"
// //           >
// //             <div className="relative">
// //               <div className="px-6 py-5">

// //                 <h2 className='text-[24px] font-[600] text-[#FAD7D2]'>{project.title}</h2>
// //                 <span className="text-[16px] py-[20px] text-slate-200 mb-1 block transition-all duration-500 ease-in-out">
// //                   {project.description}
// //                 </span>
// //                 <div className="flex gap-2 mt-2">
// //                   {project.tags.map((tag, index) => (
// //                     <span
// //                       key={index}
// //                       className="pro-btn text-xs rounded-full px-6 py-2"
// //                     >
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>                                                                                         
// //                 <a
// //                   href={project.liveSite}
// //                   className="block mt-6 transition"
// //                 >
// //                   <span className="text-gradient" >Live Site</span> <span className="text-gradient"> &rarr; </span>
// //                 </a>
// //               </div>                                                                                     
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>                                                                                                                                               
// //   )
// // }

// import React, { useEffect, useRef } from 'react';

// export default function Projects({ projects }) {
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = (event) => {
//       if (scrollContainerRef.current) {
//         scrollContainerRef.current.scrollLeft += event.deltaY;
//         event.preventDefault();
//       }
//     };

//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener('wheel', handleScroll);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('wheel', handleScroll);
//       }
//     };
//   }, []);

//   return (
//     <section className="lg:ms-20 ms-[20px] me-[20px] py-10">
//       <h2 className="text-3xl font-bold mb-6">My Recent Projects</h2>
//       {/* Sticky horizontal scroll container */}
//       <div
//         ref={scrollContainerRef}
//         className="relative overflow-x-auto scrollbar-hide"
//       >
//         <div className="flex gap-6 w-max">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="pro rounded-2xl border border-[#FA4FCA] p-8 min-w-[300px] md:min-w-[400px] flex-shrink-0 overflow-hidden"
//             >
//               <div className="relative">
//                 <div className="px-6 py-5">
//                   <h2 className="text-[24px] font-[600] text-[#FAD7D2]">
//                     {project.title}
//                   </h2>
//                   <span className="text-[16px] py-[20px] text-slate-200 mb-1 block transition-all duration-500 ease-in-out">
//                     {project.description}
//                   </span>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {project.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="pro-btn text-xs rounded-full px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <a
//                     href={project.liveSite}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block mt-6 transition text-gradient"
//                   >
//                     Live Site &rarr;
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import React, { useEffect, useRef } from 'react';

// export default function Projects({ projects }) {
//   const scrollContainerRef = useRef(null);
//   const bottomSectionRef = useRef(null);
//   const topSectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = (event) => {
//       const container = scrollContainerRef.current;

//       if (container) {
//         // Handle horizontal scroll
//         container.scrollLeft += event.deltaY;
//         event.preventDefault();

//         // Check if the last project is visible
//         const lastProject = container.querySelector(
//           `.project-card:last-child`
//         );
//         if (lastProject) {
//           const lastProjectRect = lastProject.getBoundingClientRect();
//           const containerRect = container.getBoundingClientRect();

//           if (
//             lastProjectRect.right <= containerRect.right &&
//             lastProjectRect.left >= containerRect.left
//           ) {
//             bottomSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//           }
//         }

//         // Check if the user has scrolled to the start
//         if (container.scrollLeft <= 0) {
//           topSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     };

//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener('wheel', handleScroll);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('wheel', handleScroll);
//       }
//     };
//   }, []);

//   return (
//     <div className=''>
//       {/* Top Section */}
//       <section ref={topSectionRef} className="">
//       </section>

//       {/* Projects Section */}
//       <section className="lg:px-40 ps-[20px] pe-[20px] py-10">
//         <h2 className="text-3xl font-bold mb-6">My Recent Projects</h2>
//         {/* Sticky horizontal scroll container */}
//         <div
//           ref={scrollContainerRef}
//           className="relative overflow-x-auto scrollbar-hide"
//         >
//           <div className="flex gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className="project-card pro rounded-2xl border border-[#FA4FCA] p-8 w-[700px] flex-shrink-0 overflow-hidden"
//               >
//                 <div className="relative">
//                   <div className="px-6 py-5">
//                     <h2 className="text-[24px] font-[600] text-[#FAD7D2]">
//                       {project.title}
//                     </h2>
//                     <span className="text-[16px] py-[20px] text-slate-200 mb-1 block transition-all duration-500 ease-in-out">
//                       {project.description}
//                     </span>
//                     <div className="flex flex-wrap gap-2 mt-2">
//                       {project.tags.map((tag, index) => (
//                         <span
//                           key={index}
//                           className="pro-btn text-xs rounded-full px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                     <a
//                       href={project.liveSite}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block mt-6 transition text-gradient"
//                     >
//                       Live Site &rarr;
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bottom Section */}
//       <section ref={bottomSectionRef} className="">
//       </section>
//     </div>
//   );
// }




export default function Projects({ projects, scrollContainerRef }) {
 

  return (
      <section className="lg:px-40 ps-[20px] pe-[20px] py-10">
        <h2 className="text-3xl font-bold mb-6">My Recent Projects</h2>
        {/* Sticky horizontal scroll container */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card pro rounded-2xl border border-[#FA4FCA] p-8 w-[508px] flex-shrink-0 overflow-hidden"
              >
                <div className="relative">
                  <div className="px-6 py-5">
                    <h2 className="text-[24px] font-[600] dark:text-[#FAD7D2]">
                      {project.title}
                    </h2>
                    <span className="text-[16px] py-[20px] dark:text-[#AC8EA3] mb-1 block transition-all duration-500 ease-in-out">
                      {project.description}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="pro-btn text-xs rounded-full px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-[#c72897]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-6 transition text-gradient"
                    >
                      Live Site &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

