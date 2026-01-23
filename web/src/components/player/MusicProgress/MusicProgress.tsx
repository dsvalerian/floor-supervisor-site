import { formatSeconds } from "../../../lib/utils";
import styles from "./MusicProgress.module.css";
import {
	useState,
	type ChangeEvent,
	type MouseEvent,
	type TouchEvent,
} from "react";

interface MusicProgressProps {
	duration?: number;
	currentTime?: number;
	onSeekEnd?: (seekTime: number) => void;
}

const MusicProgress = ({
	duration,
	currentTime,
	onSeekEnd,
}: MusicProgressProps) => {
	const [isSeeking, setIsSeeking] = useState<boolean>(false);
	const [seekValue, setSeekValue] = useState<number>(0);

	// Update just the values when seeking
	const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
		setIsSeeking(true);
		setSeekValue(Number(e.target.value));
	};

	// Done seeking, call the handler
	const handleSeekEnd = (
		e: MouseEvent<HTMLInputElement> | TouchEvent<HTMLInputElement>,
	) => {
		setIsSeeking(false);
		if (onSeekEnd) {
			onSeekEnd(seekValue);
		}
	};

	return (
		<div className={styles["music-progress"]}>
			<p className={`${styles["left"]} ${styles["text"]}`}>
				{formatSeconds(isSeeking ? seekValue : currentTime, !duration)}
			</p>
			<input
				className={styles["progress-bar"]}
				type="range"
				min={0}
				max={duration || 0}
				step={0.1}
				value={isSeeking ? seekValue : currentTime}
				style={{ width: "100%", margin: "1em 0" }}
				aria-label="Seek"
				onChange={handleSeek}
				onMouseUp={handleSeekEnd}
				onTouchEnd={handleSeekEnd}
			/>
			<p className={`${styles["right"]} ${styles["text"]}`}>
				{formatSeconds(duration, !duration)}
			</p>
		</div>
	);
};

export default MusicProgress;
