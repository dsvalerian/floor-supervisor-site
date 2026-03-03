import styles from "./FilterButton.module.css";

interface FilterButtonProps {
	onClick: () => void;
}

const PlayButton = ({ onClick }: FilterButtonProps) => {
	return (
		<button className={styles["filter-button"]} onClick={onClick}>
			<span className={`material-icons-outlined ${styles["icon"]}`}>filter_alt</span>
		</button>
	);
};

export default PlayButton;
