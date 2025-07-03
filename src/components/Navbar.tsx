import type { ClickSoundType } from "@/types/clickSoundType";
import { Menu } from "lucide-react";
import React from "react";
import { IoVolumeMediumSharp, IoVolumeMuteSharp } from "react-icons/io5";

export default function Navbar({handClickSound}:ClickSoundType) {
  const [musicPlaying, setMusicPlaying] = React.useState(true);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // Auto-start music when component mounts
  React.useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.1;
    }

    const audio = audioRef.current;

    // Try to play automatically
    audio
      .play()
      .then(() => {
        setMusicPlaying(true);
        console.log("Music auto-started");
      })
      .catch((error) => {
        console.log("Auto-play blocked by browser:", error);
        setMusicPlaying(false);
      });
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
    <div className="bg-transparent fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 backdrop-blur-md">
      <div className="text-white font-bold">Ali Najjar</div>
      <div className="flex items-center gap-2">
        <div onClick={handleMusicToggle} className="cursor-pointer text-white">
          {musicPlaying ? (
            <IoVolumeMediumSharp size={25} />
          ) : (
            <IoVolumeMuteSharp size={25} />
          )}
        </div>
        <div className="cursor-pointer text-white">
          <Menu size={25} />
        </div>
      </div>
    </div>
  );
}
