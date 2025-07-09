import img from "../assets/languagesImg/img1Guest.png";

export default function ServiceSection() {
  return (
    <div className="bg-black h-auto min-h-screen relative">
      {/*  acheiving the design for the overlayed div */}
      <div className=" flex flex-row items-center justify-center pt-10.75">
        <div className="relative">
          <h1 className="text-4xl font-bold text-white relative z-10">About</h1>
          <div className="absolute top-7 left-5 w-28 h-4.5 bg-blue-700 z-0"></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 text-xs font-mono mt-7.5">
        <img src={img} alt="Profile Image" className="size-60" />
        <p className="text-white  text-left max-w-80 leading-4.75">
          Fully committed to the philosophy of life-long learning, I'm a full
          stack developer with a deep passion for TypeScript, React and all web
          tech. The unique combination of creativity, logic, technology and
          never running out of new things to discover, drives my excitement and
          passion for web development and push me always to strive for
          perfection knowing I wont achieve it. When I'm not coding I like to
          spend my time playing video games, watching anime and then thinking
          about that bug for 12 hrs staight.
        </p>
      </div>
    </div>
  );
}
