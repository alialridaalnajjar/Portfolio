import img from "../assets/languagesImg/img1Guest.png";
import git from "../assets/languagesImg/git.svg";
import html from "../assets/languagesImg/html.png";
import css from "../assets/languagesImg/css-3.png";
import javascript from "../assets/languagesImg/js.png";
import typescript from "../assets/languagesImg/typescript.png";
import postgreSql from "../assets/languagesImg/postgresql.svg";
import tailwindCss from "../assets/languagesImg/tailwind-css.svg";
import react from "../assets/languagesImg/react.svg";
import java from "../assets/languagesImg/java.png";

export default function ServiceSection() {
  const languages = [
    { icon: react, name: "React" },
    { icon: typescript, name: "TypeScript" },
    { icon: java, name: "Java" },
    { icon: tailwindCss, name: "TailwindCSS" },
    { icon: javascript, name: "JavaScript" },
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: git, name: "Git" },
    { icon: postgreSql, name: "PostgreSQL" },
  ];

  return (
    <div className="bg-black h-auto min-h-screen relative caret-transparent" id="About">
      {/* About section */}
      <div className="flex flex-row items-center justify-center pt-10.75 lg:pt-30 lg:gap-4">
        <div className="relative">
          <h1 className="text-4xl font-bold text-white relative z-10">About</h1>
          <div className="absolute top-7 left-5 w-28 h-4.5 bg-blue-700 z-0"></div>
        </div>
      </div>
      <div  className=" lg:mt-15  lg:visible lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-15 mt-2">
      {/* Profile and description */}
      <div className="flex flex-col items-center justify-center gap-4 text-xs font-mono mt-7.5">
        <img src={img} alt="Profile Image" className="size-60 lg:size-80" />
        <p className="text-white text-left max-w-80 leading-4.75 lg:text-xl lg:max-w-xl lg:leading-8 lg:font-sans lg:font-light ">
          Fully committed to the philosophy of life-long learning, I'm a full
          stack developer with a deep passion for TypeScript, React and all web
          tech. The unique combination of creativity, logic, technology and
          never running out of new things to discover, drives my excitement and
          passion for web development and push me always to strive for
          perfection knowing I wont achieve it. When I'm not coding I like to
          spend my time playing video games, watching anime and then thinking
          about that bug for 12 hrs straight.
        </p>
      </div>

      {/* Languages grid with gradient borders */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 px-4 lg:max-w-2xl lg:gap-10">
        {languages.map((lang, index) => (
          <div key={index} className="tech-card lg:size-35 ">
            <img src={lang.icon} alt={lang.name} className="size-10 mb-2" />
            <h1 className="text-xs text-white text-center font-semibold uppercase">
              {lang.name}
            </h1>
          </div>
        ))}
      </div></div>

      <style>{`
        .tech-card {
          position: relative;
          padding: 16px 12px;
          border-radius: 8px;
          background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 80px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tech-card::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8, #1e40af, #3b82f6);
          border-radius: 8px;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
        }

        .tech-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .tech-card:hover::before {
          background: linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb, #60a5fa);
          animation: gradient-shift 2s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background: linear-gradient(135deg, #3b82f6, #1d4ed8, #1e40af, #3b82f6);
          }
          50% {
            background: linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb, #60a5fa);
          }
        }
      `}</style>
    </div>
  );
}
