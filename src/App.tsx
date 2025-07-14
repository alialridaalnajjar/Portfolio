import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";
import AudioManager from "./utils/AudioManager";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showChatSection, setShowChatSection] = useState(true);

  const [musicPlaying, setMusicPlaying] = useState(AudioManager.getIsPlaying());
  const [navClicked, setNavClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleMusicToggle = () => {
    AudioManager.toggle();
  };

  return (
    <Router>
      <Routes>
        <Route
          element={
            <HomePage
              musicPlaying={musicPlaying}
              setMusicPlaying={setMusicPlaying}
              navClicked={navClicked}
              setNavClicked={setNavClicked}
              isClosing={isClosing}
              setIsClosing={setIsClosing}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              showMessages={showMessages}
              setShowMessages={setShowMessages}
              showChatSection={showChatSection}
              setShowChatSection={setShowChatSection}
              handleMusicToggle={handleMusicToggle}
            />
          }
          path="/"
        />
        <Route element={<ArticlePage />} path="/Article/:slug" />
      </Routes>
    </Router>
  );
}

export default App;
