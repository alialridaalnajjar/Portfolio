// singelton :(
class AudioManager {
  private static instance: AudioManager;
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private listeners: Set<(isPlaying: boolean) => void> = new Set();

  private constructor() {}

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  initialize() {
    if (!this.audio) {
      this.audio = new Audio("/music.mp3");
      this.audio.loop = true;
      this.audio.volume = 0.1;

      this.audio
        .play()
        .then(() => {
          this.isPlaying = true;
          this.notifyListeners();
        })
        .catch(() => {
          const handleFirstClick = () => {
            this.play();
            document.removeEventListener("click", handleFirstClick);
          };
          document.addEventListener("click", handleFirstClick);
        });
    }
  }

  play() {
    if (this.audio && !this.isPlaying) {
      this.audio
        .play()
        .then(() => {
          this.isPlaying = true;
          this.notifyListeners();
        })
        .catch(console.error);
    }
  }

  pause() {
    if (this.audio && this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
      this.notifyListeners();
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // FIXED: Return a function, don't call it
  subscribe(listener: (isPlaying: boolean) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.isPlaying));
  }
}

export default AudioManager.getInstance();
