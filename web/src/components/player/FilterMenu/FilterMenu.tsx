import { createPortal } from "react-dom";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./FilterMenu.module.css";

interface FilterMenuProps {
	categories: string[];
	setIsFilterOpen: (open: boolean) => void;
}

const FilterMenu = ({ categories, setIsFilterOpen }: FilterMenuProps) =>
	createPortal(
		<aside className={styles["filter-drawer"]} aria-label="Post filters">
			<CloseButton onClick={() => setIsFilterOpen(false)} />
			<ul className={styles["category-list"]}>
				{categories.map(category => (
					<li key={category} className={styles["list-item"]}>
						<label className={styles["category-label"]}>
							<input type="checkbox" className={styles["category-checkbox"]} />
							<span className={styles["category-text"]}>{category}</span>
						</label>
					</li>
				))}
			</ul>
		</aside>,
		document.body,
	);

export default FilterMenu;
