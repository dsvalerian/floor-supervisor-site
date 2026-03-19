import { toggleFilterMenu } from "../../../stores/filterMenuStore";
import styles from "./FilterButton.module.css";

interface FilterButtonProps {
	onClick?: () => void;
}

const PlayButton = ({ onClick }: FilterButtonProps) => {
	const handleClick = () => {
		if (onClick) {
			onClick();
			return;
		}

		toggleFilterMenu();
	};

	return (
		<button className={styles["filter-button"]} onClick={handleClick}>
			<span className={`material-icons-outlined ${styles["icon"]}`}>menu</span>
		</button>
	);
};

export default PlayButton;
