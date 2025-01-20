import Image from "next/image";
import mode from './mode.svg';
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
      
      
      className=" bg-[#6b6b6b]  p-[10px] rounded-full" 
    > 

        {
            darkMode ?
             
            <Image src={mode} className="w-[17px] h-[17px] " alt="mode"/>
        
            : 

            <Image src={mode} className="w-[17px] h-[17px] " alt="mode"/>
        
           
        }

    </button> 
  );
}
