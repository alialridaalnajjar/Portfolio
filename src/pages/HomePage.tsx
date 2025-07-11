import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import MainPage from "./MainPage";
import { Timeline } from "@/secondaryComponents/TimeLine";
import { Certificates } from "@/data/certificates";
export default function HomePage() {
  return (
    <div className="h-auto min-h-auto">
      <MainPage />
      <ServiceSection />
      <ProjectSection />
      <Timeline data={Certificates}/>
    </div>
  );
}
