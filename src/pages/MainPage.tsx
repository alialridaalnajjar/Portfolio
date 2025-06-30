import ThreeDButton from "@/secondaryComponents/ThreeDButton";
import bgVid from "../assets/VerticalBg.mp4"; // or whatever your video file extension is
import Navbar from "@/components/Navbar";

export default function MainPage() {
  return (
    <div className="relative h-screen min-h-screen  overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute  w-full h-full object-cover z-0"
      >
        <source src={bgVid} type="video/mp4" />
      </video>
      
      <Navbar />
      <div className="flex flex-col items-center justify-around  h-full relative gap-2 ">
       
        
       
         <ThreeDButton>More Of <span className="font-serif">Ali</span></ThreeDButton>
        
         <ThreeDButton>Download Resume!</ThreeDButton></div>
  
    </div>
  );
}
