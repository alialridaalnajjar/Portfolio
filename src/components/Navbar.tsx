import { Menu } from "lucide-react";
import React from "react";
import { IoVolumeMediumSharp, IoVolumeMuteSharp } from "react-icons/io5";
import type { ClickSoundType } from "../types/ClickSoundType";

export default function Navbar({ handClickSound }: ClickSoundType) {
  const [musicPlaying, setMusicPlaying] = React.useState(false);
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
    <div className="bg-transparent fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 backdrop-blur-md ">
      <div className="text-white font-bold lg:text-2xl lg:hidden">
        Ali Najjar
      </div>
      <div className=" hidden lg:flex items-center justify-between w-full max-w-4xl mx-auto text-white font-bold mt-5  px-4">
        <div>My Mission</div>
        <div>Projects</div>
        <div>Articles</div>
        <div>Contact</div>
      </div>

      <div className="lg:visible hidden "></div>

      <div className="flex items-center gap-5 lg:gap-50 lg:mx-5 lg:hidden">
        <div onClick={handleMusicToggle} className="cursor-pointer text-white ">
          {musicPlaying ? (
            <IoVolumeMediumSharp size={25} className="lg:size-10" />
          ) : (
            <IoVolumeMuteSharp size={25} className="lg:size-10" />
          )}
        </div>
        <div className="cursor-pointer text-white">
          <Menu size={25} className="lg:size-10" />
        </div>
      </div>
    </div>
  );
}
