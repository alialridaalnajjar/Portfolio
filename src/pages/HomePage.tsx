import { ContactMeSection } from "@/components/ContactMeSection";
import { Footer } from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import { Certificates } from "@/data/certificates";
import QuoteGenerator from "@/secondaryComponents/QuoteGenerator";
import { Timeline } from "@/secondaryComponents/TimeLine";
import VerticalLine from "@/secondaryComponents/VerticalLine";
import ArticleSection from "./ArticleSection";
import MainPage from "./MainPage";
import React from "react";

interface HomePageProps {
  musicPlaying: boolean;
  setMusicPlaying: (playing: boolean) => void;
  navClicked: boolean;
  setNavClicked: (clicked: boolean) => void;
  isClosing: boolean;
  setIsClosing: (closing: boolean) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  showMessages: boolean;
  setShowMessages: (show: boolean) => void;
  showChatSection: boolean;
  setShowChatSection: (show: boolean) => void;
  handleMusicToggle: () => void;
}

export default function HomePage({
  musicPlaying,
  setMusicPlaying,
  navClicked,
  setNavClicked,
  isClosing,
  setIsClosing,
  isOpen,
  setIsOpen,
  showMessages,
  setShowMessages,
  showChatSection,
  setShowChatSection,
  handleMusicToggle
}: HomePageProps) {
  
  return (
    <div className="h-auto min-h-auto">
      <MainPage 
        musicPlaying={musicPlaying}
        setMusicPlaying={setMusicPlaying}
        navClicked={navClicked}
        setNavClicked={setNavClicked}
        isClosing={isClosing}
        setIsClosing={setIsClosing}
      />
      <ServiceSection />
      <ProjectSection />
      <Timeline data={Certificates} />
      <div className=" lg:flex lg:flex-row lg:justify-center  lg:gap-10 bg-black lg:px-40 lg:pt-20 h-auto min-h-fit">
        <ArticleSection 
          handleMusicToggle={handleMusicToggle} 
          musicPlaying={musicPlaying}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          showMessages={showMessages}
          setShowMessages={setShowMessages}
          showChatSection={showChatSection}
          setShowChatSection={setShowChatSection}
        />
        <VerticalLine />
        <QuoteGenerator />
      </div>
      <ContactMeSection />
      <Footer />
    </div>
  );
}
