import Navbar from "@/components/Navbar";
import { RetroPopup } from "@/secondaryComponents/RetroPopUp";
import ThreeDButton from "@/secondaryComponents/ThreeDButton";
import { TbFileCv } from "react-icons/tb";
import CV from "../assets/AliAlNajjarCV.pdf";
import bgVid from "../assets/VerticalBg.mp4";
export default function MainPage() {
  const handClickSound = () => {
    const clickedAudio = new Audio("/portfolioClick.mp3");
    clickedAudio
      .play()
      .then(() => console.log("clicked ! sound played"))
      .catch((error) => console.error("Error playing click sound:", error));
  };
  return (
    <div className="relative h-auto min-h-screen   overflow-hidden cursor-auto lg:bg-green-300 bg-fuchsia-950 ">
      <RetroPopup />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute  w-full h-full object-cover z-0 lg:-z-10"
      >
        <source src={bgVid} type="video/mp4" />
      </video>
      <Navbar handClickSound={handClickSound} />
      <div className=" mt-25  flex flex-col items-center justify-around  h-full relative gap-12 ">
      <div>rwef</div>

        <ThreeDButton handClickSound={handClickSound}>
          My Adventure
        </ThreeDButton>

        <ThreeDButton handClickSound={handClickSound}>
          The Tech - Stack
        </ThreeDButton>
        <ThreeDButton handClickSound={handClickSound}>
          <a href={CV} download={CV}>
            Download Resume! <TbFileCv className="inline-block" />
          </a>
        </ThreeDButton>
      </div>
    </div>
  );
}
