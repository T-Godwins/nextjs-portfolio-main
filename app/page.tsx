import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Head from "next/head";

const navigation = [
  { name: "About Me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }, 
  { name: "Resume", href: "https://drive.google.com/file/d/168XfY4fgx6ERkzLJKtzPMrg_eiRtVfQ6/view" }
];

export default function Home() {
  return (
    <>
    <head>
        <GoogleAnalytics />
    </head>
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-blue-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-1xl md:text-3xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-pointer text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Godwins Tuyishime
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-3xl text-zinc-400 ">
          Welcome to my Portfolio
        </h2>
      </div>
    </div>
    </>
  );

}
