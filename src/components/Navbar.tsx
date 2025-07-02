import { IoVolumeMediumSharp } from "react-icons/io5";
import { Menu } from "lucide-react";
import React from "react";
export default function Navbar() {
  const [musicPlaying, setMusicPlaying] = React.useState(true);

  const handleMusicToggle = () => {
    setMusicPlaying(!musicPlaying);
    const audio = new Audio("menuMusic.wav");

    if (musicPlaying) {
      audio.loop = true;
      audio
        .play()
        .then(() => {
          console.log("Music is playing");
        })
        .catch((error) => {
          console.error("Error playing music:", error);
        });
    } else {
      audio.pause();
    }
  };

  return (
    <div className=" bg-transparent fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 backdrop-blur-md">
      <div>Ali Najjar</div>
      <div className="flex items-center gap-2 ">
        <div>
          <IoVolumeMediumSharp size={25} />
        </div>
        <div>
          <Menu size={25} onClick={handleMusicToggle} />
        </div>
      </div>
    </div>
  );
}
