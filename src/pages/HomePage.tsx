import { ContactMeSection } from "@/components/ContactMeSection";
import { Footer } from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import { Certificates } from "@/data/certificates";
import { BrowserRedirectModal } from "@/secondaryComponents/BrowserRedirectModal";
import QuoteGenerator from "@/secondaryComponents/QuoteGenerator";
import ThreeDButton from "@/secondaryComponents/ThreeDButton";
import { Timeline } from "@/secondaryComponents/TimeLine";
import VerticalLine from "@/secondaryComponents/VerticalLine";
import { Link } from "react-router-dom";
import ArticleSection from "./ArticleSection";
import MainPage from "./MainPage";

export default function HomePage() {
  return (
    <div className="h-auto min-h-auto">
      <BrowserRedirectModal />
      <MainPage />
      <ServiceSection />
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
    </div>
  );
}
