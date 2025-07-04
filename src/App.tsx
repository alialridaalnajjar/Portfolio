import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router >
      <Routes>
        <Route element={<HomePage/> } path="/" />
        <Route element={<ContentPage/>} path="/ContentPage"/>
      </Routes>
    </Router>
  );
}

export default App;
