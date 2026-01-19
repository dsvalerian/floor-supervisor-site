import {
	useState,
	type ChangeEvent,
	type MouseEvent,
	type TouchEvent,
} from "react";
import styles from "./MusicProgress.module.css";
import { formatSeconds } from "../../../lib/utils";

interface MusicProgressProps {
	duration?: number;
	currentTime?: number;
	onSeek?: (seekTime: number) => void;
}

const MusicProgress = ({
	duration,
	currentTime,
	onSeek,
}: MusicProgressProps) => {
	const [isSeeking, setIsSeeking] = useState<boolean>(false);
	const [seekTime, setSeekTime] = useState<number>(0);

	const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
		setIsSeeking(true);
		setSeekTime(Number(e.target.value));
	};

	const handleSeekEnd = (
		e: MouseEvent<HTMLInputElement> | TouchEvent<HTMLInputElement>
	) => {
		setIsSeeking(false);
		if (onSeek) {
			onSeek(seekTime);
		}
	};

	return (
		<div className={styles["music-progress"]}>
			<p className={styles["left"]}>
				{formatSeconds(isSeeking ? seekTime : currentTime, !duration)}
			</p>
			<input
				className={styles["progress-bar"]}
				type="range"
				min={0}
				max={duration || 0}
				step={0.1}
				value={isSeeking ? seekTime : currentTime}
				style={{ width: "100%", margin: "1em 0" }}
				aria-label="Seek"
				onChange={handleSeek}
				onMouseUp={handleSeekEnd}
				onTouchEnd={handleSeekEnd}
			/>
			<p className={styles["right"]}>{formatSeconds(duration, !duration)}</p>
		</div>
	);
};

export default MusicProgress;
