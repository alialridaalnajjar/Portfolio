import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

// Secondary pages are split out so the home page doesn't pay for them up front.
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const FullCertificatesPage = lazy(() => import("./pages/FullCertificatesPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="bg-black min-h-screen" />}>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ArticlePage />} path="/Article/:slug" />
          <Route element={<FullCertificatesPage />} path="/Certificates" />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
