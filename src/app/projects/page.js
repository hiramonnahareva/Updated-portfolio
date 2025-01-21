import React from 'react'
import Projects from '../Projects'

export default function page() {

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

  return (
    <div className='py-40'>
        <Projects projects={projects}/> 
    </div>
  )
}
