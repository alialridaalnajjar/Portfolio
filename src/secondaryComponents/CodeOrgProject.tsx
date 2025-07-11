import img from "../assets/images/codeOrgImg111.png";
export default function CodeOrgProject() {
  return (
    <div
      className="w-full relative pt-7 lg:pt-20 md:px-25 lg:px-50"
      id="CodeOrgProject"
    >
      <div
        className={`bg-indigo-800 flex flex-row items-center justify-between max-w-5/9 h-50 md:h-75 lg:h-145 `}
      >
        <a href="https://studio.code.org/projects/applab/eMJlUxRGQccYPfv5qbbEvPdTIywD6gTC3tcy37LJlOw">
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
        absolute bottom-0.5  text-white caret-transparent bg-black/30 
        gap-2 flex flex-col items-start justify-around p-1 pl-1.5 max-h-45 h-full
        ${"right-13.25 md:left-auto md:right-1/10 md:top-20 lg:left-auto lg:right-2/10 lg:top-35"}
      `}
      >
        <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl">
          Pixelated Expo
        </h1>
        <p className="max-w-45 text-xs font-semibold md:text-sm md:max-w-75 lg:text-xl lg:max-w-155 text-white">
          This project presents the Sushi Game (a "Squid Game" clone with a
          culinary twist), Fast Tap (a reaction speed game), and a Restaurant
          Order App.
        </p>

        <a href="https://studio.code.org/projects/applab/eMJlUxRGQccYPfv5qbbEvPdTIywD6gTC3tcy37LJlOw">
          <div className="underline-offset-2 text-xs uppercase min-w-24 font-light">
            <h1 className="pl-2 pb-0.5 md:text-lg lg:text-2xl  text-white">
              Live Now
            </h1>
            <div className="bg-lime-300 w-8/10 h-0.5 md:w-10/10 lg:w-11/10"></div>
          </div>
        </a>
        <a href="https://studio.code.org/projects/applab/eMJlUxRGQccYPfv5qbbEvPdTIywD6gTC3tcy37LJlOw">
          <div className="underline-offset-2 text-xs uppercase min-w-24 font-light">
            <h1 className="pl-2 pb-0.5 md:text-lg lg:text-2xl  text-white">
              Src Code Included
            </h1>
            <div className="bg-lime-300 w-9/10 h-0.5 md:w-10/10 lg:w-11/10"></div>
          </div>
        </a>
      </div>
    </div>
  );
}
