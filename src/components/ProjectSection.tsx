import CodeOrgProject from "@/secondaryComponents/CodeOrgProject";
import { ArrowDownFromLine } from "lucide-react";
import React from "react";
import Imgone from "../assets/ProjectImages/ArWarehouse.png";
import ImgTwo from "../assets/ProjectImages/BakaRate.png";
import ImgThree from "../assets/ProjectImages/DevArt.png";
import ImgFour from "../assets/ProjectImages/Screenshot 2026-01-31 163133.png";
import ProjectCard from "./ProjectCard";
export default function ProjectSection() {
  const [expanded, setExpanded] = React.useState(false);

  const projects: {
    name: string;
    url: string;
    repo: string;
    img: string;
    desc: string;
  }[] = [
    {
      name: "DevArt",
      url: "https://devart-learn.vercel.app/",
      repo: "https://github.com/alialridaalnajjar/DevArt_Front",
      img: ImgThree,
      desc: "A modern learning platform built with React, Express, TypeScript, PostgreSql, and Firebase. This platform provides an interactive course browsing experience, user authentication, and personalized profile management.",
    },
    {
      name: "No Wallet Gaming",
      url: "https://no-wallet-gaming.vercel.app/",
      repo: "https://github.com/alialridaalnajjar/NoWalletGamingFrontEnd",
      img: ImgFour,
      desc: "A fast, wallet-free way to explore web games. Frontend in React + TypeScript + Vite, powered by my first Express backend.",
    },
    {
      name: "Ar Warehouse",
      url: "https://ar-warehouse.vercel.app/",
      repo: "https://github.com/alialridaalnajjar/AR_Warehouse",
      img: Imgone,
      desc: "A modern,responsive e-commerce web app for esports gadgets, built with React, TypeScript, and Tailwind CSS.",
    },
    {
      name: "Baka Rate",
      url: "https://alialridaalnajjar.github.io/BakaRate/",
      repo: "https://github.com/alialridaalnajjar/BakaRate",
      img: ImgTwo,
      desc: " BAKARATE is a modern, interactive anime listing and rating web app built with React, TypeScript, and Tailwind CSS.",
    },
  ];

  return (
    <div
      className="bg-black h-auto min-h-auto relative caret-transparent  "
      id="Projects"
    >
      {/* About scshn */}
      <div className="flex flex-row items-center justify-center pt-10.75 lg:pt-30 lg:gap-4">
        <div className="relative">
          <h1 className="text-4xl font-bold text-white relative z-10 ">
            Projects
          </h1>
          <div className="absolute top-7 left-5 w-28 h-4.5 bg-blue-700 z-0"></div>
        </div>
      </div>
      <div className="mt-10">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            index={index}
            name={p.name}
            url={p.url}
            repo={p.repo}
            img={p.img}
            desc={p.desc}
          />
        ))}
      </div>{" "}
      <a href="#CodeOrgProject">
        <div className="flex justify-center ">
          <ArrowDownFromLine
            className={`mt-6 lg:mt-15 text-lime-600 size-6 lg:size-10 mx-auto hover:cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setExpanded(!expanded)}
          />
        </div>
      </a>
      {expanded && (
        <div className="animate-fade-in">
          <CodeOrgProject />
        </div>
      )}
      <style>{`
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
`}</style>
    </div>
  );
}
