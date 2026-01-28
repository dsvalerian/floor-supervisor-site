import styles from "./PlayButton.module.css";

interface PlayPauseButtonProps {
	playing: boolean;
	onClick: () => void;
}

const PlayButton = ({ playing, onClick }: PlayPauseButtonProps) => {
	return (
		<button className={styles["play-button"]} onClick={onClick}>
			{(playing && (
				<span className={`material-icons-outlined ${styles["icon"]}`}>
					pause_circle
				</span>
			)) || (
				<span className={`material-icons-outlined ${styles["icon"]}`}>
					play_circle
				</span>
			)}
		</button>
	);
};

export default PlayButton;
