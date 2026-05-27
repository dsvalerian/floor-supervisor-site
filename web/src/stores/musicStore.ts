import { atom } from "nanostores";
import type { AudioInfo } from "../types/audioTypes";

export const activeAudio = atom<AudioInfo | null>(null);
export const isPlaying = atom<boolean>(false);
