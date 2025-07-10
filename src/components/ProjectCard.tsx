export default function ProjectCard({
  name,
  url,
  repo,
  img,
  desc,
}: {
  name: string;
  url: string;
  repo: string;
  img: string;
  desc:string
}) {
  return (
    <div className="w-full relative pt-20">
      <div className="bg-indigo-800 flex flex-row items-center justify-between max-w-5/9 h-50">
        <a href={url}>
          <img src={img} alt="Project Image" className="h-35 w-55" />
        </a>
      </div>
      {/*absolute overlay */}
      <div className="absolute bottom-0.5 right-13.25 text-white caret-transparent bg-black/30 gap-2 flex flex-col items-start justify-around p-1 pl-1.5 max-h-45 h-full">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="max-w-45 text-xs font-semibold ">{desc}</p>
        <div className="underline-offset-2  text-xs uppercase min-w-24 font-light ">
          <h1 className="pl-2 pb-0.5">Live Now </h1>
          <div className="bg-lime-300 w-8/10 h-0.5"></div>
        </div>
        <div className="underline-offset-2  text-xs uppercase min-w-24 font-light ">
          <h1 className="pl-2 pb-0.5">Github Repo </h1>
          <div className="bg-lime-300 w-9/10 h-0.5"></div>
        </div>
      </div>
      <div hidden>
      {repo}{desc}</div>
    </div>
  );
}
