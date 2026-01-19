import styles from "./SkipPreviousButton.module.css";

const RewindButton = () => {
	return (
		<button className={styles["skip-prev-button"]}>
			<span className={`material-icons-outlined ${styles["icon"]}`}>
				skip_previous
			</span>
		</button>
	);
};

export default RewindButton;
