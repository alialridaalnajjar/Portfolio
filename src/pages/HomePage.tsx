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
export default function HomePage() {
  return (
    <div className="h-auto min-h-auto">
      <MainPage />
      <ServiceSection />
      <ProjectSection />
      <Timeline data={Certificates} />
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
