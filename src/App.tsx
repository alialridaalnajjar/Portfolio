import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ContentPage from "./pages/ContentPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router >
      <Routes>
        <Route element={<MainPage/> } path="/" />
        <Route element={<ContentPage/>} path="/ContentPage"/>
      </Routes>
    </Router>
  );
}

export default App;
