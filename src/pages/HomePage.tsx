import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import { Certificates } from "@/data/certificates";
import { Timeline } from "@/secondaryComponents/TimeLine";
import ArticleSection from "./ArticleSection";
import MainPage from "./MainPage";
import QuoteGenerator from "@/secondaryComponents/QuoteGenerator";
import VerticalLine from "@/secondaryComponents/VerticalLine";
import { Footer } from "@/components/Footer";
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
      <Footer />
    </div>
  );
}
