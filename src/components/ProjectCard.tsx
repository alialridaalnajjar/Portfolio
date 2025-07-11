export default function ProjectCard({
  name,
  url,
  repo,
  img,
  desc,
  inverse,
}: {
  name: string;
  url: string;
  repo: string;
  img: string;
  desc: string;
  inverse: boolean;
}) {
  return (
    <div className="w-full relative pt-20 md:px-25 lg:px-50">
      <div
        className={`bg-indigo-800 flex flex-row items-center justify-between max-w-5/9 h-50 md:h-75 lg:h-145 ${
          inverse ? "ml-auto md:ml-auto lg:ml-auto" : ""
        }`}
      >
        <a href={url}>
          <img
            src={img}
            alt="Project Image"
            className="h-35 w-13/15 md:h-65 md:w-120 lg:h-120 lg:w-200"
          />
        </a>
      </div>

      {/* Overlays here */}
      <div
        className={`
        md:max-h-65 md:justify-around md:bg-transparent lg:max-h-100 lg:justify-around lg:bg-transparent 
        absolute bottom-0.5 text-white caret-transparent bg-black/30 
        gap-2 flex flex-col items-start justify-around p-1 pl-1.5 max-h-45 h-full
        ${
          inverse
            ? "left-13.25 md:left-1/10 md:right-auto md:top-20 lg:left-2/10 lg:right-auto lg:top-35"
            : "right-13.25 md:left-auto md:right-1/10 md:top-20 lg:left-auto lg:right-2/10 lg:top-35"
        }
      `}
      >
        <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl">{name}</h1>
        <p className="max-w-45 text-xs font-semibold md:text-sm md:max-w-75 lg:text-xl lg:max-w-155">
          {desc}
        </p>

        <a href={url}>
          <div className="underline-offset-2 text-xs uppercase min-w-24 font-light">
            <h1 className="pl-2 pb-0.5 md:text-lg lg:text-2xl">Live Now</h1>
            <div className="bg-lime-300 w-8/10 h-0.5 md:w-10/10 lg:w-11/10"></div>
          </div>
        </a>

        <a href={repo}>
          <div className="underline-offset-2 text-xs uppercase min-w-24 font-light">
            <h1 className="pl-2 pb-0.5 md:text-lg lg:text-2xl">Github Repo</h1>
            <div className="bg-lime-300 w-9/10 h-0.5 md:w-10/10 lg:w-11/10"></div>
          </div>
        </a>
      </div>
    </div>
  );
}
