const CLICK_SOUND_URL = "/portfolioClick.mp3";
// The mp3 opens with ~40ms of silence; skipping it makes the click feel instant.
const CLICK_LEAD_IN_SECONDS = 0.04;

// Download the click sound once, up front, so a click never waits on the network.
const clickBytes: Promise<ArrayBuffer | null> = fetch(CLICK_SOUND_URL)
  .then((response) => response.arrayBuffer())
  .catch(() => null);

let context: AudioContext | null = null;
let clickBuffer: AudioBuffer | null = null;
let decoding = false;

/** Play the short UI click sound. Fire-and-forget; ignores autoplay rejections. */
export function playClickSound() {
  // Browsers only allow an AudioContext to start from a user gesture, so it is
  // created on the first click rather than at load.
  context ??= new AudioContext();
  if (context.state === "suspended") context.resume().catch(() => {});

  if (clickBuffer) {
    const gain = context.createGain();
    gain.gain.value = 0.5;
    const source = context.createBufferSource();
    source.buffer = clickBuffer;
    source.connect(gain).connect(context.destination);
    source.start(0, CLICK_LEAD_IN_SECONDS);
    return;
  }

  // First click: the sound is decoded here (a few milliseconds), then played.
  if (decoding) return;
  decoding = true;
  const ctx = context;
  clickBytes
    .then((bytes) => (bytes ? ctx.decodeAudioData(bytes) : null))
    .then((buffer) => {
      if (!buffer) return;
      clickBuffer = buffer;
      playClickSound();
    })
    .catch(() => {})
    .finally(() => {
      decoding = false;
    });
}
