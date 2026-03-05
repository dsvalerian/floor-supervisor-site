import { createPortal } from "react-dom";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./FilterMenu.module.css";
import { selectedCategories } from "../../../stores/categoriesStore";
import { useStore } from "@nanostores/react";

interface FilterMenuProps {
	categories: string[];
	setIsFilterOpen: (open: boolean) => void;
}

const FilterMenu = ({ categories, setIsFilterOpen }: FilterMenuProps) => {
	const selected = useStore(selectedCategories);

	const toggleCategory = (category: string) => {
		const newCategories = selected.includes(category)
			? selected.filter(c => c !== category)
			: [...selected, category];

		selectedCategories.set(newCategories);
	};

	return createPortal(
		<aside className={styles["filter-drawer"]} aria-label="Post filters">
			<CloseButton onClick={() => setIsFilterOpen(false)} />
			<ul className={styles["category-list"]}>
				{categories.map(category => (
					<li key={category} className={styles["list-item"]}>
						<label className={styles["category-label"]}>
							<input
								type="checkbox"
								className={styles["category-checkbox"]}
								checked={selected.includes(category)}
								onChange={() => toggleCategory(category)}
							/>
							<span className={styles["category-text"]}>{category}</span>
						</label>
					</li>
				))}
			</ul>
		</aside>,
		document.body,
	);
};

export default FilterMenu;
