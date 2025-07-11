import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import MainPage from "./MainPage";

export default function HomePage() {
  return (
    <div className="h-auto min-h-screen">
      <MainPage />
      <ServiceSection />
      <ProjectSection />
    </div>
  );
}
