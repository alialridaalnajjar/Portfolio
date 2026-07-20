// Singleton that owns the single background-music element and broadcasts its
// play/pause state to any subscribed React component.
class AudioManager {
  private static instance: AudioManager;
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private listeners = new Set<(isPlaying: boolean) => void>();

  // Browsers block audio autoplay until the user interacts with the page, so we
  // fall back to starting playback on the first gesture anywhere.
  private readonly gestureEvents = ["pointerdown", "keydown", "touchstart"];
  private gestureHandler: (() => void) | null = null;

  private constructor() {}

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  /** Create the audio element once and try to start playback. Safe to call repeatedly. */
  initialize() {
    if (this.audio) return;

    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.volume = 0.1;
    // Don't fight the background video for bandwidth on first paint — the file is
    // only fetched once we actually start playing.
    audio.preload = "none";
    this.audio = audio;

    audio.play().then(
      () => this.setPlaying(true),
      () => this.bindFirstGesture(),
    );
  }

  play() {
    if (!this.audio || this.isPlaying) return;
    // Flip optimistically so the sprite / volume icon react instantly instead of
    // waiting for the mp3 to buffer.
    this.setPlaying(true);
    this.audio.play().catch(() => {
      this.setPlaying(false);
      this.bindFirstGesture();
    });
  }

  pause() {
    if (!this.audio || !this.isPlaying) return;
    this.audio.pause();
    this.setPlaying(false);
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

  subscribe(listener: (isPlaying: boolean) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private bindFirstGesture() {
    if (this.gestureHandler) return;
    const handler = () => {
      this.unbindFirstGesture();
      this.play();
    };
    this.gestureHandler = handler;
    this.gestureEvents.forEach((event) =>
      document.addEventListener(event, handler, { passive: true }),
    );
  }

  private unbindFirstGesture() {
    if (!this.gestureHandler) return;
    this.gestureEvents.forEach((event) =>
      document.removeEventListener(event, this.gestureHandler!),
    );
    this.gestureHandler = null;
  }

  private setPlaying(value: boolean) {
    if (this.isPlaying === value) return;
    this.isPlaying = value;
    this.listeners.forEach((listener) => listener(this.isPlaying));
  }
}

export default AudioManager.getInstance();
