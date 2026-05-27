import styles from "./CloseButton.module.css";

interface CloseButtonProps {
	onClick: () => void;
}

const PlayButton = ({ onClick }: CloseButtonProps) => {
	return (
		<button className={styles["close-button"]} onClick={onClick}>
			<span className={`material-icons-outlined ${styles["icon"]}`}>close</span>
		</button>
	);
};

export default PlayButton;
