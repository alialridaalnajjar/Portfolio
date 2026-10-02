import ServiceSection from "@/components/ServiceSection";
import { BrowserRedirectModal } from "@/secondaryComponents/BrowserRedirectModal";
import { lazy, Suspense } from "react";
import { usePageMeta } from "../Utils/usePageMeta";
import MainPage from "./MainPage";

const HomeBelowFold = lazy(() => import("./HomeBelowFold"));

export default function HomePage() {
  usePageMeta(
    "Ali Al Najjar | Full Stack Developer Portfolio",
    "Portfolio of Ali Al Najjar, a full stack developer working with TypeScript, React, Express and PostgreSQL. Projects, certificates and articles.",
    "/",
  );

  return (
    <div className="h-auto min-h-auto">
      <BrowserRedirectModal />
      <MainPage />
      <ServiceSection />
      <Suspense fallback={<div className="bg-black min-h-screen" />}>
        <HomeBelowFold />
      </Suspense>
    </div>
  );
}
