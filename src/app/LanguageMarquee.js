import React from "react";
import MongoDB from "./mongodb.svg";
import nodeJS from "./nodeJs.png";
import react from "./React.png";
import nextjs from "./next-js.svg";
import nextjsDark from "./nextjs.png";
import Firebase from "./firebase.png";
import bootstrap from "./Bootstrap_logo.svg";
import vite from "./Vitejs-logo.svg";
import tailwind from "./Tailwind_CSS.png";
import Image from "next/image";

export default function LanguageMarquee() {
  return (
    <div className="lg:w-[900px] w-full text-5xl pt-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
      <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <a
            target="_blank"
            href="https://react.dev/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={react} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.mongodb.com/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={MongoDB} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://nodejs.org/en"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-20" src={nodeJS} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://nextjs.org/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14 dark:hidden" src={nextjs} alt="Logo" /> <Image className="w-14 hidden dark:block" src={nextjsDark} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={tailwind} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://vitejs.dev/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={vite} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://firebase.google.com/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={Firebase} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://getbootstrap.com/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={bootstrap} alt="Logo" />
          </a>
        </li>
      </ul>
      <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <a
            target="_blank"
            href="https://react.dev/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={react} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.mongodb.com/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={MongoDB} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://nodejs.org/en"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-20" src={nodeJS} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://nextjs.org/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14 dark:hidden" src={nextjs} alt="Logo" /> <Image className="w-14 hidden dark:block" src={nextjsDark} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={tailwind} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/@coderflix"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={vite} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://firebase.google.com/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={Firebase} alt="Logo" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://getbootstrap.com/"
            className="bg-primary text-primary-foreground text-2xl grid place-content-center p-2 rounded-md"
          >
            <Image className="w-14" src={bootstrap} alt="Logo" />
          </a>
        </li>
      </ul>
    </div>
  );
}
