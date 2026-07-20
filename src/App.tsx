import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ArticlePage from "./pages/ArticlePage";
import FullCertificatesPage from "./pages/FullCertificatesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ArticlePage />} path="/Article/:slug" />
        <Route element={<FullCertificatesPage />} path="/Certificates" />
      </Routes>
    </Router>
  );
}

export default App;
