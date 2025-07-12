import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import { Certificates } from "@/data/certificates";
import { Timeline } from "@/secondaryComponents/TimeLine";
import MainPage from "./MainPage";
import ArticleSection from "./ArticleSection";
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
