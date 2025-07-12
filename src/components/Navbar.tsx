import { Menu, Volume2, VolumeX } from "lucide-react";
import React from "react";
import { IoVolumeMediumSharp, IoVolumeMuteSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import type { ClickSoundType } from "../types/ClickSoundType";

export default function Navbar({
  handClickSound,
  handleNavClick,
  musicPlaying,
  setMusicPlaying,
}: ClickSoundType) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.1;
    }

    const audio = audioRef.current;

    const tryAutoPlay = () => {
      audio
        .play()
        .then(() => {
          setMusicPlaying(true);
          console.log("Music auto-started");
        })
        .catch((error) => {
          console.log("Auto-play blocked by browser:", error);
          setMusicPlaying(false);

          const handleFirstClick = () => {
            audio
              .play()
              .then(() => {
                setMusicPlaying(true);
                console.log("Music started after user interaction");
              })
              .catch(console.error);
            document.removeEventListener("click", handleFirstClick);
          };

          document.addEventListener("click", handleFirstClick);
        });
    };

    tryAutoPlay();
  }, []);

  const handleMusicToggle = () => {
    handClickSound();
    if (!audioRef.current) return;

    const audio = audioRef.current;

    if (!musicPlaying) {
      audio
        .play()
        .then(() => {
          setMusicPlaying(true);
          console.log("Music playing");
        })
        .catch((error) => {
          console.log("Audio failed:", error);
        });
    } else {
      audio.pause();
      setMusicPlaying(false);
      console.log("Music paused");
    }
  };

  return (
    <div className="caret-transparent bg-transparent fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 backdrop-blur-md  lg:backdrop-blur-none">
      <a href="#">
        <div className="text-white font-kick  lg:hidden font-extralight">
          A. Najjar
        </div>
      </a>
      <div className=" hidden lg:flex items-center justify-between w-full max-w-4xl mx-auto text-white font-bold mt-5  px-4 lg:bg-black/50 lg:rounded-lg lg:p-4 ">
        <a href="#">
          <div className="relative group cursor-pointer">
            <span className="transition-colors duration-300 group-hover:text-blue-300">
              Main
            </span>
            <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></div>
          </div>
        </a>
        <a href="#About">
          <div className="relative group cursor-pointer">
            <span className="transition-colors duration-300 group-hover:text-blue-300">
              Services
            </span>
            <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></div>
          </div>
        </a>
        <a href="#Projects">
          <div className="relative group cursor-pointer">
            <span className="transition-colors duration-300 group-hover:text-blue-300">
              Projects
            </span>
            <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></div>
          </div>
        </a>
<a href="#Certificates">
        <div className="relative group cursor-pointer">
          <span className="transition-colors duration-300 group-hover:text-blue-300">
            Certificates
          </span>
          <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></div>
        </div></a>
        <Link to="/ArticleMenuPage">
          <div className="relative group cursor-pointer">
            <span className="transition-colors duration-300 group-hover:text-blue-300">
              Articles
            </span>
            <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></div>
          </div>
        </Link>

        <div className="relative group cursor-pointer">
          <span className="transition-colors duration-300 group-hover:text-blue-300">
            Contact
          </span>
          <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></div>
        </div>
      </div>

      <div className="flex items-center gap-5 lg:gap-50 lg:mx-5 lg:hidden">
        <div onClick={handleMusicToggle} className="cursor-pointer text-white ">
          {musicPlaying ? (
            <IoVolumeMediumSharp size={25} className="lg:size-10" />
          ) : (
            <IoVolumeMuteSharp size={25} className="lg:size-10" />
          )}
        </div>
        <div className="cursor-pointer text-white" onClick={handleNavClick}>
          <Menu size={25} className="lg:size-10" />
        </div>
      </div>
      <style>{`
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 10px; 
  }
`}</style>

      {musicPlaying ? (
        <Volume2
          className="fixed bottom-1/40 left-1/160 text-blue-400 z-50  hidden lg:block size-10 -rotate-3 hover:cursor-pointer hover:scale-105"
          onClick={handleMusicToggle}
        />
      ) : (
        <VolumeX
          className="fixed bottom-1/40 left-1/160 text-blue-400 z-50  hidden lg:block size-10 -rotate-3 hover:cursor-pointer hover:scale-105"
          onClick={handleMusicToggle}
        />
      )}
    </div>
  );
}
