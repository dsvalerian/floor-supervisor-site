import { useEffect, useRef, useState } from "react";
import { formatSeconds } from "../../../lib/utils";
import styles from "./PostMusicPlayer.module.css";
import { activeAudio, isPlaying } from "../../../stores/musicStore";
import type { AudioInfo } from "../../../types/audioTypes";
import { useStore } from "@nanostores/react";

interface PostMusicPlayerProps {
	track: AudioInfo;
	textColor: "light" | "dark";
}

const PostMusicPlayer = ({ track, textColor }: PostMusicPlayerProps) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [duration, setDuration] = useState<number>(0);
	const activeTrack = useStore(activeAudio);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const onDurationChange = () => {
			if (audio.duration && isFinite(audio.duration)) {
				setDuration(audio.duration);
			}
		};

		// Check immediately
		onDurationChange();

		audio.addEventListener("durationchange", onDurationChange);

		return () => {
			audio.removeEventListener("durationchange", onDurationChange);
		};
	}, []);

	const handleClick = () => {
		activeAudio.set(track);
		isPlaying.set(true);
	};

	const isActiveTrack = activeTrack === track;

	return (
		<button
			className={`${styles["post-music-player"]} ${isActiveTrack && styles["selected"]} ${styles[`text-color-${textColor}`]}`}
			onClick={handleClick}
		>
			<audio ref={audioRef} src={track.url}></audio>
			<div className={styles["left"]}>
				<span className={`material-icons ${styles["icon"]}`}>play_arrow</span>
				<div className={`${styles["track-text"]}`}>
					<p className={styles["track-name"]}>{track.name}</p>
					<p className={styles["track-artist"]}>{track.artist}</p>
				</div>
			</div>

			<p className={styles["track-duration"]}>{formatSeconds(duration)}</p>
		</button>
	);
};

export default PostMusicPlayer;
