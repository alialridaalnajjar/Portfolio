import ServiceSection from "@/components/ServiceSection";
import MainPage from "./MainPage";
import ProjectSection from "@/components/ProjectSection";

export default function HomePage() {
  return (
    <div className="h-auto min-h-screen">
      <MainPage />
      <ServiceSection />
      <ProjectSection />
    </div>
  );
}
