/** Play the short UI click sound. Fire-and-forget; ignores autoplay rejections. */
export function playClickSound() {
  const audio = new Audio("/portfolioClick.mp3");
  audio.volume = 0.5;
  audio.play().catch(() => {});
}
