import Image from "next/image";
import sun from './mode.svg';
import moon from './moon.png';
import { useState, useEffect } from "react";


export default function ModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  // Sync with localStorage and document class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Check localStorage for saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      
      
      className=" bg-[#b5b5b5] dark:bg-[#6b6b6b] p-[10px] rounded-full" 
    > 

        {
            darkMode ?
             
            <Image src={sun} className="md:w-[17px] md:h-[17px] w-[2rem] hidden dark:block transform rotate-[90%] transition-all duration-700" alt="mode"/>
        
            : 

            <Image src={moon} className="md:w-[17px] md:h-[17px] w-[2rem] transform rotate-0 transition-all duration-700 dark:hidden" alt="mode"/>
        
           
        }

    </button> 
  );
}
