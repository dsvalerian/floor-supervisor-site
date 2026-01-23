import { useEffect, useRef, useState } from "react";
import ForwardButton from "../SkipNextButton/SkipNextButton";
import MusicProgress from "../MusicProgress/MusicProgress";
import PlayPauseButton from "../PlayButton/PlayButton";
import RewindButton from "../SkipPreviousButton/SkipPreviousButton";
import styles from "./MusicPlayer.module.css";

interface MusicPlayerProps {
	songUrl?: string;
}

const MusicPlayer = ({ songUrl }: MusicPlayerProps) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setPlaying] = useState<boolean>(false);
	const [duration, setDuration] = useState<number>(0);
	const [currentTime, setCurrentTime] = useState<number>(0);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const onLoadedMetadata = () => setDuration(audio.duration);
		const onTimeUpdate = () => setCurrentTime(audio.currentTime);
		const onEnded = () => {
			setPlaying(false);
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
			const audio = audioRef.current as HTMLAudioElement;
			if (audio.paused) {
				audio.play();
				setPlaying(true);
				setDuration(audio.duration);
			} else {
				audio.pause();
				setPlaying(false);
				setDuration(audio.duration);
			}
		}
	};

	const onSeek = (seekTime: number) => {
		if (audioRef.current) audioRef.current.currentTime = seekTime;
		setCurrentTime(seekTime);
	};

	return (
		<section className={styles["music-player-container"]}>
			<audio ref={audioRef} src={songUrl}></audio>
			<div className={styles["music-player"]}>
				<div className={styles["music-controls"]}>
					<RewindButton />
					<PlayPauseButton playing={isPlaying} onClick={togglePlay} />
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
