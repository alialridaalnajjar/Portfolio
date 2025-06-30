import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import LoadingPage from "./pages/LoadingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainPage/> } path="/MainPage" />
        <Route element={<LoadingPage/> } path="/" />

      </Routes>
    </Router>
  );
}

export default App;
