import Navbar from "@/components/Navbar";
import { RetroPopup } from "@/secondaryComponents/RetroPopUp";
import ThreeDButton from "@/secondaryComponents/ThreeDButton";
import React from "react";
import { TbFileCv } from "react-icons/tb";
import CV from "../assets/AliAlNajjarCV.pdf";
import lgVid from "../assets/HorizontalBG.mp4";
import img from "../assets/PorfolioImg.jpeg";
import bgVid from "../assets/VerticalBg.mp4";

export default function MainPage() {
  const handClickSound = () => {
    const clickedAudio = new Audio("/portfolioClick.mp3");
    clickedAudio
      .play()
      .then(() => console.log("clicked ! sound played"))
      .catch((error) => console.error("Error playing click sound:", error));
  };

  const [navClicked, setNavClicked] = React.useState(false);
  const handleNavClick = () => {
    handClickSound();
    setNavClicked(!navClicked);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <RetroPopup />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0 lg:hidden"
      >
        <source src={bgVid} type="video/mp4" />
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover -z-10 hidden lg:block"
      >
        <source src={lgVid} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20 lg:bg-black/60 z-10"></div>

      <Navbar handClickSound={handClickSound} handleNavClick={handleNavClick} />
      {navClicked && (
        <div className="relative z-20 flex flex-col items-center justify-center h-fit pt-20 lg:hidden">
          <div> 1 </div>
          <div>2 </div>
          <div> 3</div>
          <div>4 </div>
          <div> 5</div>
          <div>6 </div>
        </div>
      )}

      <div
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 lg:px-8"
        style={{ paddingBottom: navClicked ? "20rem" : "0" }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={img}
              alt="Ali's Profile"
              className="relative w-32 h-32 lg:w-48 lg:h-48 rounded-3xl object-cover border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="text-center lg:text-left text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 drop-shadow-lg">
              Greetings, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-none">
                Ali
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-200 font-light drop-shadow-md bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
              I build{" "}
              <span className="text-blue-300 font-semibold">amazing</span> Web
              experiences
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <ThreeDButton handClickSound={handClickSound}>
            <span className="flex items-center gap-2">🚀 My Adventure</span>
          </ThreeDButton>

          <ThreeDButton handClickSound={handClickSound}>
            <span className="flex items-center gap-3">⚡ The Tech Stack</span>
          </ThreeDButton>
          <a href={CV} download={CV}>
            <ThreeDButton handClickSound={handClickSound}>
              <span className="flex items-center gap-2">
                Download Resume! <TbFileCv className="text-lg" />
              </span>
            </ThreeDButton>
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
