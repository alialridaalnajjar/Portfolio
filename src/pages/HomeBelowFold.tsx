import { ContactMeSection } from "@/components/ContactMeSection";
import { Footer } from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import { Certificates } from "@/data/certificates";
import QuoteGenerator from "@/secondaryComponents/QuoteGenerator";
import ThreeDButton from "@/secondaryComponents/ThreeDButton";
import { Timeline } from "@/secondaryComponents/TimeLine";
import VerticalLine from "@/secondaryComponents/VerticalLine";
import { Link } from "react-router-dom";
import ArticleSection from "./ArticleSection";

// Everything on the home page below the hero and services sections. Loaded as a
// separate chunk so the first paint doesn't wait on it.
export default function HomeBelowFold() {
  return (
    <>
      <ProjectSection />
      <Timeline data={Certificates} />
      <div className="flex flex-row items-center justify-center bg-black text-white py-2">
        <Link to="/certificates">
          <ThreeDButton>Check The REST !</ThreeDButton>
        </Link>
      </div>
      <div className=" lg:flex lg:flex-row lg:justify-center  lg:gap-10 bg-black lg:px-40 lg:pt-20 h-auto min-h-fit">
        <ArticleSection />
        <VerticalLine />
        <QuoteGenerator />
      </div>
      <ContactMeSection />
      <Footer />
    </>
  );
}
