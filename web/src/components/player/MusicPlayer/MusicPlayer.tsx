import { useStore } from "@nanostores/react";
import { useEffect, useRef, useState } from "react";
import { activeAudio, isPlaying } from "../../../stores/musicStore";
import MusicProgress from "../MusicProgress/MusicProgress";
import PlayButton from "../PlayButton/PlayButton";
import ForwardButton from "../SkipNextButton/SkipNextButton";
import RewindButton from "../SkipPreviousButton/SkipPreviousButton";
import styles from "./MusicPlayer.module.css";

const MusicPlayer = () => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [duration, setDuration] = useState<number>(0);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const trackInfo = useStore(activeAudio);
	const isSongPlaying = useStore(isPlaying);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const onLoadedMetadata = () => setDuration(audio.duration);
		const onTimeUpdate = () => setCurrentTime(audio.currentTime);
		const onEnded = () => {
			isPlaying.set(false);
			setCurrentTime(0);
			// You can add other logic here like auto-playing next track
		};

		audio.addEventListener("loadedmetadata", onLoadedMetadata);
		audio.addEventListener("timeupdate", onTimeUpdate);
		audio.addEventListener("ended", onEnded);

		return () => {
			audio.removeEventListener("loadedmetadata", onLoadedMetadata);
			audio.removeEventListener("timeupdate", onTimeUpdate);
			audio.removeEventListener("ended", onEnded);
		};
	}, []);

	const togglePlay = () => {
		if (audioRef.current) {
			if (isSongPlaying) {
				isPlaying.set(false);
			} else {
				isPlaying.set(true);
			}
		}
	};

	if (audioRef.current) {
		const audio = audioRef.current as HTMLAudioElement;

		if (isSongPlaying) {
			audio.play();
		} else {
			audio.pause();
		}
	}

	const onSeek = (seekTime: number) => {
		if (audioRef.current) audioRef.current.currentTime = seekTime;
		setCurrentTime(seekTime);
	};

	return (
		<section className={styles["music-player-container"]}>
			<audio ref={audioRef} src={trackInfo?.url}></audio>
			<div className={styles["music-player"]}>
				<div className={styles["music-info"]}>
					<p className={styles["music-name"]}>{trackInfo?.name}</p>

					<p className={styles["music-artist"]}>{trackInfo?.artist}</p>
				</div>
				<div className={styles["music-controls"]}>
					<RewindButton />
					<PlayButton playing={isSongPlaying} onClick={togglePlay} />
					<ForwardButton />
				</div>
				<MusicProgress
					duration={duration}
					currentTime={currentTime}
					onSeekEnd={onSeek}
				/>
			</div>
		</section>
	);
};

export default MusicPlayer;
