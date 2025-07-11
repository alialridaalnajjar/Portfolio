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
  const [musicPlaying, setMusicPlaying] = React.useState(false);
  const [navClicked, setNavClicked] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handClickSound = () => {
    const clickedAudio = new Audio("/portfolioClick.mp3");
    clickedAudio
      .play()
      .then(() => console.log("clicked ! sound played"))
      .catch((error) => console.error("Error playing click sound:", error));
  };

  const handleNavClick = () => {
   
    if (navClicked) {
      // Start closing animation
      setIsClosing(true);
      setTimeout(() => {
        setNavClicked(false);
        setIsClosing(false);
      }, 300); // Match animation duration
    } else {
      setNavClicked(true);
    }
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

      <Navbar
        handClickSound={handClickSound}
        handleNavClick={handleNavClick}
        musicPlaying={musicPlaying}
        setMusicPlaying={setMusicPlaying}
      />

      {navClicked && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-xs z-30 ">
          <div
            className={`relative z-20 flex flex-col items-center justify-center h-fit pt-20 lg:hidden pb-3 bg-black/50 backdrop-blur-md text-white gap-4 caret-transparent ${
              isClosing ? "animate-slide-up" : "animate-slide-down"
            }`}
          >
            <div
              className={`menu-item ${
                isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
              }`}
              style={{ animationDelay: isClosing ? "0s" : "0.1s" }}
            >
              Main
            </div>
            <div
              className={`menu-item ${
                isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
              }`}
              style={{ animationDelay: isClosing ? "0.05s" : "0.2s" }}
            >
              Services
            </div>
            <div
              className={`menu-item ${
                isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
              }`}
              style={{ animationDelay: isClosing ? "0.1s" : "0.3s" }}
            >
              Projects
            </div>
            <div
              className={`menu-item ${
                isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
              }`}
              style={{ animationDelay: isClosing ? "0.15s" : "0.4s" }}
            >
              Certificates
            </div>
            <div
              className={`menu-item ${
                isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
              }`}
              style={{ animationDelay: isClosing ? "0.2s" : "0.5s" }}
            >
              Articles
            </div>
            <div
              className={`menu-item ${
                isClosing ? "animate-fade-out-down" : "animate-fade-in-up"
              }`}
              style={{ animationDelay: isClosing ? "0.25s" : "0.6s" }}
            >
              Contact
            </div>
          </div>
        </div>
      )}

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 lg:px-8">
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

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-out-down {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-out-down {
          animation: fade-out-down 0.3s ease-out forwards;
        }

      
        .menu-item:hover {
          background-color: rgba(59, 130, 246, 0.2);
          transform: translateX(10px);
          color: #60a5fa;
        }
      `}</style>
    </div>
  );
}
