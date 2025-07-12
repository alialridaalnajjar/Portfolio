import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import { Certificates } from "@/data/certificates";
import { Timeline } from "@/secondaryComponents/TimeLine";
import ArticleSection from "./ArticleSection";
import MainPage from "./MainPage";
export default function HomePage() {
  return (
    <div className="h-auto min-h-auto">
      <MainPage />
      <ServiceSection />
      <ProjectSection />
      <Timeline data={Certificates} />
      <ArticleSection />
    </div>
  );
}
