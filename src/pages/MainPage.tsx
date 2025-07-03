import Navbar from "@/components/Navbar";
import ThreeDButton from "@/secondaryComponents/ThreeDButton";
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
    <div className="relative h-screen min-h-screen  overflow-hidden cursor-auto lg:bg-green-300">
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
      <div className="flex flex-col items-center justify-around  h-full relative gap-2 ">
        <ThreeDButton handClickSound={handClickSound}>
          More Of <span className="font-serif">Ali</span>
        </ThreeDButton>

        <ThreeDButton handClickSound={handClickSound}>
          Download Resume!
        </ThreeDButton>
      </div>
    </div>
  );
}
