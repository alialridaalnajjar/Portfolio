import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ArticlePage from "./pages/ArticlePage";
import ArticleSection from "./pages/ArticleSection";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ContentPage />} path="/ContentPage" />
        <Route element={<ArticleSection />} path="/ArticleMenuPage" />
        <Route element={<ArticlePage />} path="/Article/:slug" />
      </Routes>
    </Router>
  );
}

export default App;
