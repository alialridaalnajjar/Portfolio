import Imgone from "../assets/images/ArWarehouse.png";
import ImgTwo from "../assets/images/BakaRate.png";
import ProjectCard from "./ProjectCard";
export default function ProjectSection() {
  const projects: {
    name: string;
    url: string;
    repo: string;
    img: string;
    desc: string;
    inverse: boolean;
  }[] = [
    {
      name: "Ar Warehouse",
      url: "https://ar-warehouse.vercel.app/",
      repo: "https://github.com/alialridaalnajjar/AR_Warehouse",
      img: Imgone,
      desc: "A modern,responsive e-commerce web app for esports gadgets, built with React, TypeScript, and Tailwind CSS.",
      inverse: false,
    },
    {
      name: "Baka Rate",
      url: "https://alialridaalnajjar.github.io/BakaRate/",
      repo: "https://github.com/alialridaalnajjar/BakaRate",
      img: ImgTwo,
      desc: " BAKARATE is a modern, interactive anime listing and rating web app built with React, TypeScript, and Tailwind CSS.",
      inverse: true,
    },
  ];

  return (
    
    <div className="bg-black h-auto min-h-screen relative caret-transparent  ">
      {/* About section */}
      <div className="flex flex-row items-center justify-center pt-10.75 lg:pt-30 lg:gap-4">
        <div className="relative">
          <h1 className="text-4xl font-bold text-white relative z-10">
            Projects
          </h1>
          <div className="absolute top-7 left-5 w-28 h-4.5 bg-blue-700 z-0"></div>
        </div>
      </div>

      <div className="mt-10">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            name={p.name}
            url={p.url}
            repo={p.repo}
            img={p.img}
            desc={p.desc}
            inverse={p.inverse}
          />
        ))}
      </div>
    </div>
  );
}
