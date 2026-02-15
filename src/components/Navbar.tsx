import { Menu, Volume2, VolumeX, X } from "lucide-react";
import React from "react";
import { IoVolumeMediumSharp, IoVolumeMuteSharp } from "react-icons/io5";
import AudioManager from "../Utils/AudioManager";
import { Link } from "react-router-dom";

export type ClickSoundType = {
  handClickSound: () => void;
  handleNavClick: () => void;
  navClicked?: boolean; 
};

export default function Navbar({
  handClickSound,
  handleNavClick,
  navClicked = false, // Default to false
}: ClickSoundType) {

  const [localMusicPlaying, setLocalMusicPlaying] = React.useState(
    AudioManager.getIsPlaying()
  );

  React.useEffect(() => {
    const unsubscribe = AudioManager.subscribe((isPlaying) => {
      setLocalMusicPlaying(isPlaying);
    });

    return unsubscribe;
  }, []);

  const handleMusicToggle = () => {
    handClickSound();
    AudioManager.toggle();
  };

  const handleMenuClick = () => {
    handleNavClick(); 
  };

  return (
    <div className="caret-transparent bg-transparent fixed top-0 left-0 w-full z-50 flex items-center justify-between lg:p-10 p-4 backdrop-blur-md lg:backdrop-blur-none">
      <Link to="/">
        <div className="text-white font-kick lg:hidden font-extralight">
          A. Najjar
        </div>
      </Link>

      <div className="hidden lg:flex items-center justify-between w-full max-w-4xl mx-auto text-white font-bold    px-4 lg:bg-black/50 lg:rounded-lg ">
        <Link to="/">
          <div className="relative group cursor-pointer">
            <span className="transition-colors duration-300 group-hover:text-blue-300">
              Main
            </span>
            <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></div>
          </div>
        </Link>
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

        <div className="parent-cert ">
<div className="h-13 flex flex-row items-center justify-center ">
           <a href="#Certificates" className="relative group cursor-pointer">
            <span className="transition-colors duration-300 group-hover:text-blue-300 min-h-50">
              Certificates
            </span>
            <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></div>
          </a>
</div>
          <Link to="/certificates" className=" absolute bottom-0 p-2 left-51/100 cursor-pointer child-cert bg-black/50  rounded-b-lg">
            <span className="transition-colors duration-300 hover:text-blue-300">
             Full Certificates
            </span>
            <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out hover:w-full hover:left-0"></div>
          </Link>


        </div>
        <a href="#Articles">
          <div className="relative group cursor-pointer">
            <span className="transition-colors duration-300 group-hover:text-blue-300">
              Articles
            </span>
            <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></div>
          </div>
        </a>
        <a href="#Contact">
          <div className="relative group cursor-pointer">
            <span className="transition-colors duration-300 group-hover:text-blue-300">
              Contact
            </span>
            <div className="absolute bottom-[-5px] left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></div>
          </div>
        </a>
      </div>

      <div className="flex items-center gap-5 lg:gap-50 lg:mx-5 lg:hidden">
        <div onClick={handleMusicToggle} className="cursor-pointer text-white">
          {localMusicPlaying ? (
            <IoVolumeMediumSharp size={25} className="lg:size-10" />
          ) : (
            <IoVolumeMuteSharp size={25} className="lg:size-10" />
          )}
        </div>

        <div
          className={`cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 ${
            navClicked ? "text-blue-400 rotate-90" : "text-white" // Use navClicked prop instead of isNavOpen
          }`}
          onClick={handleMenuClick}
        >
          {navClicked ? ( // Use navClicked prop instead of isNavOpen
            <X
              size={25}
              className="lg:size-10 transition-all duration-300 ease-in-out animate-pulse"
            />
          ) : (
            <Menu
              size={25}
              className="lg:size-10 transition-all duration-300 ease-in-out"
            />
          )}
        </div>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 10px; 
        }
      `}</style>

      {localMusicPlaying ? (
        <Volume2
          className="fixed bottom-1/40 left-1/160 text-blue-400 z-50 hidden lg:block size-10 -rotate-3 hover:cursor-pointer hover:scale-105"
          onClick={handleMusicToggle}
        />
      ) : (
        <VolumeX
          className="fixed bottom-1/40 left-1/160 text-blue-400 z-50 hidden lg:block size-10 -rotate-3 hover:cursor-pointer hover:scale-105"
          onClick={handleMusicToggle}
        />
      )}
    </div>
  );
}
