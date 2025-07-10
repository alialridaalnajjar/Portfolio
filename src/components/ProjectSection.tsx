import ProjectCard from "./ProjectCard";
import Imgone from "../assets/images/ArWarehouse.png";
import ImgTwo from"../assets/images/BakaRate.png";
export default function ProjectSection() {
  const projects: {
    name: string;
    url: string;
    repo: string;
    img: string ;
    desc: string;
    inverse?:boolean;
  }[] = [
    {
      name: "Ar Warehouse",
      url: "https://ar-warehouse.vercel.app/",
      repo: "",
      img: Imgone,
      desc: "A web application for managing augmented reality assets.",
      inverse: false,
    }, {
      name: "Baka Rate",
      url: "https://ar-warehouse.vercel.app/",
      repo: "",
      img: ImgTwo,
      desc: "A web application for managing augmented reality assets.",
      inverse: false,
    },
  ];

  return (
    <div className="bg-black h-auto min-h-screen relative caret-transparent pt-12 lg:pt-20 ">
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
          
        />
      ))}
    </div></div>
  );
}
