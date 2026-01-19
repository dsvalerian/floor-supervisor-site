import styles from "./SkipNext.module.css";

const ForwardButton = () => {
	return (
		<button className={styles["skip-next-button"]}>
			<span className={`material-icons-outlined ${styles["icon"]}`}>
				skip_next
			</span>
		</button>
	);
};

export default ForwardButton;
