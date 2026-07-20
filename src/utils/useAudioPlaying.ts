import { useEffect, useState } from "react";
import AudioManager from "./AudioManager";

/** Subscribe to the shared background-music play state. */
export function useAudioPlaying(): boolean {
  const [isPlaying, setIsPlaying] = useState(AudioManager.getIsPlaying());

  useEffect(() => AudioManager.subscribe(setIsPlaying), []);

  return isPlaying;
}
