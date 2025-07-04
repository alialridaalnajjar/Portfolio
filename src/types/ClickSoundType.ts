export type ClickSoundType = {
  handClickSound: () => void;
  handleNavClick: () => void;
  musicPlaying?: boolean;
  setMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};
