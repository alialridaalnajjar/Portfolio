import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";
import ArticleMenuPage from "./pages/ArticleMenuPage";

function App() {
  return (
    <Router >
      <Routes>
        <Route element={<HomePage/> } path="/" />
        <Route element={<ContentPage/>} path="/ContentPage"/>
        <Route element={<ArticleMenuPage/>} path="/ArticleMenuPage"/>

      </Routes>
    </Router>
  );
}

export default App;
